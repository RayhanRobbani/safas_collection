<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Collection extends Model
{
    use HasFactory;

    protected $fillable = [
        'category',
        'image_front',
        'image_back',
        'title',
        'denomination',
        'year',
        'country',
        'material',
        'theme',
        'remark',
        'visibility_status',
    ];
}
