<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Gateway extends Model
{
    protected $guarded = [];
    // protected $table = 'gateways'; // テーブル名を明示的に設定

    // 画像URLをフルパスで返すアクセサ
    // public function getImageAttribute($value)
    // {
    //     return asset('upload/gateway/' . $value);
    // }
}
