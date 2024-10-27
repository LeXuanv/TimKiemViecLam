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