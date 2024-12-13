<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JobApplicationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('job_applications')->delete();
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '1',
            'job_seeker_id' => '1',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '2',
            'job_seeker_id' => '1',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '1',
            'job_seeker_id' => '2',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '2',
            'job_seeker_id' => '2',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '1',
            'job_seeker_id' => '3',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '2',
            'job_seeker_id' => '3',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '1',
            'job_seeker_id' => '4',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '2',
            'job_seeker_id' => '4',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '1',
            'job_seeker_id' => '5',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '2',
            'job_seeker_id' => '5',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '1',
            'job_seeker_id' => '6',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '2',
            'job_seeker_id' => '6',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '1',
            'job_seeker_id' => '7',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '2',
            'job_seeker_id' => '7',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '1',
            'job_seeker_id' => '8',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '2',
            'job_seeker_id' => '8',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '1',
            'job_seeker_id' => '9',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '2',
            'job_seeker_id' => '9',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '1',
            'job_seeker_id' => '10',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '2',
            'job_seeker_id' => '10',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '3',
            'job_seeker_id' => '1',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '4',
            'job_seeker_id' => '1',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '5',
            'job_seeker_id' => '1',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '6',
            'job_seeker_id' => '1',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '7',
            'job_seeker_id' => '1',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '8',
            'job_seeker_id' => '1',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '9',
            'job_seeker_id' => '1',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '10',
            'job_seeker_id' => '1',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '3',
            'job_seeker_id' => '2',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '4',
            'job_seeker_id' => '2',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '5',
            'job_seeker_id' => '2',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '6',
            'job_seeker_id' => '2',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '7',
            'job_seeker_id' => '2',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '8',
            'job_seeker_id' => '2',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '9',
            'job_seeker_id' => '2',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '10',
            'job_seeker_id' => '2',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '11',
            'job_seeker_id' => '3',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '12',
            'job_seeker_id' => '3',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '13',
            'job_seeker_id' => '3',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '14',
            'job_seeker_id' => '3',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '15',
            'job_seeker_id' => '3',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '16',
            'job_seeker_id' => '3',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '17',
            'job_seeker_id' => '3',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '18',
            'job_seeker_id' => '3',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '19',
            'job_seeker_id' => '4',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '20',
            'job_seeker_id' => '4',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '21',
            'job_seeker_id' => '4',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '22',
            'job_seeker_id' => '4',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '23',
            'job_seeker_id' => '4',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '24',
            'job_seeker_id' => '4',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '25',
            'job_seeker_id' => '4',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '26',
            'job_seeker_id' => '4',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '27',
            'job_seeker_id' => '5',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '28',
            'job_seeker_id' => '5',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '29',
            'job_seeker_id' => '5',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '30',
            'job_seeker_id' => '5',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '31',
            'job_seeker_id' => '5',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '32',
            'job_seeker_id' => '5',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '33',
            'job_seeker_id' => '5',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '34',
            'job_seeker_id' => '5',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '35',
            'job_seeker_id' => '6',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '36',
            'job_seeker_id' => '6',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '37',
            'job_seeker_id' => '6',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '38',
            'job_seeker_id' => '6',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '39',
            'job_seeker_id' => '6',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '40',
            'job_seeker_id' => '6',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '41',
            'job_seeker_id' => '6',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '42',
            'job_seeker_id' => '6',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '43',
            'job_seeker_id' => '7',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '44',
            'job_seeker_id' => '7',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '45',
            'job_seeker_id' => '7',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '46',
            'job_seeker_id' => '7',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '47',
            'job_seeker_id' => '7',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '48',
            'job_seeker_id' => '7',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '49',
            'job_seeker_id' => '7',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '50',
            'job_seeker_id' => '7',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '51',
            'job_seeker_id' => '8',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '52',
            'job_seeker_id' => '8',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '53',
            'job_seeker_id' => '8',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '54',
            'job_seeker_id' => '8',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '55',
            'job_seeker_id' => '8',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '56',
            'job_seeker_id' => '8',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '57',
            'job_seeker_id' => '8',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '58',
            'job_seeker_id' => '8',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '59',
            'job_seeker_id' => '9',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '60',
            'job_seeker_id' => '9',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '3',
            'job_seeker_id' => '9',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '4',
            'job_seeker_id' => '9',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '5',
            'job_seeker_id' => '9',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '6',
            'job_seeker_id' => '9',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '7',
            'job_seeker_id' => '10',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '8',
            'job_seeker_id' => '10',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '9',
            'job_seeker_id' => '10',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '10',
            'job_seeker_id' => '10',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '11',
            'job_seeker_id' => '10',
        ]);
        
        DB::table('job_applications')->insert([
            'application_date' => '2024-12-13',
            'status' => '0',
            'job_vacancy_id' => '12',
            'job_seeker_id' => '10',
        ]);


    }
}
