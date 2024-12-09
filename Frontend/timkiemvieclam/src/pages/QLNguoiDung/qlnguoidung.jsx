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
            const response = await axios.get('/api/company/get-all');
            setCompanies(response.data);
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
    }, [])
    const filteredUsers = selectedUserType === "all" ? [...companies, ...jobSeekers] : selectedUserType === "company" ? companies : jobSeekers;
    
 

    const handleDeleteUser = async (userId) => {
        try {
            const response = await axios.delete(`/api/user/delete-user/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
    
            // alert('Xóa tài khoản thành công!');
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
            window.location.reload()    
        } catch (error) {
            console.error('Error deleting user:', error);
            // alert('Có lỗi xảy ra khi xóa người dùng!');
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
                                {update ? <FormCapNhat setSelectedUser = {setSelectedUser} /> : <FormDangky />}
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