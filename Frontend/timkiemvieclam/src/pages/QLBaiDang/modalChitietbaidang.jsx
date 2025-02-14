
import React, { useState, useEffect } from 'react';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Bounce, toast } from 'react-toastify';

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
    const baseURL = axios.defaults.baseURL;

    const [provinces, setProvinces] = useState([]);
    const [categories, setCategories] = useState([]);
    const [jobPositions, setJobPositions] = useState([]);
    const [modalListUV, setModalListUV] = useState(false);
    const [modalListUVAccept, setModalListUVAccept] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoading2, setIsLoading2] = useState(false);

    // const [modalChitietUV, setModalChitietUV] = useState(false);
    const navigate = useNavigate(); 
    const [jobSeekers, setJobSeekers] = useState([]);
    const [jobSeekersAccept, setJobSeekersAccept] = useState([]);
    useEffect(() => {
        const fetchDataJobSeekers = async () => {
            try {
                console.log("Fetched data:", selectedJob);

                const { data : jobSeekersResponseData } = await axios.get(`/company/jobs/${selectedJob.id}/applications`);
                console.log(jobSeekersResponseData);

                setJobSeekers(jobSeekersResponseData);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchDataJobSeekers();
    }, [isLoading]);
    useEffect(() => {
        const fetchDataJobSeekers = async () => {
            try {
                console.log("Fetched data:", selectedJob);

                const { data : jobSeekersAcceptResponseData } = await axios.get(`/company/jobs/${selectedJob.id}/applications-accept`);
                console.log(jobSeekersAcceptResponseData);

                setJobSeekersAccept(jobSeekersAcceptResponseData);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchDataJobSeekers();
    }, [isLoading2]);
    const handleAcceptJobSeeker = async (jobSeekerId) => {
        try {
            await axios.post(`/company/jobs/${selectedJob.id}/applications/${jobSeekerId}/accept`, {}, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const updatedJobSeekers = jobSeekers.filter(
                (jobSeeker) => jobSeeker.id!== jobSeekerId
            );
            setJobSeekers(updatedJobSeekers);
            setIsLoading(!isLoading);
            setIsLoading2(!isLoading2);

            // alert('Phê duyệt thành công!');
            toast.success('Phê duyệt thành công!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
              });
        } catch (error) {
            console.error("Error accepting job seeker: ", error);
        }
    }
    const handleRejectJobSeeker = async (jobSeekerId) => {
        try {
            await axios.post(`/company/jobs/${selectedJob.id}/applications/${jobSeekerId}/reject`, {}, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const updatedJobSeekers = jobSeekers.filter(
                (jobSeeker) => jobSeeker.id!== jobSeekerId
            );
            setJobSeekersAccept(updatedJobSeekers);
            setIsLoading2(!isLoading2);

            // alert('Từ chối thành công!');
            toast.success('Từ chối thành công!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } catch (error) {
            console.error("Error reject job seeker: ", error);
        }
    }
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
            // alert('Cập nhật thành công!');
            toast.success('Cập nhật thành công!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            setModal(false);
            navigate('/qlcongty');

            window.location.reload();
        } catch (error) {
            console.error('Error updating job:', error);
            // alert('Lỗi khi cập nhật!');
            toast.error('Lỗi khi cập nhật!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            
        }
    };
    const handleListUV = () => {
        setModalListUV(true);
    }
    const handleListUVAccept = () => {
        setModalListUVAccept(true);
    }
    if (!formData) return null;
    console.log(formData);

    
    const viewCV = async (id) => {
        try {
          const response = await axios.get(`/api/job-seeker/view-cv/${id}`, {
            headers: {
              // Authorization: `Bearer ${token}`,
            },
            responseType: 'blob',
          });
      
          const pdfBlob = response.data;
          const pdfURL = URL.createObjectURL(pdfBlob); 
          console.log("cv data:",response.data);
          window.open(pdfURL, "_blank");
        } catch (error) {
          console.error("Lỗi khi lấy dữ liệu:", error);
        }
      };
    return (
        <>
            <div className="modal-chitietbaidang" onClick={handleClickOutside}>
                <div className="chitietbaidang" onClick={(e) => e.stopPropagation()}>
                    <span onClick={() => setModal(false)} className="close-button">&times;</span>

                    <div className="formDangBai">
                        <div style={{display: "flex", justifyContent: 'flex-end'}}>
                            <div className="capnhatvsxoa">
                                <button className="list-uv" onClick={handleListUV}>Danh sách người ứng cử</button>
                                <button className="list-uv" onClick={handleListUVAccept}>DS ứng cử được phê duyệt
                                </button>

                                <button className="capnhat" onClick={handleUpdateJob}>Cập nhật</button>
                                <button className="xoa" onClick={handleDeleteJob}>Xóa</button>
                            </div>
                        </div>

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

                </div>
                {(modalListUV) ?
                    <div className='modalUV'>
                        <span onClick={() => setModalListUV(false)} className="close-button-listuv">&times;</span>
                        <div className="formlistUV">
                            <div className="titleList">
                                <p className='tiltle-vt'>Danh sách ứng viên</p>
                                <p className='tenVt'><span>Tên công việc:</span> {formData.title} </p>
                            </div>
                        <div className="listUV" >
                            <div className="innerList">
                        {jobSeekers && jobSeekers.length > 0 ? (
                            jobSeekers.map((jobSeeker) => (
                            // <Link 
                            //     key={jobSeeker.id} 
                            //     to={PATH_PAGE.chitietcongviec.replace(':id', jobSeeker.id)} 
                            //     className="link-deital"
                            // >

                                    
                                            <div className="uv">
                                                <div className="tt">
                                                    <div className="avtUv">
                                                        <img src={`${baseURL}/storage/${jobSeeker.logo}`} />
                                                    </div>
                                                    <div className="tt-uv">
                                                        <div className="nameUv mg-bt5">
                                                            <span>{jobSeeker.name}</span>
                                                        </div>
                                                        <div className="phoneUv mg-bt5">
                                                            <span>{jobSeeker.phone_number}</span>
                                                        </div>
                                                        <div className="emailUv mg-bt5">
                                                            <span>{jobSeeker.email}</span>
                                                        </div>
                                                        {
                                                            jobSeeker.cv ? <div className="fileCvPdf mg-bt5">
                                                            <button onClick={() => viewCV(jobSeeker.id)}>Xem CV</button>
                                                            </div> : ("")
                                                        }
                                                    </div>
                                                </div>
                                                <div className="buttonCn">
                                                    <button 
                                                        className='duyet' 
                                                        onClick={() =>handleAcceptJobSeeker(jobSeeker.id)}
                                                    >
                                                        Duyệt
                                                    </button>
                                                    <button 
                                                        className='huy'
                                                        onClick={() =>handleRejectJobSeeker(jobSeeker.id)}
                                                    >
                                                        Hủy
                                                    </button>
                                                </div>
                                            </div>
                                        
                            // </Link>
                            ))
                        ) : (
                            <p>Không có ứng viên nào được tìm thấy.</p>
                        )}
                            </div>
                        </div>

                    </div>
                </div>
                 : " "}
                 {(modalListUVAccept) ? 
                <div className='modalUV'>
                    <span onClick={() => setModalListUVAccept(false)} className="close-button-listuv">&times;</span>
                    <div className="formlistUV">
                        <div className="titleList">
                            <p className='tiltle-vt'>Danh sách ứng viên được phê duyệt</p>
                            <p className='tenVt'><span>Tên công việc:</span> {formData.title} </p>
                        </div>
                        <div className="listUV">
                                        <div className="innerList">
                        {jobSeekersAccept && jobSeekersAccept.length > 0 ? (
                            jobSeekersAccept.map((jobSeeker) => (
                                    
                                            <div className="uv">
                                                <div className="tt">
                                                    <div className="avtUv">
                                                        <img src={`${baseURL}/storage/${jobSeeker.logo}`} />
                                                    </div>
                                                    <div className="tt-uv">
                                                        <div className="nameUv mg-bt5">
                                                            <span>{jobSeeker.name}</span>
                                                        </div>
                                                        <div className="phoneUv mg-bt5">
                                                            <span>{jobSeeker.phone_number}</span>
                                                        </div>
                                                        <div className="emailUv mg-bt5">
                                                            <span>{jobSeeker.email}</span>
                                                        </div>
                                                        {
                                                            jobSeeker.cv ? <div className="fileCvPdf mg-bt5">
                                                            <button onClick={() => viewCV(jobSeeker.id)}>Xem CV</button>
                                                            </div> : ("")
                                                        }
                                                        
                                                    </div>
                                                </div>
                                                <div className="buttonCn">
                                                    {/* <button 
                                                        className='duyet' 
                                                        onClick={() =>handleAcceptJobSeeker(jobSeeker.id)}
                                                    >
                                                        Duyệt
                                                    </button> */}
                                                    <button 
                                                        className='huy'
                                                        onClick={() =>handleRejectJobSeeker(jobSeeker.id)}
                                                    >
                                                        Hủy
                                                    </button>
                                                </div>
                                            </div>
                                        
                            // </Link>
                            ))
                        ) : (
                            <p>Không có ứng viên nào được tìm thấy.</p>
                        )}
                            </div>
                        </div>

                    </div>
                </div>
                 : " "}
                 {/* {modalChitietUV ? 
                 <div className="modalChitietUV">
                    <span onClick={() => setModalChitietUV(false)} className="close-button-listuv">&times;</span>
                    <div className="formChitietUV">
                        <p>Chi tiết ứng viên</p>
                        
                    </div>
                 </div>
                 :""} */}
            </div>
        </>
    );
};

export default ModalCtBaiDang;

