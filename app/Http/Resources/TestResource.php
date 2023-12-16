<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TestResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $item=parent::toArray($request);
        return [
            "id" => $item["id"],
            "name" => $item["name"],
            "code" => $item["code"],
            "shortName" => $item["shortName"],
            "description" => $item["description"],
            "turnaroundTime" => $item["turnaroundTime"],
            "sample_types" => array_map(fn($item) => [
                "id" => $item["id"],
                "name" => $item["name"],
                "sample_id_required" => $item["sample_id_required"],
                "description" => $item["pivot"]["description"]
            ], $item["sample_types"]),
            "requirements"=>$item["requirements"]
        ];
    }
}
