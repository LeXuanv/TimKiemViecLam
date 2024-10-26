import React from 'react';
import { DatePicker, Space } from 'antd';
import moment from 'moment';

const ModalCtBaiDang = ({modal,setModal,handleClickOutside}) => {
    return(
        <>
            <div className="modal-chitietbaidang " onClick={handleClickOutside}>
                <div className="chitietbaidang">
                    <span onClick={() => setModal(!modal)} class="close-button">&times;</span>
                    <div className="formDangBai">
                        <div className="tieudeBaidang">
                            <span>Chi tiết bài đăng tuyển dụng</span>
                        </div>
                        <div className="tieudemuc">
                            <span>Thông tin cơ bản</span>
                        </div>
                        <div className="fullprofile">
                            <div className="name">
                                <input value="Thực tập sinh Laravel" placeholder="Nhập tên vị trí cần tuyển dụng..."/>
                            </div>
                            <div className="birthday">
                                <Space direction="vertical">
                                    <DatePicker 
                                        placeholder="Ngày hết hạn tuyển dụng"
                                        defaultValue={moment('2024-11-20', 'YYYY-MM-DD')}
                                    />
                                </Space>
                            </div>
                        </div>
                        <div className="tieudemuc">
                            <span>Chi tiết tuyển dụng</span>
                        </div>
                        <div className='comment'>
                            <textarea value="- Mời khách hàng tham gia hội thảo về sức khỏe theo data có sẵn từ Công ty cung cấp
                                            - Hỗ trợ khách hàng đặt dịch vụ
                                            - Chăm sóc và đồng hành cùng khách hàng trong hành trình sống khỏe
                                            - Lên kế hoạch công việc và báo cáo hàng tuần
                                            - Thực hiện các công việc khác theo chỉ thị của quản lý"
                                            placeholder='Mô tả công việc'></textarea>
                            <textarea value="- Tốt nghiệp cao đẳng, đại học hoặc sinh viên đang chờ bằng
                                            - Ưu tiên ứng viên có kinh nghiệm trong lĩnh vực chăm sóc sức khỏe, y tế.
                                            - Không có kinh nghiệm sẽ được đào tạo từ Công ty
                                            - Kỹ năng giao tiếp tốt
                                            - Yêu thích công việc bán hàng, thích gặp gỡ khách hang" 
                                            placeholder='Yêu cầu ứng viên'></textarea>
                            <textarea value="- Lương cứng 7M + Thưởng hoa hồng 7 – 10% + Thưởng nóng
                                            - Chế độ BHXH, BHYT, BHTN, nghỉ lễ tết theo quy định của nhà nước
                                            - Được tham gia quy trình đào tạo bài bản và đặc biệt hưởng lương trong thời gian đào tạo." 
                                            placeholder='Quyền lợi'></textarea>
                            <textarea value="- Hà Nội: 85 Nguyễn Du, Phường Nguyễn Du, Hai Bà Trưng" 
                                            placeholder='Địa điểm làm việc'></textarea>
                            <textarea value="- Thứ 2 - Thứ 6 (từ 08:00 đến 17:30)" 
                                            placeholder='Thời gian làm việc'></textarea>
                        </div>
                        <div className="tieudemuc">
                            <span>Thông tin chung</span>
                        </div>
                        <div className="fullprofile mg-bt20">
                            <div className="name">
                                <input value="20 - 50 triệu" placeholder="Mức lương"/>
                            </div>
                            <div className="tinh">
                                <select name="tinh" id="tinh">
                                    <option value >Địa điểm</option>
                                    <option value="1">Hà Nội</option>
                                    <option value="2">TP Hồ Chí minh</option>
                                </select>
                            </div>
                            <div className="exp">
                                <select name="exp" id="exp">
                                    <option value>Chọn kinh ngiệm</option>
                                    <option value="1">Chưa có</option>
                                    <option value="2">Dưới 1 năm</option>
                                    <option value="3">1 - 2 năm</option>
                                    <option value="3">2 - 3 năm</option>
                                    <option value="3">3 - 4 năm</option>
                                    <option value="3">4 - 5 năm</option>
                                    <option value="3">Trên 5 năm</option>
                                </select>
                            </div>
                            <div className="genner">
                                <select name="genner" id="genner">
                                    <option value>Cấp bậc</option>
                                    <option value="1">Nhân viên</option>
                                    <option value="2">Quản lý</option>
                                    <option value="3">Trưởng nhóm</option>
                                    <option value="3">Trưởng phòng</option>
                                </select>
                            </div>
                            <div className="genner">
                                <select name="genner" id="genner">
                                    <option value>Hình thức làm việc</option>
                                    <option value="1">Toàn thời gian</option>
                                    <option value="2">Bán thời gian</option>
                                    <option value="3">Cả 2 kết hợp</option>
                                </select>
                            </div>
                            <div className="genner">
                                <select name="genner" id="genner">
                                    <option value>Giới tính</option>
                                    <option value="1">Nam</option>
                                    <option value="2">Nữ</option>
                                    <option value="3">Cả 2</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="capnhatvsxoa">
                        <button className='capnhat'>Cập nhật</button>
                        <button className='xoa'>Xóa</button>
                    </div>
                </div>
            </div>
        </>
    )
    
}

export default ModalCtBaiDang;