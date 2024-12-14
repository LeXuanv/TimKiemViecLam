import MainLayout from "../../mainLayout";
import GioiThieuCongTy from "./gthieuCty";
import HeaderCty from "./headerCty";
import TuyenDungCongty from "./tdCongty";
import "./ttctychitiet.scss"
import LienHeCongTy from "./ttLienhe";
import { useParams } from "react-router-dom";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PageCongViec from "../../DSCongViec/pageCongViec";

const ChiTietCongty = () => {
    const [company, setCompany] = useState("");
    const {id} = useParams();
    const [provinces, setProvinces] = useState("");
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('authToken');
    const fetchCompanyDetail = async () => {
        try {
            const response = await axios.get(`/api/company/show/${id}`);
            setCompany(response.data);
        } catch (error) {
            console.error("Error fetching company details:", error);
        }
    };
    useEffect(() => {
        fetchCompanyDetail();
    }, [id]);
    const fetchAllJobs = async (page) => {
        try {
            const response = await axios.get(`/user/job-vacancy/get-publish/${id}?page=${page}`, {
            });
            console.log("cascasc" , response.data);
            setJobs(response.data.data);
            setCurrentPage(response.data.current_page);
            setTotalPages(response.data.last_page);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching all jobs:", error);  
        }
    };
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
          setCurrentPage(page);
        }
      };
    useEffect(() => {
        fetchAllJobs(currentPage); 
    }, [currentPage]);
    // const fetchProvinces = async () => {
    //     try {
    //         const response = await axios.get("/api/province");
    //         setProvinces(response.data);
    //     } catch (error) {
    //         console.error("Error fetching provinces:", error);
    //     }
    // };
    // const fetchDistricts = async () => {
    //     try {
    //         const response = await axios.get("/api/district");
    //         setDistricts(response.data);
    //     } catch (error) {
    //         console.error("Error fetching districts:", error);
    //     }
    // };
    // const fetchWards = async () => {
    //     try {
    //         const response = await axios.get("/api/ward");
    //         setWards(response.data);
    //     } catch (error) {
    //         console.error("Error fetching wards:", error);
    //     }
    // };
    // useEffect(() => {
    //     fetchProvinces();
    //     fetchDistricts();
    //     fetchWards();

    // }, []);
    // const getProvinceName = (province_code) => {
    //     if (!Array.isArray(provinces)) {
    //         console.error("Provinces is not an array:", provinces);
    //         return "Không xác định";
    //     }
    //     const province = provinces.find((p) => p.code === province_code);
    //     return province ? province.name : "Không xác định";
    // };
    // const getDistrictName = (district_code) => {
    //     const district = districts.find((d) => d.code === district_code);
    //     return district? district.name : "Không xác định";
    // };
    // const getWardName = (ward_code) => {
    //     const ward = wards.find((w) => w.code === ward_code);
    //     return ward? ward.name : "Không xác định";
    // };
  
    return(
        <MainLayout>
            <HeaderCty company = {company}/>
            <div className="hainua">
                <div className="nua1">
                    <GioiThieuCongTy company = {company}/>
                    <TuyenDungCongty jobs = {jobs}/>
                    <PageCongViec
                        loading={loading}
                        currentPage={currentPage}
                        handlePageChange={handlePageChange}
                        totalPages={totalPages}
                    />
                </div>
                <div className="nua2">
                    <LienHeCongTy 
                        company = {company}
                        // getProvinceName = {getProvinceName}
                        // getDistrictName = {getDistrictName}
                        // getWardName = {getWardName}
                    />
                </div>
            </div>
            
        </MainLayout>
    )
}

export default ChiTietCongty;