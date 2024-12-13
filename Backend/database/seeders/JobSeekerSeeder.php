<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JobSeekerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('job_seekers')->delete();

        DB::table('job_seekers')->insert([
            [
                'name' => 'Nguyen Van A',
                'email' => 'nguyenvana@gmail.com',
                'user_id' => '12',
                'logo' => 'images/userlogo.png',
            ],
            [
                'name' => 'Le Thi B',
                'email' => 'lethib@gmail.com',
                'user_id' => '13',
                'logo' => 'images/userlogo.png',
            ],
            [
                'name' => 'Tran Van C',
                'email' => 'tranvanc@gmail.com',
                'user_id' => '14',
                'logo' => 'images/userlogo.png',
            ],
            [
                'name' => 'Hoang Thi D',
                'email' => 'hoangthid@gmail.com',
                'user_id' => '15',
                'logo' => 'images/userlogo.png',
            ],
            [
                'name' => 'Phan Van E',
                'email' => 'phanvane@gmail.com',
                'user_id' => '16',
                'logo' => 'images/userlogo.png',
            ],
            [
                'name' => 'Bui Thi F',
                'email' => 'buithif@gmail.com',
                'user_id' => '17',
                'logo' => 'images/userlogo.png',
            ],
            [
                'name' => 'Dang Van G',
                'email' => 'dangvang@gmail.com',
                'user_id' => '18',
                'logo' => 'images/userlogo.png',
            ],
            [
                'name' => 'Vo Thi H',
                'email' => 'vothih@gmail.com',
                'user_id' => '19',
                'logo' => 'images/userlogo.png',
            ],
            [
                'name' => 'Dao Van I',
                'email' => 'daovani@gmail.com',
                'user_id' => '20',
                'logo' => 'images/userlogo.png',
            ],
            [
                'name' => 'Vu Thi J',
                'email' => 'vuthij@gmail.com',
                'user_id' => '21',
                'logo' => 'images/userlogo.png',
            ],
        ]);
    
    }
}
