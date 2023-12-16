<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        $id = $this->route()->parameter("user")->id;
        return [

            "name" => "required",
            "userName" => ["required", "unique:users,userName,$id"],
            "mobile" => ["required", "unique:users,mobile,$id"],
            "email" => ["required", "unique:users,email", "email,$id"],
        ];
    }
}
