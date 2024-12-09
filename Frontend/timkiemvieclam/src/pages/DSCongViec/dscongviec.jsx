import MainLayout from "../mainLayout";
import BoxCongViec from "./boxCongViec";
import SearchCongViec from "./searchCongViec";
import axios from "axios";
import "./congviec.scss";
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";


const DsCongViec = () => {
  
    const [jobs, setJobs] = useState([]); 
    const [isSearching, setIsSearching] = useState(false);
    const [jobTitle, setJobTitle] = useState("");
    const [province, setProvince] = useState(""); 
    const [category, setCategory] = useState(""); 
    const [provinces, setProvinces] = useState([]); 
    const [categories, setCategories] = useState([]); 
    const token = localStorage.getItem('authToken');
    const user =  localStorage.getItem("user");
    const navigate = useNavigate();
    const fetchData = async () => {
        try {
            const provinceResponse = await axios.get('/api/province');  
            const categoryResponse = await axios.get('/api/category');  
            setProvinces(provinceResponse.data);
            setCategories(categoryResponse.data);
        } catch (error) {
            console.error("Error fetching provinces or categories:", error);
        }
    };
    const fetchAllJobs = async () => {
        try {
            const response = await axios.get('/user/job-vacancy');
            setJobs(response.data);
        } catch (error) {
            console.error("Error fetching all jobs:", error);
        }
    };
    const handleSearch = async (jobTitle, categoryId, provinceId) => {
        setIsSearching(true);
    
        const searchParams = {
            searchTerm: jobTitle || undefined,
            categoryId: categoryId || undefined,
            provinceId: provinceId || undefined
        };
    
        try {
            const response = await axios.get('/user/job-vacancy/search', { params: searchParams });
    
            if (Array.isArray(response.data) && response.data.length === 0) {
                setJobs([]);
                console.log("Không có công việc nào được tìm thấy.");
            } else {
                setJobs(response.data);
            }
        } catch (error) {
            // console.error("Error fetching jobs:", error);
            fetchAllJobs();
        } finally {
            setIsSearching(false); 
        }
    };
    useEffect(() => {
        fetchAllJobs();
        fetchData();

    }, []);
    const handleDeleteJob = async (jobId) => {
        try {
            const response = await axios.delete(`/admin/job-vacancy/delete/${jobId}` , {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // alert('Xóa bài đăng thành công!');
            toast.success('Xóa bài đăng thành công!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            navigate("/")
            window.location.reload()   
        } catch (error) {
            console.error('Error deleting :', error);
            // alert('Có lỗi xảy ra khi xóa !');
            toast.error('Có lỗi xảy ra khi xóa!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }
    
    return (
        <div>
            
            <MainLayout>
            <div style={{background:"rgb(249 249 249)"}}>
                <SearchCongViec 
                    handleSearch={handleSearch} 
                    jobTitle={jobTitle} 
                    province={province} 
                    category={category} 
                    provinces={provinces} 
                    categories={categories}
                    setJobTitle={setJobTitle}
                    setProvince={setProvince}
                    setCategory={setCategory}   
                    
                />
                <BoxCongViec 
                    jobs={jobs}
                    isSearching={isSearching} 
                    user={user} 
                    handleDeleteJob={handleDeleteJob}
                />
            </div>
            </MainLayout>
        </div>
    );
}

export default DsCongViec;