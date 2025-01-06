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
            'university' => 'Đại học Y Hà Nội',
            'degree' => 'Xuất sắc',
            'major' => 'Y tế',
            'graduation_year' => '2022',
            'gpa' => '3.85',
            'job_seeker_id' => '1',
        ]);
        
        DB::table('education_details')->insert([
            'university' => 'Đại học Xây dựng Hà Nội',
            'degree' => 'Khá',
            'major' => 'Xây dựng',
            'graduation_year' => '2021',
            'gpa' => '2.95',
            'job_seeker_id' => '2',
        ]);
        
        DB::table('education_details')->insert([
            'university' => 'Học viện Tài chính',
            'degree' => 'Giỏi',
            'major' => 'Kế toán',
            'graduation_year' => '2020',
            'gpa' => '3.45',
            'job_seeker_id' => '3',
        ]);
        
        DB::table('education_details')->insert([
            'university' => 'Đại học Bách Khoa Hà Nội',
            'degree' => 'Xuất sắc',
            'major' => 'Công nghệ thông tin',
            'graduation_year' => '2022',
            'gpa' => '3.91',
            'job_seeker_id' => '4',
        ]);
        
        DB::table('education_details')->insert([
            'university' => 'Đại học Kinh tế Quốc dân',
            'degree' => 'Giỏi',
            'major' => 'Marketing',
            'graduation_year' => '2021',
            'gpa' => '3.35',
            'job_seeker_id' => '5',
        ]);
        
        DB::table('education_details')->insert([
            'university' => 'Trường Đại học Giao thông Vận tải',
            'degree' => 'Khá',
            'major' => 'Xây dựng',
            'graduation_year' => '2020',
            'gpa' => '2.75',
            'job_seeker_id' => '6',
        ]);
        
        DB::table('education_details')->insert([
            'university' => 'Đại học Sư phạm Hà Nội',
            'degree' => 'Giỏi',
            'major' => 'Giáo dục',
            'graduation_year' => '2021',
            'gpa' => '3.30',
            'job_seeker_id' => '7',
        ]);
        
        DB::table('education_details')->insert([
            'university' => 'Đại học Công nghệ - ĐHQGHN',
            'degree' => 'Xuất sắc',
            'major' => 'Công nghệ thông tin',
            'graduation_year' => '2022',
            'gpa' => '3.75',
            'job_seeker_id' => '8',
        ]);
        
        DB::table('education_details')->insert([
            'university' => 'Đại học Sư phạm TP.HCM',
            'degree' => 'Giỏi',
            'major' => 'Giáo dục',
            'graduation_year' => '2020',
            'gpa' => '3.55',
            'job_seeker_id' => '9',
        ]);
        
        DB::table('education_details')->insert([
            'university' => 'Đại học FPT',
            'degree' => 'Khá',
            'major' => 'Công nghệ thông tin',
            'graduation_year' => '2021',
            'gpa' => '2.85',
            'job_seeker_id' => '10',
        ]);
        
        // DB::table('education_details')->insert([
        //     'university' => 'Học Viện Công Nghệ Bưu Chính Viễn Thông',
        //     'degree' => 'Xuất sắc',
        //     'major' => 'Công nghệ thông tin ',
        //     'graduation_year' => '2024',
        //     'gpa' => '3.90',
        //     'job_seeker_id' => '11',
        // ]);

    }
}
