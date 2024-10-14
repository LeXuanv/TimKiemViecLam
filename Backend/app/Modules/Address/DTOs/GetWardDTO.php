<?php

namespace App\Modules\Address\DTOs;

class GetWardDTO
{
    public $name;

    public function __construct($name)
    {
        $this->name = $name;
    }

    
}
