<?php

namespace App\Traits;

trait Searchable
{
    public function scopeSearch($query, $search = "", $field = "name")
    {
        $table = "";
        if (count(func_get_args())<4)
            $table = $this->getTable().".";
        return $query->where("$table$field", "like", "%$search%");
    }

}
