import { FaMapMarkerAlt} from "react-icons/fa";
import { PiBagSimpleFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { PATH_PAGE } from "../../../utils/constant";
import axios from 'axios';

const TuyenDungCongty = ({
    jobs
}) => {
    const baseURL = axios.defaults.baseURL;

    return(
        <>
        <div className="tuyendungCty">
            <div className="bentrongtuyendung">
                <div className="tieudetd">
                    <span>Tuyển dụng</span>
                </div>
                <div className="search-tttuyendung">

                    <div className="ttTuyendung">
                        {jobs && jobs.length > 0 ? (
                            jobs.map((job) => (
                            // <Link key={job.id} to={`${PATH_PAGE.chitietcongviec}/${job.id}`} className="link-deital">
                            <Link key={job.id} to={PATH_PAGE.chitietcongviec.replace(':id', job.id)} className="link-deital">

                                <div className="box-cv">
                                <div className="box">
                                    <div className="img">
                                        <img src={`${baseURL}/storage/${job.companyLogo}`} />
                                    </div>
                                    <div className="infoCty">
                                    <div className="tenViec">
                                        <span>{job.title}</span>
                                    </div>
                                    <div className="tenCty">
                                        <span>{job.companyName}</span>
                                    </div>
                                    <div className="tt-ct">
                                        <div className="luong">
                                        <span>{job.salary}</span>
                                        </div>
                                        <div className="diadiem">
                                        <span>{job.provinceName}</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </Link>
                            ))
                        ) : (
                            <p>Không có công việc nào được tìm thấy.</p>
                        )}
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default TuyenDungCongty;