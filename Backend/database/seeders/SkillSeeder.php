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
               'name' => 'Lập trình',
               'type_skill_id' => '2',
           ],
           1 => [
               'name' => 'Quản trị cơ sở dữ liệu',
               'type_skill_id' => '2',
           ],
           2 => [
               'name' => 'DevOps',
               'type_skill_id' => '2',
           ],
           3 => [
               'name' => 'Phân tích dữ liệu',
               'type_skill_id' => '2',
           ],
           4 => [
               'name' => 'Thiết kế đồ họa',
               'type_skill_id' => '2',
           ],
           5 => [
               'name' => 'Quản lý dự án',
               'type_skill_id' => '2',
           ],
           6 => [
               'name' => 'Tiếp thị số',
               'type_skill_id' => '2',
           ],
           7 => [
               'name' => 'Viết nội dung',
               'type_skill_id' => '1',
           ],
           8 => [
               'name' => 'Giao tiếp',
               'type_skill_id' => '1',
           ],
           9 => [
               'name' => 'Làm việc nhóm',
               'type_skill_id' => '1',
           ],
           10 => [
               'name' => 'Quản lý thời gian',
               'type_skill_id' => '1',
           ],
           11 => [
               'name' => 'Giải quyết vấn đề',
               'type_skill_id' => '1',
           ],
           12 => [
               'name' => 'Lãnh đạo',
               'type_skill_id' => '1',
           ],
           13 => [
               'name' => 'Sáng tạo',
               'type_skill_id' => '1',
           ],
           14 => [
               'name' => 'Thích ứng',
               'type_skill_id' => '1',
           ],
           15 => [
               'name' => 'Tiếng Anh',
               'type_skill_id' => '3',
           ],
           16 => [
               'name' => 'Tiếng Pháp',
               'type_skill_id' => '3',
           ],
           17 => [
               'name' => 'Tiếng Trung',
               'type_skill_id' => '3',
           ],
           18 => [
               'name' => 'Tiếng Nhật',
               'type_skill_id' => '3',
           ],
           19 => [
               'name' => 'Tiếng Hàn',
               'type_skill_id' => '3',
           ],
        ]);
    }
}
