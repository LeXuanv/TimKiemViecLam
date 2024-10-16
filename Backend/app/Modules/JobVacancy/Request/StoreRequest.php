<?php

namespace App\Modules\JobVacancy\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'salary' => 'required|numeric',
            'employment_type' => 'required|string',
            'application_deadline' => 'required|date',
            'is_published' => 'boolean',
            'category_id' => 'required|integer',
            'job_position_id' => 'required|integer',
            'address' => 'required|string',
            'province_code' => 'required|string',
        ];
    }

    public function messages()
    {
        return [
            
        ];
    }
}
