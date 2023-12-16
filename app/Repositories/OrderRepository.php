<?php

namespace App\Repositories;

use App\Enums\OrderStatus;
use App\Enums\OrderStep;
use App\Interfaces\OrderRepositoryInterface;
use App\Models\Order;
use App\Models\Patient;
use App\Models\Sample;
use App\Models\User;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;

class OrderRepository implements OrderRepositoryInterface
{
    private Order $order;
    private $query;

    public function __construct(Order $order)
    {
        $this->order = $order;
        $this->query = $order->newQuery();
    }

    /**
     * Retrieve all orders based on the provided query data.
     *
     * @param array $queryData
     * @return LengthAwarePaginator
     */
    public function getAllOrders(array $queryData = []): LengthAwarePaginator
    {
        $query = $this->query
            ->withAggregate("Patient", "fullName")
            ->withAggregate("Patient", "reference_id")
            ->withAggregate("Patient", "dateOfBirth")
            ->withAggregate("Samples", "sampleId");

        if (isset($queryData['filter'])) {
            $this->applyFilters($query, $queryData['filter']);
        }

        if (isset($queryData['orderBy'])) {
            $this->applyOrderBy($query, $queryData['orderBy']);
        }

        $pageSize = $queryData['pageSize'] ?? 10;
        return $query->paginate($pageSize);
    }

    /**
     * Apply filters to the query.
     *
     * @param Builder $query
     * @param array $filters
     * @return void
     */
    private function applyFilters($query, array $filters): void
    {
        if (isset($filters["status"])) {
            $query->status($filters["status"]);
        }
        if (isset($filters['id'])) {
            $query->where('orders.id', 'like', '%' . $filters['id'] . '%');
        }

        if (isset($filters['patient_full_name'])) {

            $query->patientIs("fullName", $filters["patient_full_name"]);
        }

        if (isset($filters['patient_reference_id'])) {
            $query->patientIs('reference_id', $filters['patient_reference_id']);
        }
    }

    /**
     * Apply the order by clause to the query.
     *
     * @param Builder $query
     * @param array $orderBy
     * @return void
     */
    private function applyOrderBy($query, array $orderBy): void
    {
        $field = $orderBy['field'];
        $type = $orderBy['type'];

        $query->orderBy($field, $type);
    }

    /**
     * Get an order by its ID.
     *
     * @param Order $order
     * @return Order
     */
    public function getOrderById(Order $order): Order
    {
        return $order;
    }

    /**
     * Delete an order.
     *
     * @param Order $order
     * @return bool|null
     */
    public function deleteOrder(Order $order): ?bool
    {
        return $order->delete();
    }

    /**
     * Create a new order.
     *
     * @param array $orderDetails
     * @return Order
     */
    public function createOrder(array $orderDetails): Order
    {
        return auth()->user()->Orders()->save(new $this->order([
            "test_method" => $orderDetails["test_method"],
            "step" => OrderStep::PATIENT_DETAILS,
            "status" => OrderStatus::PENDING
        ]));
    }

    /**
     * Update an order with new details.
     *
     * @param Order $order
     * @param array $newDetails
     * @return bool
     */
    public function updateOrder(Order $order, array $newDetails, OrderStep $step)
    {
        $order->fill([
            ...$newDetails,
        ]);
        if ($step == OrderStep::PATIENT_DETAILS) {
            if (isset($newDetails["id"])) {
                $patient = Patient::find($newDetails["id"]);
                $patient->fill([
                    "fullName" => $newDetails["fullName"],
                    "nationality" => $newDetails["nationality"]["code"],
                    "dateOfBirth" => $newDetails["dateOfBirth"],
                    "gender" => $newDetails["gender"],
                    "consanguineousParents" => $newDetails["consanguineousParents"] === "yes",
                    "contact" => $newDetails["contact"] ?? null,
                    "extra" => $newDetails["extra"] ?? null,
                    "isFetus" => $newDetails["isFetus"] ?? false,
                    "reference_id" => $newDetails["reference_id"] ?? null
                ]);
                if ($patient->isDirty())
                    $patient->save();
                $order->Patient()->associate($newDetails["id"]);
            } else {
                $patient = new Patient(
                    [
                        "fullName" => $newDetails["fullName"],
                        "nationality" => $newDetails["nationality"]["code"],
                        "dateOfBirth" => $newDetails["dateOfBirth"],
                        "gender" => $newDetails["gender"],
                        "consanguineousParents" => $newDetails["consanguineousParents"] === "yes",
                        "contact" => $newDetails["contact"] ?? null,
                        "extra" => $newDetails["extra"] ?? null,
                        "isFetus" => $newDetails["isFetus"] ?? false,
                        "reference_id" => $newDetails["reference_id"] ?? null
                    ]
                );
                auth()->user()->Patients()->save($patient);
                $order->Patient()->associate($patient);
            }
        } elseif ($step === OrderStep::SAMPLE_DETAILS) {
            $samplesIds = [];
            foreach ($newDetails["samples"] as $sampleDetails) {
                if (isset($sampleDetails["id"])) {
                    $sample = Sample::find($sampleDetails["id"]);
                    $sample->fill($sampleDetails);
                    $sample->SampleType()->associate($sampleDetails["sample_type"]["id"]);
                    if ($sample->isDirty())
                        $sample->save();
                    $samplesIds[] = $sample->id;
                } else {
                    $sample = new Sample($sampleDetails);
                    $sample->SampleType()->associate($sampleDetails["sample_type"]["id"]);
                    $sample->Order()->associate($order->id);
                    $sample->save();
                    $samplesIds[] = $sample->id;
                }
            }
            $order->Samples()->whereNotIn("id", $samplesIds)->delete();
        } elseif ($step == OrderStep::FINALIZE)
            $order->status = OrderStatus::REQUESTED;
        elseif ($step == OrderStep::CLINICAL_DETAILS)
            $order->clinical_information = $newDetails;
        $order->step = $step->next();
        return $order->save();
    }

    /**
     * Get List of Order Method Ids
     *
     * @param Order $order
     * @return array
     */

    private function getOrderItemsIds(Order $order): array
    {
        return $order->OrderItems()->select("id")->get()->toArray();
    }


    public function updateOrderItems(array $orderItemsDetails, Order $order)
    {
        $previousOrderItemsIds = $this->getOrderItemsIds($order);
        foreach ($orderItemsDetails as $orderItemsDetail) {
            $this->orderItemRepository->createOrUpdateOrderItem($orderItemsDetail, $order);
            $index = array_search($orderItemsDetail["id"], $previousOrderItemsIds);
            if ($index === 0 || $index) {
                array_splice($previousOrderItemsIds, $index, 1);
            }
        }
        if (count($previousOrderItemsIds)) {
            $this->orderItemRepository->deleteManyOrderItemsWithIds($previousOrderItemsIds);
        }
    }

    /**
     * @param Order $order
     * @return int
     */
    public function deleteAllOrderItems(Order $order): int
    {
        return $order->OrderItems()->delete();
    }

    public function getUserOrders(User $user, array $queryData = [])
    {
        $this->query = $user->Orders();
        return $this->getAllOrders($queryData);
    }
}
