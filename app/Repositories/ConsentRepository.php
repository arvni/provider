<?php

namespace App\Repositories;

use App\Interfaces\ConsentRepositoryInterface;
use App\Models\Consent;
use App\Models\User;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;

class ConsentRepository implements ConsentRepositoryInterface
{
    private Consent $consent;
    private Builder $query;

    public function __construct(Consent $consent)
    {
        $this->consent = $consent;
        $this->query=$consent->newQuery();
    }

    /**
     * Retrieve all consents based on the provided query data.
     *
     */
    public function getAllConsents()
    {
        return $this->consent->orderBy("order")->get();
    }

    /**
     * Get a consent by its ID.
     *
     * @param Consent $consent
     * @return Consent
     */
    public function getConsentById(Consent $consent): Consent
    {
        return $consent;
    }

    /**
     * Delete an consent.
     *
     * @param Consent $consent
     * @return bool|null
     */
    public function deleteConsent(Consent $consent): ?bool
    {
        return $consent->delete();
    }

    /**
     * Create a new consent.
     *
     * @param array $consentDetails
     * @return Consent
     */
    public function createConsent(array $consentDetails): Consent
    {

        return $this->query->create($consentDetails);
    }

    /**
     * Update a consent with new details.
     *
     * @param Consent $consent
     * @param array $newDetails
     * @return Consent
     */
    public function updateConsent(Consent $consent, array $newDetails)
    {
        $consent->fill($newDetails);
        if ($consent->isDirty())
            $consent->save();
        $consent->refresh();
        return $consent;
    }
}
