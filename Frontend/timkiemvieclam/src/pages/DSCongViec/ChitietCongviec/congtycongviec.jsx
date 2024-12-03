import { FaUserGroup } from "react-icons/fa6";
import { FaCube } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link} from "react-router-dom";
import { MdOutlineIosShare } from "react-icons/md";
import { PATH_PAGE } from "../../../utils/constant";

const CongTyCongViec = ({job, company}) =>{
    console.log(job)
    console.log(company)
    if (!job) return null;
    return(
        
            <div className="congtycongviec">
                <div className="chitietcongty">
                    <div className="congty">
                        <div className="anhCongty">
                            <img src={`http://localhost:8000/storage/${company.logo}`} />
                        </div>
                        <div className="tencongty">
                            <span>{job.companyName}</span>
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
                            <span>{job.categoryName}</span>
                        </div>
                    </div>
                    <div className="box-chitiet">
                        <div className="icon-chitiet">
                            <FaMapMarkerAlt />
                            <div className="tentitle">
                                <span>Địa chỉ:</span>
                            </div>
                        </div>
                        <div className="ttchitiet">
                            <span>{job.address}</span>
                        </div>
                    </div>
                    <div className="xemttcty">
                        <div className="btn-xemtt">
                            <Link 
                                key={job.companyId} 
                                to={PATH_PAGE.chitietcongty.replace(':id', job.companyId)} 
                                className="link-deital"
                            >
                                Xem thông tin
                            </Link>
                            <MdOutlineIosShare />

                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default CongTyCongViec;