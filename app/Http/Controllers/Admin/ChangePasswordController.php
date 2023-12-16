<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Interfaces\UserRepositoryInterface;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class ChangePasswordController extends Controller
{
    protected UserRepositoryInterface $userRepository;

    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * Handle the incoming request.
     */
    public function __invoke(User $user, Request $request)
    {
//        $this->authorize("changePassword",$user);
        $validated = $request->validate([
            'password' => ['required', Password::defaults(), 'confirmed'],
        ]);
        $this->userRepository->updateUser($user, [
            'password' => Hash::make($validated['password']),
        ]);
        return redirect()->route("users.index")->with(["status" => "Password Successfully Changed"]);
    }
}
