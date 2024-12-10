<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TypeSkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('type_skills')->insert([
            [
                'name' => 'Soft Skills',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Hard Skills',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Languages',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
