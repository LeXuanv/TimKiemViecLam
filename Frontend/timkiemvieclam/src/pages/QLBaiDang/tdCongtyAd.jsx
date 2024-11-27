import { PiBagSimpleFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { PATH_PAGE } from "../../utils/constant";
import React, { useState, useEffect } from 'react';
import ModalCtBaiDang from "./modalChitietbaidang";



/*

const TuyenDungCongtyAd = ({ 
        modal, 
        setModal,
        jobs,
        setSelectedJob,
        selectedJob
    }) => {
   
    const handleJobClick = (job) => {
        setSelectedJob(job);  
        setModal(true);       
    };
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

*/

const TuyenDungCongtyAd = ({ 
    modal, 
    setModal,
    jobs,
    setSelectedJob,
    selectedJob,
    handleDeleteJob,
    token
}) => {

const handleJobClick = (job) => {
    setSelectedJob(job);  
    setModal(true);       
};
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
                    selectedJob={selectedJob}
                    handleClickOutside={() => setModal(false)}
                    handleDeleteJob={handleDeleteJob}
                    token={token}
                />
            )}
            
        </div>
    
)
}

export default TuyenDungCongtyAd;