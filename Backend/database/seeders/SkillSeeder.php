<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('skills')->delete();

        DB::table('skills')->insert([
           0 => [
               'name' => 'Lập trình'
           ],
           1 => [
               'name' => 'Quản trị cơ sở dữ liệu'
           ],
           2 => [
               'name' => 'DevOps'
           ],
           3 => [
               'name' => 'Phân tích dữ liệu'
           ],
           4 => [
               'name' => 'Thiết kế đồ họa'
           ],
           5 => [
               'name' => 'Quản lý dự án'
           ],
           6 => [
               'name' => 'Tiếp thị số'
           ],
           7 => [
               'name' => 'Viết nội dung'
           ],
           8 => [
               'name' => 'Giao tiếp'
           ],
           9 => [
               'name' => 'Làm việc nhóm'
           ],
           10 => [
               'name' => 'Quản lý thời gian'
           ],
           11 => [
               'name' => 'Giải quyết vấn đề'
           ],
           12 => [
               'name' => 'Lãnh đạo'
           ],
           13 => [
               'name' => 'Sáng tạo'
           ],
           14 => [
               'name' => 'Thích ứng'
           ],
           15 => [
               'name' => 'Tiếng Anh'
           ],
           16 => [
               'name' => 'Tiếng Pháp'
           ],
           17 => [
               'name' => 'Tiếng Trung'
           ],
           18 => [
               'name' => 'Tiếng Nhật'
           ],
           19 => [
               'name' => 'Tiếng Hàn'
           ],
        ]);
    }
}
