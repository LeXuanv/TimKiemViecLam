<?php

namespace App\Modules\Address\DTOs;

class GetDistrictDTO
{
    public $name;

    public function __construct($name)
    {
        $this->name = $name;
    }

    
}
