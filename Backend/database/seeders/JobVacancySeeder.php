<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JobVacancySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('job_vacancies')->delete();

        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển Thực Tập Sinh Java',
            'description' => 'Tuyển thực tập sinh ngôn ngữ Java',
            'salary' => '2000000.00',
            'employment_type' => 'Linh động thời gian',
            'application_deadline' => '2024-12-31',
            'is_published' => '1',
            'company_id' => '1',
            'category_id' => '1',
            'job_position_id' => '4',
            'province_code' => '01',
            'address' => '',
            'request' => '- Nắm chắc kiến thức cơ bản
        - Nắm được các hệ quản trị cơ sở dữ liệu
        - Sáng tạo, năng động',
            'interest' => '- Có cơ hội giao lưu, học tập
        - Tăng cơ hội làm việc với môi trường chuyên nghiệp
        - Có trợ cấp nếu làm tốt',
            'location' => 'Số 1, Đường XXZ, phường Phúc Xá, quận Ba Đính, Hà Nội',
            'work_time' => 'Linh động tùy theo khả năng của ứng viên',
            'experience' => 'Không yêu cầu kinh nghiệm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển Thực Tập Sinh C#',
            'description' => 'Tuyển thực tập sinh ngôn ngữ C#',
            'salary' => '2500000.00',
            'employment_type' => 'Linh động thời gian',
            'application_deadline' => '2024-12-31',
            'is_published' => '1',
            'company_id' => '1',
            'category_id' => '1',
            'job_position_id' => '4',
            'province_code' => '01',
            'address' => '',
            'request' => '- Nắm chắc kiến thức cơ bản
        - Nắm được các hệ quản trị cơ sở dữ liệu
        - Sáng tạo, năng động',
            'interest' => '- Có cơ hội giao lưu, học tập
        - Tăng cơ hội làm việc với môi trường chuyên nghiệp
        - Có trợ cấp nếu làm tốt',
            'location' => 'Số 21, Đuòng WSD, phường Quan Hoa, quận Cầu Giấy, Hà Nội',
            'work_time' => 'Linh động tùy theo khả năng của ứng viên',
            'experience' => 'Không yêu cầu kinh nghiệm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển Quản lý dự án',
            'description' => 'Tuyển dụng quản lý dự án',
            'salary' => '25000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-31',
            'is_published' => '1',
            'company_id' => '1',
            'category_id' => '1',
            'job_position_id' => '4',
            'province_code' => '01',
            'address' => '',
            'request' => '- Nắm chắc kiến thức cơ bản
        - Có kiến thức chuyên môn về PM
        - Có khả năng lãnh đạo, kiến thức về lĩnh vực công nghệ
        - Nắm được các hệ quản trị cơ sở dữ liệu
        - Sáng tạo, năng động',
            'interest' => '- Có cơ hội giao lưu, học tập
        - Làm việc với môi trường chuyên nghiệp
        - Tăng thưởng nếu làm tốt
        - Du lịch, team building 2 lần 1 năm',
            'location' => 'Số 1, Đường XXZ, phường Phúc Xá, quận Ba Đính, Hà Nội',
            'work_time' => 'Từ thứ 2 đến thứ 6 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển Tester',
            'description' => 'Tuyển dụng Tester',
            'salary' => '10000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-31',
            'is_published' => '1',
            'company_id' => '1',
            'category_id' => '1',
            'job_position_id' => '4',
            'province_code' => '01',
            'address' => '',
            'request' => '- Nắm chắc kiến thức cơ bản
        - Có kiến thức chuyên môn về Test
        - Có khả năng lãnh đạo, kiến thức về lĩnh vực công nghệ
        - Nắm được các hệ quản trị cơ sở dữ liệu
        - Sáng tạo, năng động',
            'interest' => '- Có cơ hội giao lưu, học tập
        - Làm việc với môi trường chuyên nghiệp
        - Tăng thưởng nếu làm tốt
        - Du lịch, team building 2 lần 1 năm',
            'location' => 'Số 21, Đuòng WSD, phường Quan Hoa, quận Cầu Giấy, Hà Nội',
            'work_time' => 'Từ thứ 2 đến thứ 6 hàng tuần',
            'experience' => '1 - 2 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển Thực Tập Sinh Python',
            'description' => 'Sử dụng ngôn ngữ Python để làm việc với lượng dữ liệu lớn, train AI, xử lý hình ảnh, video',
            'salary' => '2000000.00',
            'employment_type' => 'Linh động thời gian',
            'application_deadline' => '2024-12-31',
            'is_published' => '1',
            'company_id' => '2',
            'category_id' => '1',
            'job_position_id' => '4',
            'province_code' => '01',
            'address' => '',
            'request' => '- Nắm chắc kiến thức cơ bản
         - Nắm được các hệ quản trị cơ sở dữ liệu
         - Sáng tạo, năng động',
            'interest' => '- Có cơ hội giao lưu, học tập
         - Tăng cơ hội làm việc với môi trường chuyên nghiệp
         - Có trợ cấp nếu làm tốt',
            'location' => 'Số 21, Đuòng WSD, phường Quan Hoa, quận Cầu Giấy, Hà Nội',
            'work_time' => 'Linh động tùy theo khả năng của ứng viên',
            'experience' => 'Không yêu cầu kinh nghiệm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển dụng Nhân viên Vận chuyển',
            'description' => 'Vận chuyển tài nguyên, nhập xuất kho hàng hóa của công ty',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-31',
            'is_published' => '1',
            'company_id' => '2',
            'category_id' => '1',
            'job_position_id' => '4',
            'province_code' => '01',
            'address' => '',
            'request' => '- Yêu cầu sức khỏe tốt
        - Làm việc trong môi trường nặng nhọc
        - Có khả năng hoàn thành công việc đúng thời hạn
        - Có bằng lái xe B1',
            'interest' => '- Hỗ trợ chi phí ăn uống
        - Hỗ trợ xe vận chuyển
        - Được đào tạo chuyên nghiệp',
            'location' => 'Số 21, Đuòng WSD, phường Quan Hoa, quận Cầu Giấy, Hà Nội',
            'work_time' => 'Từ thứ 2 đến thứ 7',
            'experience' => 'Không yêu cầu kinh nghiệm',
            'gender' => 'Nam',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển dụng Nhân viên Quản lý kho',
            'description' => 'Vận chuyển tài nguyên, nhập xuất kho hàng hóa của công ty',
            'salary' => '12000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-31',
            'is_published' => '1',
            'company_id' => '2',
            'category_id' => '5',
            'job_position_id' => '4',
            'province_code' => '01',
            'address' => '',
            'request' => '- Yêu cầu sức khỏe tốt
        - Làm việc trong môi trường nặng nhọc
        - Có khả năng hoàn thành công việc đúng thời hạn',
            'interest' => '- Hỗ trợ chi phí ăn uống
        - Hỗ trợ chi phí sinh hoạt
        - Được đào tạo chuyên nghiệp',
            'location' => 'Số 21, Đuòng WSD, phường Quan Hoa, quận Cầu Giấy, Hà Nội',
            'work_time' => 'Từ thứ 2 đến thứ 7',
            'experience' => 'Không yêu cầu kinh nghiệm',
            'gender' => 'Nam',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển dụng Nhân viên Quản lý kho',
            'description' => 'Vận chuyển tài nguyên, nhập xuất kho hàng hóa của công ty',
            'salary' => '12000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-31',
            'is_published' => '1',
            'company_id' => '2',
            'category_id' => '5',
            'job_position_id' => '4',
            'province_code' => '01',
            'address' => '',
            'request' => '- Yêu cầu sức khỏe tốt
        - Làm việc trong môi trường nặng nhọc
        - Có khả năng hoàn thành công việc đúng thời hạn',
            'interest' => '- Hỗ trợ chi phí ăn uống
        - Hỗ trợ chi phí sinh hoạt
        - Được đào tạo chuyên nghiệp',
            'location' => 'Số 21, Đuòng WSD, phường Quan Hoa, quận Cầu Giấy, Hà Nội',
            'work_time' => 'Từ thứ 2 đến thứ 7',
            'experience' => 'Không yêu cầu kinh nghiệm',
            'gender' => 'Nam',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển dụng Kế toán trưởng',
            'description' => 'Tuyển dụng kế toán trưởng mới do kế toán cũ mới đi tù',
            'salary' => '24000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-31',
            'is_published' => '1',
            'company_id' => '2',
            'category_id' => '7',
            'job_position_id' => '3',
            'province_code' => '01',
            'address' => '',
            'request' => '- Yêu cầu kiến thức chuyên môn tốt
        - Có kinh nghiệm làm việc tối thiểu 2 năm
        - Sử dụng thành thạo máy tính
        - Có tín chỉ tin học văn phòng',
            'interest' => '- Được đào tạo chuyên nghiệp',
            'location' => 'Số 21, Đuòng WSD, phường Quan Hoa, quận Cầu Giấy, Hà Nội',
            'work_time' => 'Từ thứ 2 đến thứ 7',
            'experience' => 'Không yêu cầu kinh nghiệm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển dụng nhân viên quản lý Page',
            'description' => 'Tuyển dụng nhân viên quản lý fanpage của công ty, trả lời câu hỏi khách hàng cũng như tư vấn thông tin cho khách',
            'salary' => '8000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-31',
            'is_published' => '1',
            'company_id' => '2',
            'category_id' => '8',
            'job_position_id' => '4',
            'province_code' => '01',
            'address' => '',
            'request' => '- Yêu cầu kiến thức chuyên môn tốt
        - Sử dụng thành thạo máy tính
        - Có khả năng giao tiếp
        - Có tính kiên nhẫn
        - Có khả năng truyền tải thông điệp',
            'interest' => '- Được đào tạo chuyên nghiệp
        - Hỗ trợ chi phí nếu làm tốt',
            'location' => 'Số 21, Đuòng WSD, phường Quan Hoa, quận Cầu Giấy, Hà Nội',
            'work_time' => '- Cả tuần
        - thứ 7, chủ nhật có thể làm online (có nhận thêm tiền thưởng)',
            'experience' => 'Không yêu cầu kinh nghiệm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển dụng nhân viên quản lý Page',
            'description' => 'Tuyển dụng nhân viên quản lý fanpage của công ty, trả lời câu hỏi khách hàng cũng như tư vấn thông tin cho khách',
            'salary' => '8000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-31',
            'is_published' => '1',
            'company_id' => '2',
            'category_id' => '8',
            'job_position_id' => '4',
            'province_code' => '01',
            'address' => '',
            'request' => '- Yêu cầu kiến thức chuyên môn tốt
        - Sử dụng thành thạo máy tính
        - Có khả năng giao tiếp
        - Có tính kiên nhẫn
        - Có khả năng truyền tải thông điệp',
            'interest' => '- Được đào tạo chuyên nghiệp
        - Hỗ trợ chi phí nếu làm tốt',
            'location' => 'Số 21, Đuòng WSD, phường Quan Hoa, quận Cầu Giấy, Hà Nội',
            'work_time' => '- Cả tuần
        - thứ 7, chủ nhật có thể làm online (có nhận thêm tiền thưởng)',
            'experience' => 'Không yêu cầu kinh nghiệm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển dụng Nhân viên Quản lý kho',
            'description' => 'Vận chuyển tài nguyên, nhập xuất kho hàng hóa của công ty',
            'salary' => '6000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-31',
            'is_published' => '1',
            'company_id' => '1',
            'category_id' => '5',
            'job_position_id' => '4',
            'province_code' => '01',
            'address' => '',
            'request' => '- Yêu cầu sức khỏe tốt
         - Làm việc trong môi trường nặng nhọc
         - Có khả năng hoàn thành công việc đúng thời hạn',
            'interest' => '- Hỗ trợ chi phí ăn uống
         - Hỗ trợ chi phí sinh hoạt
         - Được đào tạo chuyên nghiệp',
            'location' => 'Số 1, Đường XXZ, phường Phúc Xá, quận Ba Đính, Hà Nội',
            'work_time' => 'Từ thứ 2 đến thứ 7',
            'experience' => 'Không yêu cầu kinh nghiệm',
            'gender' => 'Nam',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển giáo viên Lịch Sử',
            'description' => 'Tuyển dụng giáo viên lịch sử',
            'salary' => '10000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '7',
            'category_id' => '6',
            'job_position_id' => '4',
            'province_code' => '02',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn
        - Có chứng nhận sư phạm
        - Có các chứng chỉ liên quan
        - Yêu nghề, kiên nhẫn
        - Có khả năng giao tiếp và truyền đạt kiến thức',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp
        - Được hưởng chế độ bảo hiểm y tế, bảo hiểm xã hội
        - Được tham gia các cuộc thi về giáo dục',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển giáo viên Hóa Học',
            'description' => 'Tuyển dụng giáo viên lịch sử',
            'salary' => '10000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '7',
            'category_id' => '6',
            'job_position_id' => '4',
            'province_code' => '02',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn
        - Có chứng nhận sư phạm
        - Có các chứng chỉ liên quan
        - Yêu nghề, kiên nhẫn
        - Có khả năng giao tiếp và truyền đạt kiến thức',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp
        - Được hưởng chế độ bảo hiểm y tế, bảo hiểm xã hội
        - Được tham gia các cuộc thi về giáo dục',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển giáo viên Hóa Học',
            'description' => 'Tuyển dụng giáo viên lịch sử',
            'salary' => '10000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '7',
            'category_id' => '6',
            'job_position_id' => '4',
            'province_code' => '01',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn
        - Có chứng nhận sư phạm
        - Có các chứng chỉ liên quan
        - Yêu nghề, kiên nhẫn
        - Có khả năng giao tiếp và truyền đạt kiến thức',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp
        - Được hưởng chế độ bảo hiểm y tế, bảo hiểm xã hội
        - Được tham gia các cuộc thi về giáo dục',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển giáo viên Hóa Học',
            'description' => 'Tuyển dụng giáo viên lịch sử',
            'salary' => '10000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '7',
            'category_id' => '6',
            'job_position_id' => '4',
            'province_code' => '06',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn
        - Có chứng nhận sư phạm
        - Có các chứng chỉ liên quan
        - Yêu nghề, kiên nhẫn
        - Có khả năng giao tiếp và truyền đạt kiến thức',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp
        - Được hưởng chế độ bảo hiểm y tế, bảo hiểm xã hội
        - Được tham gia các cuộc thi về giáo dục',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển giáo viên Toán Học',
            'description' => 'Tuyển dụng giáo viên lịch sử',
            'salary' => '10000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '7',
            'category_id' => '6',
            'job_position_id' => '4',
            'province_code' => '06',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn
        - Có chứng nhận sư phạm
        - Có các chứng chỉ liên quan
        - Yêu nghề, kiên nhẫn
        - Có khả năng giao tiếp và truyền đạt kiến thức',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp
        - Được hưởng chế độ bảo hiểm y tế, bảo hiểm xã hội
        - Được tham gia các cuộc thi về giáo dục',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển giáo viên Toán Học',
            'description' => 'Tuyển dụng giáo viên lịch sử',
            'salary' => '10000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '7',
            'category_id' => '6',
            'job_position_id' => '4',
            'province_code' => '01',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn
        - Có chứng nhận sư phạm
        - Có các chứng chỉ liên quan
        - Yêu nghề, kiên nhẫn
        - Có khả năng giao tiếp và truyền đạt kiến thức',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp
        - Được hưởng chế độ bảo hiểm y tế, bảo hiểm xã hội
        - Được tham gia các cuộc thi về giáo dục',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển giáo viên Toán Học',
            'description' => 'Tuyển dụng giáo viên lịch sử',
            'salary' => '10000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '7',
            'category_id' => '6',
            'job_position_id' => '4',
            'province_code' => '26',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn
        - Có chứng nhận sư phạm
        - Có các chứng chỉ liên quan
        - Yêu nghề, kiên nhẫn
        - Có khả năng giao tiếp và truyền đạt kiến thức',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp
        - Được hưởng chế độ bảo hiểm y tế, bảo hiểm xã hội
        - Được tham gia các cuộc thi về giáo dục',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển giáo viên Tiếng anh',
            'description' => 'Tuyển dụng giáo viên',
            'salary' => '10000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '7',
            'category_id' => '6',
            'job_position_id' => '4',
            'province_code' => '26',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn
        - Có chứng nhận sư phạm
        - Có các chứng chỉ liên quan
        - Yêu nghề, kiên nhẫn
        - Có khả năng giao tiếp và truyền đạt kiến thức',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp
        - Được hưởng chế độ bảo hiểm y tế, bảo hiểm xã hội
        - Được tham gia các cuộc thi về giáo dục',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển giáo viên Tiếng anh',
            'description' => 'Tuyển dụng giáo viên',
            'salary' => '10000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '7',
            'category_id' => '6',
            'job_position_id' => '4',
            'province_code' => '27',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn
        - Có chứng nhận sư phạm
        - Có các chứng chỉ liên quan
        - Yêu nghề, kiên nhẫn
        - Có khả năng giao tiếp và truyền đạt kiến thức',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp
        - Được hưởng chế độ bảo hiểm y tế, bảo hiểm xã hội
        - Được tham gia các cuộc thi về giáo dục',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển giáo viên Tiếng anh',
            'description' => 'Tuyển dụng giáo viên',
            'salary' => '10000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '7',
            'category_id' => '6',
            'job_position_id' => '4',
            'province_code' => '06',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn
        - Có chứng nhận sư phạm
        - Có các chứng chỉ liên quan
        - Yêu nghề, kiên nhẫn
        - Có khả năng giao tiếp và truyền đạt kiến thức',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp
        - Được hưởng chế độ bảo hiểm y tế, bảo hiểm xã hội
        - Được tham gia các cuộc thi về giáo dục',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển giáo viên Tiếng anh',
            'description' => 'Tuyển dụng giáo viên',
            'salary' => '10000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '7',
            'category_id' => '6',
            'job_position_id' => '4',
            'province_code' => '92',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn
        - Có chứng nhận sư phạm
        - Có các chứng chỉ liên quan
        - Yêu nghề, kiên nhẫn
        - Có khả năng giao tiếp và truyền đạt kiến thức',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp
        - Được hưởng chế độ bảo hiểm y tế, bảo hiểm xã hội
        - Được tham gia các cuộc thi về giáo dục',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển giáo viên Tiếng anh',
            'description' => 'Tuyển dụng giáo viên',
            'salary' => '10000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '7',
            'category_id' => '6',
            'job_position_id' => '4',
            'province_code' => '96',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn
        - Có chứng nhận sư phạm
        - Có các chứng chỉ liên quan
        - Yêu nghề, kiên nhẫn
        - Có khả năng giao tiếp và truyền đạt kiến thức',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp
        - Được hưởng chế độ bảo hiểm y tế, bảo hiểm xã hội
        - Được tham gia các cuộc thi về giáo dục',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển giáo viên Tiếng anh',
            'description' => 'Tuyển dụng giáo viên',
            'salary' => '10000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '7',
            'category_id' => '6',
            'job_position_id' => '4',
            'province_code' => '95',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn
        - Có chứng nhận sư phạm
        - Có các chứng chỉ liên quan
        - Yêu nghề, kiên nhẫn
        - Có khả năng giao tiếp và truyền đạt kiến thức',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp
        - Được hưởng chế độ bảo hiểm y tế, bảo hiểm xã hội
        - Được tham gia các cuộc thi về giáo dục',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '1',
            'category_id' => '6',
            'job_position_id' => '4',
            'province_code' => '26',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '1',
            'category_id' => '6',
            'job_position_id' => '4',
            'province_code' => '01',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '2',
            'category_id' => '7',
            'job_position_id' => '4',
            'province_code' => '02',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '3',
            'category_id' => '5',
            'job_position_id' => '4',
            'province_code' => '04',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '4',
            'category_id' => '2',
            'job_position_id' => '4',
            'province_code' => '01',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '5',
            'category_id' => '3',
            'job_position_id' => '4',
            'province_code' => '02',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '6',
            'category_id' => '4',
            'job_position_id' => '4',
            'province_code' => '04',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '1',
            'category_id' => '6',
            'job_position_id' => '4',
            'province_code' => '08',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '2',
            'category_id' => '7',
            'job_position_id' => '4',
            'province_code' => '10',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '3',
            'category_id' => '5',
            'job_position_id' => '4',
            'province_code' => '12',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '4',
            'category_id' => '2',
            'job_position_id' => '4',
            'province_code' => '14',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '5',
            'category_id' => '3',
            'job_position_id' => '4',
            'province_code' => '15',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '6',
            'category_id' => '4',
            'job_position_id' => '4',
            'province_code' => '17',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '1',
            'category_id' => '6',
            'job_position_id' => '4',
            'province_code' => '08',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '2',
            'category_id' => '7',
            'job_position_id' => '4',
            'province_code' => '19',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '3',
            'category_id' => '5',
            'job_position_id' => '4',
            'province_code' => '20',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '4',
            'category_id' => '2',
            'job_position_id' => '4',
            'province_code' => '22',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '5',
            'category_id' => '3',
            'job_position_id' => '4',
            'province_code' => '22',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '6',
            'category_id' => '4',
            'job_position_id' => '4',
            'province_code' => '22',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '1',
            'category_id' => '6',
            'job_position_id' => '4',
            'province_code' => '08',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '2',
            'category_id' => '7',
            'job_position_id' => '4',
            'province_code' => '10',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '3',
            'category_id' => '5',
            'job_position_id' => '4',
            'province_code' => '12',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '4',
            'category_id' => '2',
            'job_position_id' => '4',
            'province_code' => '14',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '5',
            'category_id' => '3',
            'job_position_id' => '4',
            'province_code' => '15',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '6',
            'category_id' => '4',
            'job_position_id' => '4',
            'province_code' => '17',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '1',
            'category_id' => '6',
            'job_position_id' => '4',
            'province_code' => '08',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '2',
            'category_id' => '7',
            'job_position_id' => '4',
            'province_code' => '19',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '3',
            'category_id' => '5',
            'job_position_id' => '4',
            'province_code' => '20',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '4',
            'category_id' => '2',
            'job_position_id' => '4',
            'province_code' => '22',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '5',
            'category_id' => '3',
            'job_position_id' => '4',
            'province_code' => '22',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '6',
            'category_id' => '4',
            'job_position_id' => '4',
            'province_code' => '22',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '1',
            'category_id' => '6',
            'job_position_id' => '4',
            'province_code' => '08',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '2',
            'category_id' => '7',
            'job_position_id' => '4',
            'province_code' => '10',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '3',
            'category_id' => '5',
            'job_position_id' => '4',
            'province_code' => '12',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '4',
            'category_id' => '2',
            'job_position_id' => '4',
            'province_code' => '14',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '5',
            'category_id' => '3',
            'job_position_id' => '4',
            'province_code' => '15',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '6',
            'category_id' => '4',
            'job_position_id' => '4',
            'province_code' => '17',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '1',
            'category_id' => '6',
            'job_position_id' => '4',
            'province_code' => '08',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '2',
            'category_id' => '7',
            'job_position_id' => '4',
            'province_code' => '19',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '3',
            'category_id' => '5',
            'job_position_id' => '4',
            'province_code' => '20',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '4',
            'category_id' => '2',
            'job_position_id' => '4',
            'province_code' => '22',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '5',
            'category_id' => '3',
            'job_position_id' => '4',
            'province_code' => '22',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
        DB::table('job_vacancies')->insert([
            'title' => 'Tuyển nhân viên',
            'description' => 'Tuyển nhân viên',
            'salary' => '9000000.00',
            'employment_type' => 'Toàn thời gian',
            'application_deadline' => '2024-12-24',
            'is_published' => '1',
            'company_id' => '6',
            'category_id' => '4',
            'job_position_id' => '4',
            'province_code' => '22',
            'address' => '',
            'request' => '- Có kiến thức chuyên môn',
            'interest' => '- Được làm việc trong môi trường giáo dục chuyên nghiệp',
            'location' => '- Số 1, Đường XXZ, xã Đồng Văn, huyện Đồng Văn, tình Hà Giang',
            'work_time' => '- Từ thứ 2 đến thứ 7 hàng tuần',
            'experience' => '2 - 3 năm',
            'gender' => 'Không yêu cầu',
        ]);
        
    }
}
