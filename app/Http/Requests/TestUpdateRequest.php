<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TestUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // return auth()->user->hasPermissionTo("Test Edit");
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        $id = $this->route()->parameter("test")->id;
        return [
            "name" => "required|unique:tests,name,$id",
            "shortName" => "required|unique:tests,shortName,$id",
            "code" => "required|unique:tests,code,$id",
            "description" => "required",
            "turnaroundTime" => "required|min:0.1",
            "sample_types" => "required|array|min:1",
            "sample_types.*.id" => "required|exists:sample_types,id",
            "sample_types.*.description" => "required|min:0.1",
        ];
    }
}
