import { FaUser } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";
import { CgSandClock } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa";
import { PiBagSimpleFill } from "react-icons/pi";



const ThongTinChung = ({job}) =>{
    if (!job) return null;
    return(
        <>
            <div className="thongtinchung">
                <div className="titlethongtinchung">
                    <span>Thông tin chung</span>
                </div>
                <div className="boxThongtinchung">
                    <div className="boxthongtin">
                        <div className="box">
                            <div className="icon">
                                <SlBadge />
                            </div>
                            <div className="ctthongtintd">
                                <span className="tenthongtin">Cấp bậc</span>
                                <span className="ctthongtin">{job.jobPositionName}</span>
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
                    <div className="boxthongtin">
                        <div className="box">
                            <div className="icon">
                                <PiBagSimpleFill />
                            </div>
                            <div className="ctthongtintd">
                                <span className="tenthongtin">Hình thức làm việc</span>
                                <span className="ctthongtin">{job.employmentType}</span>
                            </div>
                        </div>
                    </div>
                    <div className="boxthongtin">
                        <div className="box">
                            <div className="icon">
                                <FaUser />
                            </div>
                            <div className="ctthongtintd">
                                <span className="tenthongtin">Giới tính</span>
                                <span className="ctthongtin">{job.gender}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThongTinChung;