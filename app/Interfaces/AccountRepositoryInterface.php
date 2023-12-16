<?php

namespace App\Interfaces;

use App\Models\Account;
use Illuminate\Database\Eloquent\Collection;

interface AccountRepositoryInterface
{
    public function getAllAccounts(array $queryData = []);

    public function getAccountById(Account $account): Account;

    public function deleteAccount(Account $account): ?bool;

    public function createAccount(array $accountDetails): Account;

    public function updateAccount(Account $account, array $newDetails);
}
