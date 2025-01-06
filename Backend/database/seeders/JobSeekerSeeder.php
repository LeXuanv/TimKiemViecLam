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
            'name' => 'Nguyen Van A',
            'gender' => 'Nữ',
            'birth_date' => '1992-03-18',
            'email' => 'nguyenvana@gmail.com',
            'phone_number' => '0901112233',
            'experience' => '2015-2020: Làm việc tại công ty A',
            'address' => 'Số 12 đường Lê Lợi, quận Hai Bà Trưng',
            'ward_code' => '00715',
            'user_id' => '12',
            'logo' => 'images/userlogo.png',
            'province_code' => '02',
            'district_code' => '026',
            'description' => 'Tôi luôn cố gắng phát triển kỹ năng và hoàn thành công việc.',
            'industry_job' => 'Y tế',
            'cv' => '',
        ]);
        
        DB::table('job_seekers')->insert([
            'name' => 'Le Thi B',
            'gender' => 'Nam',
            'birth_date' => '1990-07-01',
            'email' => 'lethib@gmail.com',
            'phone_number' => '0902223344',
            'experience' => '2010-2015: Nhân viên tại công ty B',
            'address' => 'Số 5 đường Phạm Ngũ Lão, quận Đống Đa',
            'ward_code' => '00715',
            'user_id' => '13',
            'logo' => 'images/userlogo.png',
            'province_code' => '02',
            'district_code' => '026',
            'description' => 'Tôi mong muốn đóng góp vào sự phát triển của công ty.',
            'industry_job' => 'Xây dựng',
            'cv' => '',
        ]);
        
        DB::table('job_seekers')->insert([
            'name' => 'Tran Van C',
            'gender' => 'Nữ',
            'birth_date' => '1995-09-10',
            'email' => 'tranvanc@gmail.com',
            'phone_number' => '0903334455',
            'experience' => '2017-2020: Nhân viên tại công ty C',
            'address' => 'Số 8 đường Lê Quý Đôn, quận Hoàn Kiếm',
            'ward_code' => '00715',
            'user_id' => '14',
            'logo' => 'images/userlogo.png',
            'province_code' => '02',
            'district_code' => '026',
            'description' => 'Tôi luôn hoàn thành tốt các nhiệm vụ được giao.',
            'industry_job' => 'Kế toán',
            'cv' => '',
        ]);
        
        DB::table('job_seekers')->insert([
            'name' => 'Hoang Thi D',
            'gender' => 'Nam',
            'birth_date' => '1998-04-20',
            'email' => 'hoangthid@gmail.com',
            'phone_number' => '0904445566',
            'experience' => '2020-2022: Làm việc tại công ty D',
            'address' => 'Số 10 đường Lý Thường Kiệt, quận Cầu Giấy',
            'ward_code' => '00715',
            'user_id' => '15',
            'logo' => 'images/userlogo.png',
            'province_code' => '02',
            'district_code' => '026',
            'description' => 'Tôi yêu thích công việc nghiên cứu và sáng tạo.',
            'industry_job' => 'Công nghệ thông tin',
            'cv' => '',
        ]);
        
        DB::table('job_seekers')->insert([
            'name' => 'Phan Van E',
            'gender' => 'Nữ',
            'birth_date' => '1993-12-15',
            'email' => 'phanvane@gmail.com',
            'phone_number' => '0905556677',
            'experience' => '2015-2020: Nhân viên tại công ty E',
            'address' => 'Số 3 đường Nguyễn Trãi, quận Long Biên',
            'ward_code' => '00715',
            'user_id' => '16',
            'logo' => 'images/userlogo.png',
            'province_code' => '02',
            'district_code' => '026',
            'description' => 'Tôi luôn nỗ lực đạt được mục tiêu công việc.',
            'industry_job' => 'Marketing',
            'cv' => '',
        ]);
        
        DB::table('job_seekers')->insert([
            'name' => 'Bui Thi F',
            'gender' => 'Nam',
            'birth_date' => '1990-07-01',
            'email' => 'buithif@gmail.com',
            'phone_number' => '0906667788',
            'experience' => '2010-2015: Làm việc tại công ty F',
            'address' => 'Số 1 đường Nguyễn Văn Cừ, quận Thanh Xuân',
            'ward_code' => '00715',
            'user_id' => '17',
            'logo' => 'images/userlogo.png',
            'province_code' => '02',
            'district_code' => '026',
            'description' => 'Tôi luôn tìm kiếm cơ hội phát triển bản thân.',
            'industry_job' => 'Xây dựng',
            'cv' => '',
        ]);
        
        DB::table('job_seekers')->insert([
            'name' => 'Dang Van G',
            'gender' => 'Nữ',
            'birth_date' => '1999-05-20',
            'email' => 'dangvang@gmail.com',
            'phone_number' => '0907778899',
            'experience' => '2019-2022: Thực tập tại công ty G',
            'address' => 'Số 15 đường Giải Phóng, quận Ba Đình',
            'ward_code' => '00715',
            'user_id' => '18',
            'logo' => 'images/userlogo.png',
            'province_code' => '02',
            'district_code' => '026',
            'description' => 'Tôi đam mê công việc và luôn hoàn thành tốt nhiệm vụ.',
            'industry_job' => 'Giáo dục',
            'cv' => '',
        ]);
        
        DB::table('job_seekers')->insert([
            'name' => 'Vo Thi H',
            'gender' => 'Nam',
            'birth_date' => '1997-03-12',
            'email' => 'vothih@gmail.com',
            'phone_number' => '0908889900',
            'experience' => '2020-2023: Làm việc tại công ty H',
            'address' => 'Số 25 đường Trần Hưng Đạo, quận Nam Từ Liêm',
            'ward_code' => '00715',
            'user_id' => '19',
            'logo' => 'images/userlogo.png',
            'province_code' => '02',
            'district_code' => '026',
            'description' => 'Tôi đam mê công nghệ và yêu thích sáng tạo.',
            'industry_job' => 'Công nghệ thông tin',
            'cv' => '',
        ]);
        
        DB::table('job_seekers')->insert([
            'name' => 'Dao Van I',
            'gender' => 'Nữ',
            'birth_date' => '2002-01-11',
            'email' => 'daovani@gmail.com',
            'phone_number' => '0919990011',
            'experience' => '2019-2020: Thực tập tại công ty I',
            'address' => 'Số 45 đường Tây Sơn, quận Bắc Từ Liêm',
            'ward_code' => '00715',
            'user_id' => '20',
            'logo' => 'images/userlogo.png',
            'province_code' => '02',
            'district_code' => '026',
            'description' => 'Tôi yêu thích học hỏi và phát triển bản thân.',
            'industry_job' => 'Giáo dục',
            'cv' => '',
        ]);
        
        DB::table('job_seekers')->insert([
            'name' => 'Vu Thi J',
            'gender' => 'Nữ',
            'birth_date' => '2000-01-11',
            'email' => 'vuthij@gmail.com',
            'phone_number' => '0920001111',
            'experience' => '2019-2020: Thực tập tại công ty J',
            'address' => 'Số 55 đường Trường Chinh, quận Tây Hồ',
            'ward_code' => '00715',
            'user_id' => '21',
            'logo' => 'images/userlogo.png',
            'province_code' => '02',
            'district_code' => '026',
            'description' => 'Tôi cố gắng phấn đấu, cống hiến hết mình cho công việc.',
            'industry_job' => 'Công nghệ thông tin',
            'cv' => '',
        ]);
        
        // DB::table('job_seekers')->insert([
        //     'name' => 'Bùi Văn Thiệu',
        //     'gender' => 'Nam',
        //     'birth_date' => '2000-01-11',
        //     'email' => 'buivanthieu108@gmail.com',
        //     'phone_number' => '0987654321',
        //     'experience' => '2019-2020:
        // - Thực tập sinh ABC Group
        // 2020-2022:
        // - Nhân viên chính thức của ABC Group
        // 2022-2023:
        // - Leader một team nhỏ gồm 7 thành viên tại ABC Group
        // 2023 đến 9/2024:
        // - Trưởng phòng công nghệ của ABC Group',
        //     'address' => 'Ngõ 123, xã Tả Thanh Oai, huyện Thanh Trì, Hà Nội',
        //     'ward_code' => '00649',
        //     'user_id' => '22',
        //     'logo' => 'images/job_seeker/1904513129.jpg',
        //     'province_code' => '01',
        //     'district_code' => '020',
        //     'description' => 'Cố gắng phấn đấu, cống hiến hết mình cho công việc.',
        //     'industry_job' => 'Giáo dục',
        //     'cv' => 'files/job_seeker/240315154.pdf',
        // ]);
    
    }
}
