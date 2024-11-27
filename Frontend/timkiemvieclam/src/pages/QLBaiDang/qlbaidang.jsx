import MainLayout from "../mainLayout";
import GioiThieuCongTyAd from "./gthieuCtyAd";
import HeaderCtyAd from "./headerCtyAd";
import ModalCtBaiDang from "./modalChitietbaidang";
import "./qlbaidang.scss";
import TuyenDungCongtyAd from "./tdCongtyAd";
import LienHeCongTyAd from "./ttLienheAd";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const QlBaiDang = () => {


    const token = localStorage.getItem('authToken');
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [modal, setModal] = useState(false);
    const navigate = useNavigate(); 

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
    useEffect(() => {
        fetchAllJobs(); 
    }, [token]);
    

    const handleDeleteJob = async () => {

        try {
            const response = await axios.delete(`/company/job-vacancy/destroy/${selectedJob.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            alert('Xóa công việc thành công!');

            navigate('/qlcongty');

            window.location.reload();
        } catch (error) {
            console.error('Error deleting job:', error);
            alert('Có lỗi xảy ra khi xóa công việc!');
        }
    };

    return(
        <>
            <MainLayout>
                <div className="quanlybaidanng">
                    <HeaderCtyAd/>
                    <div className="hainuaa">
                        <div className="nua1">
                            <GioiThieuCongTyAd/>
                            <TuyenDungCongtyAd 
                                modal={modal} 
                                setModal={setModal}
                                jobs={jobs}
                                selectedJob={selectedJob}
                                setSelectedJob={setSelectedJob}
                                handleDeleteJob={handleDeleteJob}
                                token = {token}
                            />
                            


                        </div>
                        <div className="nua2">
                            <LienHeCongTyAd/>
                        </div>
                    </div>

                </div>
            </MainLayout>
        </>
    )
}

export default QlBaiDang;