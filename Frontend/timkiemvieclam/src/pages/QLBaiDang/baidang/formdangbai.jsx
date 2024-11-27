

import React, { useState, useEffect } from "react";
import { DatePicker, Space } from "antd";
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const FormDangBai = () => {
    const token = localStorage.getItem('authToken');
    const [provinces, setProvinces] = useState([]); 
    const [categories, setCategories] = useState([]);
    const [jobPositions, setJobPositions] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        request: "",
        interest: "",
        location: "",
        workTime: "",
        salary: "",
        provinceName: "",
        experience: "",
        jobPositionName: "",
        employmentType: "",
        gender: "",
        categoryName: "",
        applicationDeadline:""
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const provinceResponse = await axios.get('/api/province');  
                const categoryResponse = await axios.get('/api/category');  
                const jobPositionResponse = await axios.get('/admin/job-position');  
                setProvinces(provinceResponse.data);
                setCategories(categoryResponse.data);
                setJobPositions(jobPositionResponse.data);
            } catch (error) {
                console.error("Error fetching provinces or categories:", error);
            }
        };
        fetchData();
    }, []);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleDateChange = (applicationDeadline, dateString) => {
        setFormData((prevData) => ({
            ...prevData,
            applicationDeadline: dateString,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('/company/job-vacancy/store', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });
            alert("Đăng bài thành công");
            console.log('Đăng bài thành công:', response.data);
            navigate('/qlcongty');
        } catch (error) {
            alert("Đăng bài thất bại");
            console.error("Có lỗi xảy ra:", error);
        }
        console.log(formData);

    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="formDangBai">
                <div className="tieudeBaidang">
                    <span>Đăng bài tuyển dụng</span>
                </div>
                <div className="tieudemuc">
                    <span>Thông tin cơ bản</span>
                </div>
                <div className="fullprofile">
                    <div className="name">
                        <input
                            name="title"
                            placeholder="Nhập tên vị trí cần tuyển dụng..."
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="birthday">
                        <Space direction="vertical">
                            <DatePicker
                                placeholder="Ngày hết hạn tuyển dụng"
                                onChange={handleDateChange}
                            />
                        </Space>
                    </div>
                </div>
                <div className="tieudemuc">
                    <span>Chi tiết tuyển dụng</span>
                </div>
                <div className="comment">
                    <textarea name="description" placeholder="Mô tả công việc" value={formData.description} onChange={handleChange} />
                    <textarea name="request" placeholder="Yêu cầu ứng viên" value={formData.request} onChange={handleChange} />
                    <textarea name="interest" placeholder="Quyền lợi" value={formData.interest} onChange={handleChange} />
                    <textarea name="location" placeholder="Địa điểm làm việc" value={formData.location} onChange={handleChange} />
                    <textarea name="workTime" placeholder="Thời gian làm việc" value={formData.workTime} onChange={handleChange} />
                </div>
                <div className="tieudemuc">
                    <span>Thông tin chung</span>
                </div>
                <div className="fullprofile mg-bt20">
                    <div className="name">
                        <input
                            name="salary"
                            placeholder="Mức lương"
                            value={formData.salary}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="tinh">
                        
                        <select 
                            name="provinceName" 
                            value={formData.provinceName} 
                            onChange={handleChange}
                            >
                            <option value="">Tất cả các tỉnh</option>
                            {provinces.map((province) => (
                                <option key={province.code} value={province.code}>
                                    {province.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="exp">
                        <select name="experience" value={formData.experience} onChange={handleChange}>
                            <option value="">Chọn kinh nghiệm</option>
                            <option value="Không yêu cầu kinh nghiệm">Không yêu cầu kinh nghiệm</option>
                            <option value="Dưới 1 năm">Dưới 1 năm</option>
                            <option value="1 - 2 năm">1 - 2 năm</option>
                            <option value="2 - 3 năm">2 - 3 năm</option>
                            <option value="3 - 4 năm">3 - 4 năm</option>
                            <option value="4 - 5 năm">4 - 5 năm</option>
                            <option value="Trên 5 năm">Trên 5 năm</option>
                        </select>
                    </div>
                    <div className="genner">
                        <select 
                            name="jobPositionName" 
                            value={formData.jobPositionName} 
                            onChange={handleChange}
                        >
                            <option value="">Cấp bậc</option>
                            {jobPositions.map((jobPosition) => (
                                <option key={jobPosition.id} value={jobPosition.id}>
                                    {jobPosition.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="genner">
                        <select name="employmentType" value={formData.employmentType} onChange={handleChange}>
                            <option value="">Hình thức làm việc</option>
                            <option value="Toàn thời gian">Toàn thời gian</option>
                            <option value="Bán thời gian">Bán thời gian</option>
                            <option value="Linh động thời gian">Cả 2 kết hợp</option>
                        </select>
                    </div>
                    <div className="genner">
                        <select name="gender" value={formData.gender} onChange={handleChange}>
                            <option value="">Giới tính</option>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                            <option value="Không yêu cầu">Cả hai</option>
                        </select>
                    </div>
                    <div className="genner">
                        <select 
                            name="categoryName" 
                            value={formData.categoryName} 
                            onChange={handleChange}
                        >
                            <option value="">Tất cả các ngành nghề</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    
                    
                </div>
                <div className="btnSubmit">
                    <button type="submit">Đăng bài</button>
                </div>
            </div>
        </form>
    );
};

export default FormDangBai;
