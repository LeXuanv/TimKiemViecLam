import MainLayout from "../../mainLayout";
import SearchCongViec from "../searchCongViec";
import './chitietcv.scss'
import ChiTietTuyenDung from "./chitiettuyendung";
import CongTyCongViec from "./congtycongviec";
import ThongTinChung from "./thongtinchung";
import CongViecUngTuyen from "./ungtuyencongviec";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const ChiTietCongViec = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);

    useEffect(() => {
        const fetchJobDetail = async () => {
            try {
                const response = await axios.get(`/user/job-vacancy/show/${id}`);
                setJob(response.data);
            } catch (error) {
                console.error("Error fetching job details:", error);
            }
        };
        fetchJobDetail();
    }, [id]);
    
    return(
        
        <MainLayout>
            {/* <SearchCongViec/> */}
            <div className="detailFull">
                <div className="detail">
                    <div className="nua1">
                        <CongViecUngTuyen job = {job} />
                        <ChiTietTuyenDung job = {job}/>
                    </div>
                    <div className="nua2">
                        <CongTyCongViec job = {job}/>
                        <ThongTinChung job = {job}/>
                    </div>
                </div>
            </div>  
        </MainLayout>
    )
}

export default ChiTietCongViec;