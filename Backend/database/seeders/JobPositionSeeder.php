<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JobPositionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('job_positions')->delete();

        DB::table('job_positions')->insert([
           0 => [
               'name' => 'Giám đốc'
           ],
           1 => [
               'name' => 'Phó Giám đốc'
           ],
           2 => [
               'name' => 'Trường phòng'
           ],
           3 => [
               'name' => 'Nhân viên'
           ]
        ]);
    }
}
