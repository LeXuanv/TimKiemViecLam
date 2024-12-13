<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            AddressSeeder::class,
            RoleSeeder::class,
            CategorySeeder::class,
            SkillSeeder::class,
            TypeSkillSeeder::class,
            JobPositionSeeder::class,


            UserSeeder::class,
            CompanySeeder::class,
            JobSeekerSeeder::class,

            JobVacancySeeder::class,



            JobSeekerSkillSeeder::class,
            EducationDetailSeeder::class,
            BookmarkSeeder::class,
            JobApplicationSeeder::class,


            
        ]);
        // User::faModulesctory(10)->create();

//        User::factory()->create([
//            'name' => 'Test User',
//            'email' => 'test@example.com',
//        ]);
    }
}
