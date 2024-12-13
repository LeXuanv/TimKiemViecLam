<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('skills')->delete();

        DB::table('skills')->insert([
            ['name' => 'Giao tiếp', 'type_skill_id' => '1'],
            ['name' => 'Làm việc nhóm', 'type_skill_id' => '1'],
            ['name' => 'Quản lý thời gian', 'type_skill_id' => '1'],
            ['name' => 'Giải quyết vấn đề', 'type_skill_id' => '1'],
            ['name' => 'Lãnh đạo', 'type_skill_id' => '1'],
            ['name' => 'Sáng tạo', 'type_skill_id' => '1'],
            ['name' => 'Tư duy phản biện', 'type_skill_id' => '1'],
            ['name' => 'Kỹ năng thuyết trình', 'type_skill_id' => '1'],
            ['name' => 'Kỹ năng đàm phán', 'type_skill_id' => '1'],
            ['name' => 'Kỹ năng tổ chức', 'type_skill_id' => '1'],
            ['name' => 'Thích ứng linh hoạt', 'type_skill_id' => '1'],
            ['name' => 'Tự học', 'type_skill_id' => '1'],
            ['name' => 'Kỹ năng viết email', 'type_skill_id' => '1'],
            ['name' => 'Kỹ năng lắng nghe', 'type_skill_id' => '1'],
            ['name' => 'Kỹ năng tư duy chiến lược', 'type_skill_id' => '1'],




            ['name' => 'Lập trình', 'type_skill_id' => '2'],
            ['name' => 'Phát triển ứng dụng di động', 'type_skill_id' => '2'],
            ['name' => 'Phát triển web', 'type_skill_id' => '2'],
            ['name' => 'Phát triển game', 'type_skill_id' => '2'],
            ['name' => 'Quản trị cơ sở dữ liệu', 'type_skill_id' => '2'],
            ['name' => 'DevOps', 'type_skill_id' => '2'],
            ['name' => 'Phân tích dữ liệu', 'type_skill_id' => '2'],
            ['name' => 'Học máy và trí tuệ nhân tạo', 'type_skill_id' => '2'],
            ['name' => 'An toàn thông tin', 'type_skill_id' => '2'],
            ['name' => 'Thiết kế đồ họa', 'type_skill_id' => '2'],
            ['name' => 'Thiết kế UX/UI', 'type_skill_id' => '2'],
            ['name' => 'Quản lý dự án CNTT', 'type_skill_id' => '2'],
            ['name' => 'Kiểm thử phần mềm', 'type_skill_id' => '2'],
            ['name' => 'Điện tử viễn thông', 'type_skill_id' => '2'],
            ['name' => 'Điện công nghiệp', 'type_skill_id' => '2'],
            ['name' => 'Quản lý sản xuất', 'type_skill_id' => '2'],
            ['name' => 'Thiết kế sản phẩm', 'type_skill_id' => '2'],
            ['name' => 'Quản lý chuỗi cung ứng', 'type_skill_id' => '2'],
            ['name' => 'Kế toán', 'type_skill_id' => '2'],
            ['name' => 'Phân tích tài chính', 'type_skill_id' => '2'],
            ['name' => 'Kiểm toán nội bộ', 'type_skill_id' => '2'],
            ['name' => 'Đầu tư chứng khoán', 'type_skill_id' => '2'],
            ['name' => 'Nghiên cứu thị trường', 'type_skill_id' => '2'],
            ['name' => 'Chăm sóc khách hàng', 'type_skill_id' => '2'],
            ['name' => 'Quản lý nhà hàng - khách sạn', 'type_skill_id' => '2'],
            ['name' => 'Tiếp thị số', 'type_skill_id' => '2'],
            ['name' => 'Viết nội dung', 'type_skill_id' => '2'],
            ['name' => 'Biên tập video', 'type_skill_id' => '2'],
            ['name' => 'Tổ chức sự kiện', 'type_skill_id' => '2'],
            ['name' => 'Hướng dẫn viên du lịch', 'type_skill_id' => '2'],
            ['name' => 'Quản lý chất lượng (QA/QC)', 'type_skill_id' => '2'],
            ['name' => 'Kỹ thuật sản xuất thực phẩm', 'type_skill_id' => '2'],
            ['name' => 'Nghiên cứu và phát triển sản phẩm', 'type_skill_id' => '2'],
            ['name' => 'Kiểm định dược phẩm', 'type_skill_id' => '2'],
            ['name' => 'Quản lý dược phẩm', 'type_skill_id' => '2'],
            ['name' => 'Tư vấn pháp lý', 'type_skill_id' => '2'],
            ['name' => 'Luật doanh nghiệp', 'type_skill_id' => '2'],
            ['name' => 'Luật sở hữu trí tuệ', 'type_skill_id' => '2'],
            ['name' => 'Quản lý nhân sự', 'type_skill_id' => '2'],
            ['name' => 'Đào tạo và phát triển nhân sự', 'type_skill_id' => '2'],
            ['name' => 'Tư vấn bảo hiểm', 'type_skill_id' => '2'],
            ['name' => 'Phân tích dữ liệu thị trường', 'type_skill_id' => '2'],
            ['name' => 'Kỹ thuật xây dựng', 'type_skill_id' => '2'],
            ['name' => 'Quản lý dự án xây dựng', 'type_skill_id' => '2'],
            ['name' => 'Thiết kế kiến trúc', 'type_skill_id' => '2'],
            ['name' => 'Kỹ thuật ô tô', 'type_skill_id' => '2'],
            ['name' => 'Thiết kế cơ khí', 'type_skill_id' => '2'],
            ['name' => 'Bảo trì thiết bị công nghiệp', 'type_skill_id' => '2'],
            ['name' => 'Kỹ thuật môi trường', 'type_skill_id' => '2'],
            ['name' => 'Quản lý năng lượng tái tạo', 'type_skill_id' => '2'],



            ['name' => 'Tiếng Anh', 'type_skill_id' => '3'],
            ['name' => 'Tiếng Pháp', 'type_skill_id' => '3'],
            ['name' => 'Tiếng Trung', 'type_skill_id' => '3'],
            ['name' => 'Tiếng Nhật', 'type_skill_id' => '3'],
            ['name' => 'Tiếng Hàn', 'type_skill_id' => '3'],
            ['name' => 'Tiếng Đức', 'type_skill_id' => '3'],
            ['name' => 'Tiếng Tây Ban Nha', 'type_skill_id' => '3'],
            ['name' => 'Tiếng Ý', 'type_skill_id' => '3'],
        ]);
        
    }
}
