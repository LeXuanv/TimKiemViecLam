<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('categories')->delete();

        DB::table('categories')->insert([
           0 => [
               'name' => 'Công nghệ thông tin'
           ],
           1 => [
               'name' => 'Du lịch, khách sạn'
           ],
           2 => [
               'name' => 'Dược phẩm, y tế'
           ],
           3 => [
               'name' => 'Xây dựng, kiến trúc'
           ],
           4 => [
               'name' => 'Giao thông, vận tải'
           ],
           5 => [
               'name' => 'Giáo dục'
           ],
           6 => [
                'name' => 'Tài chính, ngân hàng'
           ],
           7 => [
                'name' => 'Truyền thông, giải trí'
            ],
            8 => [
                'name' => 'Thời trang, làm đẹp'
            ]
        ]);
    }
}
