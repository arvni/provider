<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\AccountResource;
use App\Interfaces\AccountRepositoryInterface;
use App\Models\Account;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    public function __construct(private AccountRepositoryInterface $accountRepository)
    {

    }

    public function index(Request $request)
    {
        $accounts=$this->accountRepository->getAllAccounts($request->all());
        return AccountResource::collection($accounts);
    }

    public function show(Account $account)
    {
        $accounts=$this->accountRepository->getAccountById($account);
        return new AccountResource($account);
    }
}
