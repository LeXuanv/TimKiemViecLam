

/*
import { MdBrowserUpdated } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";

const FormDanhSach = ({update, setUpdate, modalAdmin, setModalAdmin}) => {
    const handleClickModalUpdate = () => {
        setUpdate(!update);
        setModalAdmin(!modalAdmin)
    }
    return(
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
                                <th>Giới tính</th>
                                <th>Ngày sinh</th>
                                <th>Email</th>
                                <th>Số điện thoại</th>
                                <th>Kinh nghiệm</th>
                                <th>Địa chỉ</th>
                                <th>Loại tài khoản</th>
                                <th>Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Lê Xuân Vũ</td>
                                <td>Nam</td>
                                <td>27/09/2002</td>
                                <td>xuanvujame@gmail.com</td>
                                <td>0343553262</td>
                                <td>1 năm</td>
                                <td>Thành Mỹ, Thạch Thành, Thanh Hóa</td>
                                <td>Admin</td>
                                <td><MdBrowserUpdated className="update" onClick={handleClickModalUpdate} /> <RiDeleteBin6Fill className="delete" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default FormDanhSach;

*/


import { useEffect } from "react";
import { MdBrowserUpdated } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";

const FormDanhSach = ({ 
        update, 
        setUpdate, 
        modalAdmin, 
        setModalAdmin, 
        userList, 
        userDatas,
        handleDeleteUser,

     }) => {
    const handleClickModalUpdate = () => {
        setUpdate(!update);
        setModalAdmin(!modalAdmin);
    };
   
    
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
                                <th>Giới tính</th>
                                <th>Ngày sinh</th>
                                <th>Email</th>
                                <th>Số điện thoại</th>
                                <th>Kinh nghiệm</th>
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
                                        <td>{user.gender || "N/A"}</td>
                                        <td>{user.birth_date || "N/A"}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone_number || "N/A"}</td>
                                        <td>{user.experience || "N/A"}</td>
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
                                                onClick={handleClickModalUpdate}
                                            />{" "}
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
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default FormDanhSach;
