<?php

namespace App\Modules\JobPosition\DTOs;

class GetJobPositionDTO
{
    public $id;
    public $name;

    public function __construct($name, $id)
    {
        $this->name = $name;
        $this->id = $id;
    }

    
}
