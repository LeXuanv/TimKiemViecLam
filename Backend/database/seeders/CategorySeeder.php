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
               'name' => 'Kinh doanh'
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
               'name' => 'Phục vụ'
           ],
           6 => [
                'name' => 'Kế toán'
            ]
        ]);
    }
}
