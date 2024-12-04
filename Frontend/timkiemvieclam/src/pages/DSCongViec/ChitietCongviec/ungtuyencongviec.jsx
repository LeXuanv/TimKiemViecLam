import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CgSandClock } from "react-icons/cg";


const CongViecUngTuyen = ({job,user}) =>{
    if (!job) return null;
    return(
        <>
            <div className="congviecungtuyen">
                <div className="innerCVungtuyen">
                    <div className="tencongviec">
                        <span>{job.title}</span>
                    </div>
                    <div className="thongtin">
                        <div className="boxthongtin">
                            <div className="box">
                                <div className="icon">
                                    <RiMoneyDollarCircleLine />
                                </div>
                                <div className="ctthongtintd">
                                    <span className="tenthongtin">Mức Lương</span>
                                    <span className="ctthongtin">{job.salary}</span>
                                </div>
                            </div>
                        </div>
                        <div className="boxthongtin">
                            <div className="box">
                                <div className="icon">
                                    <FaMapMarkerAlt />
                                </div>
                                <div className="ctthongtintd">
                                    <span className="tenthongtin">Địa điểm</span>
                                    <span className="ctthongtin">{job.provinceName}</span>
                                </div>
                            </div>
                        </div>
                        <div className="boxthongtin">
                            <div className="box">
                                <div className="icon">
                                    <CgSandClock />
                                </div>
                                <div className="ctthongtintd">
                                    <span className="tenthongtin">Kinh nghiệm</span>
                                    <span className="ctthongtin">{job.experience}</span>
                                </div>
                            </div>
                        </div>
                                           
                    </div>
                </div>
                {user == 1 ?
                    <div className="admin-delete">
                        <MdDelete />
                    </div>
                    : ""
                }
            </div>
        </>
    )
}

export default CongViecUngTuyen;


