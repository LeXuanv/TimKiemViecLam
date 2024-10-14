<?php

namespace App\Modules\Address\DTOs;

class GetProvinceDTO
{
    public $name;

    public function __construct($name)
    {
        $this->name = $name;
    }

    
}
