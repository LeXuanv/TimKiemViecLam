import { PiBagSimpleFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { PATH_PAGE } from "../../utils/constant";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import ModalCtBaiDang from "./modalChitietbaidang";

/*
const TuyenDungCongtyAd = ({modal, setModal}) => {
    return(
        
            <div className="tuyendungCty">
                <div className="bentrongtuyendung">
                    <div className="tieudetd">
                        <span>Tuyển dụng</span>
                        <Link to={PATH_PAGE.dangbai}>
                            <p>Đăng bài tuyển dụng</p>
                        </Link>
                        
                    </div>
                    <div className="search-tttuyendung">
                        <form id="frm-search-job">
                            <div className="group-search">
                                <div className="item">
                                    <input className="form-input" placeholder="Nhập thông tin việc làm"/>
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
                        </form>
                        <div className="ttTuyendung">
                            <div onClick={() => setModal(!modal)} className="link-deital">
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
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        
    )
}

export default TuyenDungCongtyAd;

*/



const TuyenDungCongtyAd = ({ modal, setModal }) => {
    const token = localStorage.getItem('authToken');
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                const response = await axios.get('/company/job-vacancy/get-publish', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                
                console.log("cascasc" , response.data);

                setJobs(response.data);  
            } catch (error) {
                console.error("Error fetching all jobs:", error);  
            }
        };
    
        fetchAllJobs(); 
    }, [token]); 
    const handleJobClick = (job) => {
        setSelectedJob(job);  // Set selected job
        setModal(true);       // Open modal
    };
    console.log("dataadfadf job0:" , jobs)
    return(
        
            <div className="tuyendungCty">
                <div className="bentrongtuyendung">
                    <div className="tieudetd">
                        <span>Tuyển dụng</span>
                        <Link to={PATH_PAGE.dangbai}>
                            <p>Đăng bài tuyển dụng</p>
                        </Link>
                        
                    </div>
                    <div className="search-tttuyendung">
                        {/* <form id="frm-search-job">
                            <div className="group-search">
                                <div className="item">
                                    <input className="form-input" placeholder="Nhập thông tin việc làm"/>
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
                            {jobs.length > 0 ? (
                                jobs.map((job) => (
                                    <div key={job.id} onClick={() => handleJobClick(job)} className="link-deital">
                                        <div className="box-cv">
                                            <div className="box">
                                                <div className="img">
                                                    <img src={job.companyLogo } alt={job.title} />
                                                </div>
                                                <div className="infoCty">
                                                    <div className="tenViec">
                                                        <span>{job.title }</span>
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
                                    </div>
                                ))
                            ) : (
                                <p>Không có công việc nào được tìm thấy.</p>
                            )}
                        </div>

                    </div>
                    
                </div>
                {modal && selectedJob && (
                    <ModalCtBaiDang
                        modal={modal}
                        setModal={setModal}
                        job={selectedJob}
                        handleClickOutside={() => setModal(false)}
                    />
                )}
                
            </div>
        
    )
}

export default TuyenDungCongtyAd;
