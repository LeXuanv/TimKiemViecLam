<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('roles')->delete();

        DB::table('roles')->insert([
            0 => [
              'name' => 'admin',
              'created_at' => Carbon::now(),
              'updated_at' => Carbon::now()
            ],
            1 => [
              'name' => 'company',
              'created_at' => Carbon::now(),
              'updated_at' => Carbon::now()
            ],
            2 => [
              'name' => 'job_seeker',
              'created_at' => Carbon::now(),
              'updated_at' => Carbon::now()
            ],
        ]);
    }
}
