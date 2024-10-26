import React from 'react';
import { DatePicker, Space } from 'antd';

const FormDangBai = () => {
    return(
        <>
            <div className="formDangBai">
                <div className="tieudeBaidang">
                    <span>Đăng bài tuyển dụng</span>
                </div>
                <div className="tieudemuc">
                    <span>Thông tin cơ bản</span>
                </div>
                <div className="fullprofile">
                    <div className="name">
                        <input placeholder="Nhập tên vị trí cần tuyển dụng..."/>
                    </div>
                    <div className="birthday">
                        <Space direction="vertical">
                            <DatePicker placeholder="Ngày hết hạn tuyển dụng"/>
                        </Space>
                    </div>
                </div>
                <div className="tieudemuc">
                    <span>Chi tiết tuyển dụng</span>
                </div>
                <div className='comment'>
                    <textarea placeholder='Mô tả công việc'></textarea>
                    <textarea placeholder='Yêu cầu ứng viên'></textarea>
                    <textarea placeholder='Quyền lợi'></textarea>
                    <textarea placeholder='Địa điểm làm việc'></textarea>
                    <textarea placeholder='Thời gian làm việc'></textarea>
                </div>
                <div className="tieudemuc">
                    <span>Thông tin chung</span>
                </div>
                <div className="fullprofile mg-bt20">
                    <div className="name">
                        <input placeholder="Mức lương"/>
                    </div>
                    <div className="tinh">
                        <select name="tinh" id="tinh">
                            <option value>Địa điểm</option>
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
        </>
    )
}

export default FormDangBai;