
import React, { useState, useEffect } from 'react';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ModalCtBaiDang = ({ 
    modal, 
    setModal, 
    handleClickOutside, 
    selectedJob, 
    handleDeleteJob,
    token
}) => {
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
        applicationDeadline: "",
    });

    const [provinces, setProvinces] = useState([]);
    const [categories, setCategories] = useState([]);
    const [jobPositions, setJobPositions] = useState([]);
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

                if (selectedJob) {
                    setFormData({
                        title: selectedJob.title,
                        description: selectedJob.description,
                        request: selectedJob.request,
                        interest: selectedJob.interest,
                        location: selectedJob.location,
                        workTime: selectedJob.workTime,
                        salary: selectedJob.salary,
                        provinceName: selectedJob.provinceName,
                        experience: selectedJob.experience,
                        jobPositionName: selectedJob.jobPositionName,
                        employmentType: selectedJob.employmentType,
                        gender: selectedJob.gender,
                        categoryName: selectedJob.categoryName,
                        applicationDeadline: moment(selectedJob.applicationDeadline),
                    });
                }
            } catch (error) {
                console.error("Error fetching provinces or categories:", error);
            }
        };

        fetchData();
    }, [selectedJob]); 
    useEffect(() => {
        const selectedProvince = provinces.find(
            (province) => province.name === formData.provinceName
        );
        if (selectedProvince) {
            setFormData((prev) => ({
                ...prev,
                provinceName: selectedProvince.code, 
            }));
        }
    }, [provinces, formData.provinceName]);
    
    useEffect(() => {
        const selectedCategory = categories.find(
            (category) => category.name === formData.categoryName
        );
        if (selectedCategory) {
            setFormData((prev) => ({
                ...prev,
                categoryName: selectedCategory.id, 
            }));
        }
    }, [categories, formData.categoryName]);
    
    useEffect(() => {
        const selectedJobPosition = jobPositions.find(
            (jobPosition) => jobPosition.name === formData.jobPositionName
        );
        if (selectedJobPosition) {
            setFormData((prev) => ({
                ...prev,
                jobPositionName: selectedJobPosition.id,
            }));
        }
    }, [jobPositions, formData.jobPositionName]);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleDateChange = (date, dateString) => {
        setFormData((prevData) => ({
            ...prevData,
            applicationDeadline: dateString,
        }));
    };

    const handleUpdateJob = async () => {
        try {
            const response = await axios.put(`/company/job-vacancy/update/${selectedJob.id}`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            console.log(token);
            alert('Cập nhật thành công!');
            setModal(false);
            navigate('/qlcongty');

            window.location.reload();
        } catch (error) {
            console.error('Error updating job:', error);
            alert('Lỗi khi cập nhật!');
            
        }
    };
    
    if (!formData) return null;
    console.log(formData);
    return (
        <div className="modal-chitietbaidang" onClick={handleClickOutside}>
            <div className="chitietbaidang" onClick={(e) => e.stopPropagation()}>
                <span onClick={() => setModal(false)} className="close-button">&times;</span>
                <div className="formDangBai">
                    <div className="tieudeBaidang">
                        <span>Chi tiết bài đăng tuyển dụng</span>
                    </div>
                    <div className="tieudemuc">
                        <span>Thông tin cơ bản</span>
                    </div>
                    <div className="fullprofile">
                        <div className="name">
                            <input 
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Tên vị trí cần tuyển dụng"
                            />
                        </div>
                        <div className="birthday">
                            <Space direction="vertical">
                                <DatePicker
                                    name="applicationDeadline"
                                    placeholder="Ngày hết hạn tuyển dụng"
                                    value={formData.applicationDeadline ? moment(formData.applicationDeadline) : null}
                                    onChange={handleDateChange}
                                />
                            </Space>
                        </div>
                    </div>
                    <div className="tieudemuc">
                        <span>Chi tiết tuyển dụng</span>
                    </div>
                    <div className="comment">
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Mô tả công việc"
                        />
                    </div>
                    <div className="comment">
                        <textarea
                            name="request"
                            value={formData.request}
                            onChange={handleChange}
                            placeholder="Yêu cầu công việc"
                        />
                    </div>
                    <div className="comment">
                        <textarea
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            placeholder="Quyền lợi"
                        />
                    </div>
                    <div className="comment">
                        <textarea
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Địa điểm làm việc"
                        />
                    </div>
                    <div className="comment">
                        <textarea
                            name="workTime"
                            value={formData.workTime}
                            onChange={handleChange}
                            placeholder="Thời gian làm việc"
                        />
                    </div>
                    <div className="tieudemuc">
                        <span>Thông tin chung</span>
                    </div>
                    <div className="fullprofile mg-bt20">
                        <div className="name">
                            <input
                                name="salary"
                                value={formData.salary}
                                onChange={handleChange}
                                placeholder="Mức lương"
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
                                    <option key={province.code} value={province?.code}>
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
                        <div className="tinh">
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                            >
                                <option value="">Chọn giới tính</option>
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                                <option value="Không yêu cầu">Cả hai</option>
                            </select>
                        </div>
                        <div className="tinh">
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
                    </div>
                </div>
                <div className="capnhatvsxoa">
                    <button className="capnhat" onClick={handleUpdateJob}>Cập nhật</button>
                    <button className="xoa" onClick={handleDeleteJob}>Xóa</button>
                </div>
            </div>
        </div>
    );
};

export default ModalCtBaiDang;
