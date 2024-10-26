import { FaUserGroup } from "react-icons/fa6";
import { FaCube } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link} from "react-router-dom";
import { MdOutlineIosShare } from "react-icons/md";


const CongTyCongViec = () =>{
    return(
        <>
            <div className="congtycongviec">
                <div className="chitietcongty">
                    <div className="congty">
                        <div className="anhCongty">
                            <img src="https://my.archdaily.net/users/custom_avatars/007/454/945/original/ho.jpg?1675400346" />
                        </div>
                        <div className="tencongty">
                            <span>Công ty TNHH phần mềm Gol</span>
                        </div>
                    </div>
                    <div className="box-chitiet">
                        <div className="icon-chitiet">
                            <FaUserGroup />
                            <div className="tentitle">
                                <span>Quy mô:</span>
                            </div>
                        </div>
                        <div className="ttchitiet">
                            <span>10 - 24 nhân viên</span>
                        </div>
                    </div>
                    <div className="box-chitiet">
                        <div className="icon-chitiet">
                            <FaCube />
                            <div className="tentitle">
                                <span>Lĩnh vực:</span>
                            </div>
                        </div>
                        <div className="ttchitiet">
                            <span>Dược phẩm / Y tế / Công nghệ sinh học</span>
                        </div>
                    </div>
                    <div className="box-chitiet">
                        <div className="icon-chitiet">
                            <FaMapMarkerAlt />
                            <div className="tentitle">
                                <span>Đại điểm:</span>
                            </div>
                        </div>
                        <div className="ttchitiet">
                            <span>Số 85 Phố Nguyễn Du, Phường Nguyễn Du, Quận Hai Bà Trưng, Thành phố Hà Nội, Việt Namn</span>
                        </div>
                    </div>
                    <div className="xemttcty">
                        <div className="btn-xemtt">
                            <Link to="" >Xem thông tin</Link>
                            <MdOutlineIosShare />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CongTyCongViec;