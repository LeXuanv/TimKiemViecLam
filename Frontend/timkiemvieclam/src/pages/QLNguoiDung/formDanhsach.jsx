
import { useEffect } from "react";
import { MdBrowserUpdated } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import FormCapNhat from "./formCapNhat";
import axios from "axios";
const FormDanhSach = ({ 
        update, 
        setUpdate, 
        modalAdmin, 
        setModalAdmin, 
        userList, 
        userDatas,
        handleDeleteUser,
        selectedUser,
        setSelectedUser,
     }) => {
    const handleClickModalUpdate = () => {
        setUpdate(!update);
        setModalAdmin(!modalAdmin);
    };
    const handleSelect = (user) => {
        setSelectedUser(user);
    }
    const baseURL = axios.defaults.baseURL;

    
    console.log("userList: " , userList)
    console.log("user ::" , userDatas)
    return (
        <>
            <div className="formdanhsach">
                <div className="titleDanhSach">
                    <span>Danh sách tài khoản công ty và người dùng</span>
                </div>
                <div className="bang">
                    <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên</th>
                                <th>Logo</th>
                                {/* <th>Giới tính</th>
                                <th>Ngày sinh</th> */}
                                <th>Email</th>
                                <th>Số điện thoại</th>
                                {/* <th>Kinh nghiệm</th> */}
                                <th>Địa chỉ</th>
                                <th>Loại tài khoản</th>
                                <th>Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList && userList.length > 0 ? (
                                userList.map((user, index) => (
                                    <tr key={ user.email} 
                                        // onChange={(value)=>setSelectedUser(value)}
                                    >
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        {/* <td>{user.logo || "N/A"}</td> */}
                                        <td>
                                            <img src={`${baseURL}/storage/${user.logo}`} style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                                        </td>

                                        {/* <td>{user.birth_date || "N/A"}</td> */}
                                        <td>{user.email}</td>
                                        <td>{user.phone_number || "N/A"}</td>
                                        {/* <td>{user.experience || "N/A"}</td> */}
                                        <td>{user.address || "N/A"}</td>
                                        <td>
                                            {
                                                (() => {
                                                const userData = userDatas.find(data => data.id === user.user_id);
                                                return userData?.role_id === 2 ? "Nhà tuyển dụng" : "Người tìm việc";
                                                })()
                                            }
                                        </td>

                                        <td>
                                            <MdBrowserUpdated
                                                className="update"
                                                onClick={() => {
                                                    handleSelect(user);
                                                    handleClickModalUpdate();
                                                }}
                                            />{

                                            }
                                            <RiDeleteBin6Fill 
                                                className="delete" 
                                                onClick={() => handleDeleteUser(user.user_id)}
                                            />
                                        </td>
                                        
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="10">Không có dữ liệu</td>
                                </tr>
                            )}
                            {modalAdmin ? (
                                <div className="modal">
                                    <div className="formModal">
                                        <span
                                            onClick={() => setModalAdmin(!modalAdmin)}
                                            className="close-button"
                                        >
                                            &times;
                                        </span>
                                        <FormCapNhat 
                                            selectedUser={selectedUser}
                                            userDatas={userDatas}
                                        /> 
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default FormDanhSach;
