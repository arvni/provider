<?php

namespace App\Interfaces;

use App\Models\Consent;
use Illuminate\Database\Eloquent\Collection;

interface ConsentRepositoryInterface
{
    public function getAllConsents();

    public function getConsentById(Consent $consent): Consent;

    public function deleteConsent(Consent $consent): ?bool;

    public function createConsent(array $consentDetails): Consent;

    public function updateConsent(Consent $consent, array $newDetails);
}
