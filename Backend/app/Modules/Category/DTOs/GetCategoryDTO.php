<?php

namespace App\Modules\Category\DTOs;

class GetCategoryDTO
{
    public $name;

    public function __construct($name)
    {
        $this->name = $name;
    }

    
}
