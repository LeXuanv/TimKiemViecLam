<?php

namespace App\Modules\Category\DTOs;

class GetCategoryDTO
{
    public $name;
    public $id;

    public function __construct($name, $id)
    {
        $this->name = $name;
        $this->id = $id;
    }

    
}
