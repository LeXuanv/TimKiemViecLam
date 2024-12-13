<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EducationDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('education_details')->delete();
        DB::table('education_details')->insert([
            
            [
                'job_seeker_id' => '1',
            ],
            [
                'job_seeker_id' => '2',
            ],
            [
                'job_seeker_id' => '3',
            ],
            [
                'job_seeker_id' => '4',
            ],
            [
                'job_seeker_id' => '5',
            ],
            [
                'job_seeker_id' => '6',
            ],
            [
                'job_seeker_id' => '7',
            ],
            [
                'job_seeker_id' => '8',
            ],
            [
                'job_seeker_id' => '9',
            ],
            [
                'job_seeker_id' => '10',
            ],
            
        ]);

    }
}
