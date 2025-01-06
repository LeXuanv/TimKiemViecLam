<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{

 
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'name' => 'admin',
                'email' => 'admin@gmail.com',
                'password' => Hash::make('123456'),
                'role_id' => 1
            ],
            [
                'name' => 'TechCorp Inc.',
                'email' => 'techcorp@gmail.com',
                'password' => Hash::make('123456'),
                'role_id' => 2,
            ],
            [
                'name' => 'Innovatech Solutions',
                'email' => 'innovatech@gmail.com',
                'password' => Hash::make('123456'),
                'role_id' => 2,
            ],
            [
                'name' => 'Green Energy Ltd.',
                'email' => 'greenenergy@gmail.com',
                'password' => Hash::make('123456'),
                'role_id' => 2,
            ],
            [
                'name' => 'SmartTech Co.',
                'email' => 'smarttech@gmail.com',
                'password' => Hash::make('123456'),
                'role_id' => 2,
            ],
            [
                'name' => 'Healthify Systems',
                'email' => 'healthify@gmail.com',
                'password' => Hash::make('123456'),
                'role_id' => 2,
            ],
            [
                'name' => 'Buildify Construction',
                'email' => 'buildify@gmail.com',
                'password' => Hash::make('123456'),
                'role_id' => 2,
            ],
            [
                'name' => 'EduSphere Academy',
                'email' => 'edusphere@gmail.com',
                'password' => Hash::make('123456'),
                'role_id' => 2,
            ],
            [
                'name' => 'RetailPro Inc.',
                'email' => 'retailpro@gmail.com',
                'password' => Hash::make('123456'),
                'role_id' => 2,
            ],
            [
                'name' => 'Foodies Delight',
                'email' => 'foodiesdelight@gmail.com',
                'password' => Hash::make('123456'),
                'role_id' => 2,
            ],
            [
                'name' => 'AquaTech Water Solutions',
                'email' => 'aquatech@gmail.com',
                'password' => Hash::make('123456'),
                'role_id' => 2,
            ],



            [
                'name' => 'Nguyen Van A',
                'email' => 'nguyenvana@gmail.com',
                'password' => Hash::make('123456'),
                'role_id' => 3,
            ],
            [
                'name' => 'Le Thi B',
                'email' => 'lethib@gmail.com',
                'password' => Hash::make('123456'),
                'role_id' => 3,
            ],
            [
                'name' => 'Tran Van C',
                'email' => 'tranvanc@gmail.com',
                'password' => Hash::make('123456'),
                'role_id' => 3,
            ],
            [
                'name' => 'Hoang Thi D',
                'email' => 'hoangthid@gmail.com',
                'password' => Hash::make('123456'),
                'role_id' => 3,
            ],
            [
                'name' => 'Phan Van E',
                'email' => 'phanvane@gmail.com',
                'password' => Hash::make('123456'),
                'role_id' => 3,
            ],
            [
                'name' => 'Bui Thi F',
                'email' => 'buithif@gmail.com',
                'password' => Hash::make('123456'),
                'role_id' => 3,
            ],
            [
                'name' => 'Dang Van G',
                'email' => 'dangvang@gmail.com',
                'password' => Hash::make('123456'),
                'role_id' => 3,
            ],
            [
                'name' => 'Vo Thi H',
                'email' => 'vothih@gmail.com',
                'password' => Hash::make('123456'),
                'role_id' => 3,
            ],
            [
                'name' => 'Dao Van I',
                'email' => 'daovani@gmail.com',
                'password' => Hash::make('123456'),
                'role_id' => 3,
            ],
            [
                'name' => 'Vu Thi J',
                'email' => 'vuthij@gmail.com',
                'password' => Hash::make('123456'),
                'role_id' => 3,
            ],
            
        ]);
    }

}
