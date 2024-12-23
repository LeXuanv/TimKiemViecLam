import { useEffect, useState } from "react";
import MainLayout from "../mainLayout";
import FormDangky from "./formDangKy";
import FormDanhSach from "./formDanhsach";
import "./qlnguoidung.scss";
import FormCapNhat from "./formCapNhat";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";


const QlNguoiDung = () => {
    const [modalAdmin, setModalAdmin] = useState(false);
    const [update, setUpdate] = useState(false);
    const token = localStorage.getItem('authToken');
    const [shouldReload, setShouldReload] = useState(false);

    const [companies, setCompanies] = useState([]);
    const [jobSeekers, setJobSeekers] = useState([]);
    const [selectedUserType, setSelectedUserType] = useState("all");
    const [selectedUser, setSelectedUser] = useState([]);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const handleClickModal = () => {
        setModalAdmin(!modalAdmin);
        setUpdate(false);
    };

    const handleUserTypeChange = (event) => {
        setSelectedUserType(event.target.value);
    };
    const fetchDataCompanies = async () => {
        try {
            const response = await axios.get('/api/company/get-all-by-admin');
            setCompanies(response.data.data);
        } catch (error) {
            console.error("Error fetching companies:", error);
        }
    }
    const fetchDataJobSeekers = async () => {
        try {
            const response = await axios.get('/api/job-seeker/get-all');
            setJobSeekers(response.data);
        } catch (error) {
            console.error("Error fetching job seekers:", error);
        }
    }
    const fetchDataUser = async () => {
        try {
            const response = await axios.get('/api/user/get-all');
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching job seekers:", error);
        }
    }
    useEffect(()=>{
        fetchDataCompanies();
        fetchDataJobSeekers();
        fetchDataUser();
    }, [shouldReload])
    const filteredUsers = selectedUserType === "all" ? [...companies, ...jobSeekers] : selectedUserType === "company" ? companies : jobSeekers;
    
 

    const handleDeleteUser = async (userId) => {
        try {
            const jobSeeker = jobSeekers.find(js => js.user_id === userId);
            if (jobSeeker) {
                const jobSeekerId = jobSeeker.id;
                console.log("Ứng viên định xóa:", jobSeeker);
                await axios.post(`/api/admin/job-seeker/delete`, { id: jobSeekerId }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            } else {
                const company = companies.find(c => c.user_id === userId);
                if (company) {
                    const companyId = company.id;
                    console.log("Công ty định xóa:", company);
                    await axios.post(`/api/admin/company/delete`, { id: companyId }, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                } else {
                    throw new Error("Không tìm thấy user với userId tương ứng.");
                }
            }
    
            toast.success('Xóa tài khoản thành công!', {
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
    
            setShouldReload(!shouldReload);
        } catch (error) {
            console.error('Error deleting user:', error);
    
            toast.error('Có lỗi xảy ra khi xóa người dùng!', {
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
    
    

    return (
        <>
            <MainLayout>
                <div className="qlnguoidung">
                    <div className="filter-section">
                        <label htmlFor="userType">Lọc người dùng: </label>
                        <select
                            id="userType"
                            value={selectedUserType}
                            onChange={handleUserTypeChange}
                        >
                            <option value="all">Tất cả</option>
                            <option value="company">Company</option>
                            <option value="job_seeker">Job Seeker</option>
                        </select>
                    </div>

                    <FormDanhSach
                        update={update}
                        setUpdate={setUpdate}
                        modalAdmin={modalAdmin}
                        setModalAdmin={setModalAdmin}
                        userList={filteredUsers}
                        companies={companies}
                        jobSeekers={jobSeekers}
                        userDatas={users}
                        // setSelectedUser = {setSelectedUser} 
                        handleDeleteUser = {handleDeleteUser} 


                    />
                    <button onClick={handleClickModal}>Tạo tài khoản</button>

                    {/* <div className="user-list">
                        <h3>Danh sách người dùng</h3>
                        <ul>
                            {filteredUsers.map((user, index) => (
                                <li key={index}>{user.name}</li>
                            ))}
                        </ul>
                    </div> */}

                    {modalAdmin ? (
                        <div className="modal">
                            <div className="formModal">
                                <span
                                    onClick={() => setModalAdmin(!modalAdmin)}
                                    className="close-button"
                                >
                                    &times;
                                </span>
                                 <FormCapNhat /> 
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </MainLayout>
        </>
    );
};

export default QlNguoiDung;