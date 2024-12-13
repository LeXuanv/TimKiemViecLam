<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CompanySeeder extends Seeder
{
    public function run(): void{
                DB::table('companies')->delete();

        DB::table('companies')->insert([
            'name' => 'TechCorp Inc.',
            'email' => 'techcorp@gmail.com',
            'phone_number' => '0971151792',
            'address' => 'Số 1, Đường XXZ, phường Phúc Xá, quận Ba Đính, Hà Nội',
            'ward_code' => '00001',
            'user_id' => '2',
            'description' => 'Là công ty công nghệ hàng đầu, cung cấp những sản phẩm chất lượng cao, uy tín đến mọi nhà.
        Có đội ngũ kỹ thuật viên chuyên môn cao, chăm sóc khách hàng tốt. Đảm bảo mọi yêu cầu của khách hàng.',
            'scale' => '100+ nhân sự',
            'logo' => 'images/company/85587516.jpg',
            'province_code' => '01',
            'district_code' => '001',
            'website' => 'techcorp.com',
        ]);
        
        DB::table('companies')->insert([
            'name' => 'Innovatech Solutions',
            'email' => 'innovatech@gmail.com',
            'phone_number' => '0971151792',
            'address' => 'Số 21, Đuòng WSD, phường Quan Hoa, quận Cầu Giấy, Hà Nội',
            'ward_code' => '00169',
            'user_id' => '3',
            'description' => 'Là công ty công nghệ hàng đầu, cung cấp những sản phẩm chất lượng cao, uy tín đến mọi nhà.
         Có đội ngũ kỹ thuật viên chuyên môn cao, chăm sóc khách hàng tốt. Đảm bảo mọi yêu cầu của khách hàng.',
            'scale' => '70+ nhân sự',
            'logo' => 'images/company/856783443.jpg',
            'province_code' => '01',
            'district_code' => '005',
            'website' => 'innovatech.com.vn',
        ]);
        
        DB::table('companies')->insert([
            'name' => 'Green Energy Ltd.',
            'email' => 'greenenergy@gmail.com',
            'phone_number' => '0971151792',
            'address' => 'Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'ward_code' => '00721',
            'user_id' => '4',
            'description' => 'Là công ty công nghệ hàng đầu, cung cấp những sản phẩm chất lượng cao, uy tín đến mọi nhà.',
            'scale' => '50+ người',
            'logo' => 'images/companylogo.png',
            'province_code' => '02',
            'district_code' => '026',
            'website' => 'dqsfdvbdfv.com',
        ]);
        
        DB::table('companies')->insert([
            'name' => 'SmartTech Co.',
            'email' => 'smarttech@gmail.com',
            'phone_number' => '0971151792',
            'address' => 'Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'ward_code' => '00721',
            'user_id' => '5',
            'description' => 'Là công ty công nghệ hàng đầu, cung cấp những sản phẩm chất lượng cao, uy tín đến mọi nhà.',
            'scale' => '50+ người',
            'logo' => 'images/companylogo.png',
            'province_code' => '02',
            'district_code' => '026',
            'website' => 'dqsfdvbdfv.com',
        ]);
        
        DB::table('companies')->insert([
            'name' => 'Healthify Systems',
            'email' => 'healthify@gmail.com',
            'phone_number' => '0971151792',
            'address' => 'Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'ward_code' => '00721',
            'user_id' => '6',
            'description' => 'Là công ty công nghệ hàng đầu, cung cấp những sản phẩm chất lượng cao, uy tín đến mọi nhà.',
            'scale' => '50+ người',
            'logo' => 'images/companylogo.png',
            'province_code' => '02',
            'district_code' => '026',
            'website' => 'dqsfdvbdfv.com',
        ]);
        
        DB::table('companies')->insert([
            'name' => 'Buildify Construction',
            'email' => 'buildify@gmail.com',
            'phone_number' => '0971151792',
            'address' => 'Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'ward_code' => '00721',
            'user_id' => '7',
            'description' => 'Trung tâm giáo dục có lịch sử lâu đời, Dạy đỗ nhiều thế hệ với những học sinh tố nghiệp loại ưu',
            'scale' => '50+ người',
            'logo' => 'images/companylogo.png',
            'province_code' => '02',
            'district_code' => '026',
            'website' => 'dqsfdvbdfv.com',
        ]);
        
        DB::table('companies')->insert([
            'name' => 'EduSphere Academy',
            'email' => 'edusphere@gmail.com',
            'phone_number' => '123456789',
            'address' => 'Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'ward_code' => '00721',
            'user_id' => '8',
        'description' => ' Từng vinh dự nhận bằng khen từ Chủ Tịch Nước,ới nghều đời, Dạy đỗ nhiều thế hệ với những học sinh tố nghiệp loại ưu',
            'scale' => '50+ người',
            'logo' => 'images/companylogo.png',
            'province_code' => '02',
            'district_code' => '026',
            'website' => 'edusphere.vn',
        ]);
        
        DB::table('companies')->insert([
            'name' => 'RetailPro Inc.',
            'email' => 'retailpro@gmail.com',
            'phone_number' => '0971151792',
            'address' => 'Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'ward_code' => '00721',
            'user_id' => '9',
            'description' => 'Trung tâm giáo dục có lịch sử lâu đời, Dạy đỗ nhiều thế hệ với những học sinh tố nghiệp loại ưu',
            'scale' => '50+ người',
            'logo' => 'images/companylogo.png',
            'province_code' => '02',
            'district_code' => '026',
            'website' => 'dqsfdvbdfv.com',
        ]);
        
        DB::table('companies')->insert([
            'name' => 'Foodies Delight',
            'email' => 'foodiesdelight@gmail.com',
            'phone_number' => '0971151792',
            'address' => 'Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'ward_code' => '00721',
            'user_id' => '10',
            'description' => 'Trung tâm giáo dục có lịch sử lâu đời, Dạy đỗ nhiều thế hệ với những học sinh tố nghiệp loại ưu',
            'scale' => '50+ người',
            'logo' => 'images/companylogo.png',
            'province_code' => '02',
            'district_code' => '026',
            'website' => 'dqsfdvbdfv.com',
        ]);
        
        DB::table('companies')->insert([
            'name' => 'AquaTech Water Solutions',
            'email' => 'aquatech@gmail.com',
            'phone_number' => '0971151792',
            'address' => 'Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'ward_code' => '00721',
            'user_id' => '11',
            'description' => 'Là công ty công nghệ hàng đầu, cung cấp những sản phẩm chất lượng cao, uy tín đến mọi nhà.',
            'scale' => '50+ người',
            'logo' => 'images/companylogo.png',
            'province_code' => '02',
            'district_code' => '026',
            'website' => 'dqsfdvbdfv.com',
        ]);
        
    }

    // public function run(): void
    // {
    //     DB::table('companies')->delete();

    //     DB::table('companies')->insert([
    //         [
    //             'name' => 'TechCorp Inc.',
    //             'email' => 'techcorp@gmail.com',
    //             'user_id' => '2',
    //             'logo' => 'images/companylogo.png',
    //         ],
    //         [
    //             'name' => 'Innovatech Solutions',
    //             'email' => 'innovatech@gmail.com',
    //             'user_id' => '3',
    //             'logo' => 'images/companylogo.png',
    //         ],
    //         [
    //             'name' => 'Green Energy Ltd.',
    //             'email' => 'greenenergy@gmail.com',
    //             'user_id' => '4',
    //             'logo' => 'images/companylogo.png',
    //         ],
    //         [
    //             'name' => 'SmartTech Co.',
    //             'email' => 'smarttech@gmail.com',
    //             'user_id' => '5',
    //             'logo' => 'images/companylogo.png',
    //         ],
    //         [
    //             'name' => 'Healthify Systems',
    //             'email' => 'healthify@gmail.com',
    //             'user_id' => '6',
    //             'logo' => 'images/companylogo.png',
    //         ],
    //         [
    //             'name' => 'Buildify Construction',
    //             'email' => 'buildify@gmail.com',
    //             'user_id' => '7',
    //             'logo' => 'images/companylogo.png',
    //         ],
    //         [
    //             'name' => 'EduSphere Academy',
    //             'email' => 'edusphere@gmail.com',
    //             'user_id' => '8',
    //             'logo' => 'images/companylogo.png',
    //         ],
    //         [
    //             'name' => 'RetailPro Inc.',
    //             'email' => 'retailpro@gmail.com',
    //             'user_id' => '9',
    //             'logo' => 'images/companylogo.png',
    //         ],
    //         [
    //             'name' => 'Foodies Delight',
    //             'email' => 'foodiesdelight@gmail.com',
    //             'user_id' => '10',
    //             'logo' => 'images/companylogo.png',
    //         ],
    //         [
    //             'name' => 'AquaTech Water Solutions',
    //             'email' => 'aquatech@gmail.com',
    //             'user_id' => '11',
    //             'logo' => 'images/companylogo.png',
    //         ],
    //     ]);
    // }
}
