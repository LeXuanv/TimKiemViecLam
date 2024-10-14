<?php

namespace App\Modules\JobPosition\DTOs;

class GetJobPositionDTO
{
    public $name;

    public function __construct($name)
    {
        $this->name = $name;
    }

    
}
