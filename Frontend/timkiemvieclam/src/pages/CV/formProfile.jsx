import React from 'react';
import { DatePicker, Space } from 'antd';


const FormProfile = () => {
    return(
        <>
            <div className="fullprofile">
                <div className="name">
                    <input placeholder="Nhập tên của bạn..."/>
                </div>
                <div className="genner">
                    <select name="genner" id="genner">
                        <option value>Giới tính</option>
                        <option value="1">Nam</option>
                        <option value="2">Nữ</option>
                        <option value="3">Khác</option>
                    </select>
                </div>
                <div className="birthday">
                    <Space direction="vertical">
                         <DatePicker />
                    </Space>
                </div>
                <div className="email">
                    <input placeholder="Nhập email của bạn..."/>
                </div>
                <div className="sdt">
                    <input placeholder="Nhập số điện thoại của bạn..."/>
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
                <div className="tinh">
                    <select name="tinh" id="tinh">
                        <option value>Chọn tỉnh thành làm việc</option>
                        <option value="1">Hà Nội</option>
                        <option value="2">TP Hồ Chí minh</option>
                    </select>
                </div>
                <div className="quan">
                    <select name="quan" id="quan">
                        <option value>Chọn quận/huyện làm việc</option>
                        <option value="1">Hà Đông</option>
                        <option value="2">Cầu giấy</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default FormProfile;