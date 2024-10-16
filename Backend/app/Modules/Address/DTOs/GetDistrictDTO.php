<?php

namespace App\Modules\Address\DTOs;

class GetDistrictDTO
{
    public $name;
    public $code;

    public function __construct($name, $code)
    {
        $this->name = $name;
        $this->code = $code;
    }
    
}
