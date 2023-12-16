<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class TestStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        //return auth()->user()->hasPermissionTo("Test Add");
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            "name" => "required|unique:tests,name",
            "shortName" => "required|unique:tests,shortName",
            "code" => "required|unique:tests,code",
            "turnaroundTime" => "required|min:0.1",
            "description" => "required|min:0.1",
            "sample_types" => "required|array|min:1",
            "sample_types.*.id" => "required|exists:sample_types,id",
            "sample_types.*.description" => "required|min:0.1",
            "requirements.*.label" => "required",
            "requirements.*.type" => "required",
        ];
    }
}
