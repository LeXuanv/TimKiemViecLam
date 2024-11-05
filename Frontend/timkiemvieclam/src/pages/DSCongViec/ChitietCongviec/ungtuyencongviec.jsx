import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaClock } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CgSandClock } from "react-icons/cg";

/*
const CongViecUngTuyen = () =>{
    return(
        <>
            <div className="congviecungtuyen">
                <div className="innerCVungtuyen">
                    <div className="tencongviec">
                        <span>Thực tập sinh laravel</span>
                    </div>
                    <div className="thongtin">
                        <div className="boxthongtin">
                            <div className="box">
                                <div className="icon">
                                    <RiMoneyDollarCircleLine />
                                </div>
                                <div className="ctthongtintd">
                                    <span className="tenthongtin">Mức Lương</span>
                                    <span className="ctthongtin">20 - 50 triệu</span>
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
                                    <span className="ctthongtin">Hà nội</span>
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
                                    <span className="ctthongtin">Không yêu cầu kinh nghiệm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hannophs">
                        <div className="chitethannop">
                            <div className="innerHn">
                                <FaClock />
                                <div className="cltt">
                                    <span>Hạn nộp hồ sơ:</span>
                                    <span>20/11/2024</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-ungtuyen">
                        <div className="ut">
                            <div className="icon-ungtuyen">
                                <FaPaperPlane />
                            </div>
                            <span>Ứng tuyển</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CongViecUngTuyen;

*/


const CongViecUngTuyen = ({job}) =>{
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
                                    <span className="ctthongtin">Không yêu cầu kinh nghiệm</span>
                                </div>
                            </div>
                        </div>
                                           
                    </div>
                    <div className="btn-ungtuyen">
                            <div className="ut">
                                <div className="icon-ungtuyen">
                                    <FaPaperPlane />
                                </div>
                                <span>Ứng tuyển</span>
                            </div>
                        </div> 
                </div>
            </div>
        </>
    )
}

export default CongViecUngTuyen;


