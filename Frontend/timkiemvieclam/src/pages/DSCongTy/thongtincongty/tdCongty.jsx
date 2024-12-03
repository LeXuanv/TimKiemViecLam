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
                    {/* <form id="frm-search-job">
                        <div className="group-search">
                            <div className="item">
                                <input className="form-input" placeholder="Nhập thông tin việc làm"/>
                            </div>
                             <div className="search-tinh">
                                <div className="icon">
                                    <FaMapMarkerAlt />
                                </div>
                                <div className="select-city">
                                    <select name="city" id="city">
                                        <option value>Tất cả các tỉnh</option>
                                        <option value="1">Ha noi</option>
                                        <option value="2">TP Ho Chi Minh</option>
                                    </select>
                                </div>
                            </div> 
                            <div className="search-nganhnghe">
                                <div className="icon">
                                    <PiBagSimpleFill />
                                </div>
                                <div className="select-nghe">
                                    <select name="nghe" id="nghe">
                                        <option value>Tất cả các ngành nghề</option>
                                        <option value="cntt">cntt</option>
                                        <option value="mkt">mkt</option>
                                    </select>
                                </div>
                            </div>
                            <div className="button-search">
                                <button>Tìm kiếm</button>
                            </div>
                        </div>
                    </form> */}
                    <div className="ttTuyendung">
                        {/* <Link to={PATH_PAGE.chitietcongviec} className="link-deital">
                            <div className="box-cv">
                                <div className="box">
                                    <div className="img">
                                        <img src="https://my.archdaily.net/users/custom_avatars/007/454/945/original/ho.jpg?1675400346"/>
                                    </div>
                                    <div className="infoCty">
                                        <div className="tenViec">
                                            <span>Thực tập sinh Laravel</span>
                                        </div>
                                        <div className="tenCty">
                                            <span>Công ty TNHH Gol</span>
                                        </div>
                                        <div className="tt-ct">
                                            <div className="luong">
                                                <span>Từ 20 - 25 triệu</span>
                                            </div>
                                            <div className="diadiem">
                                                <span>Hà Nội</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link> */}
                        {jobs.length > 0 ? (
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