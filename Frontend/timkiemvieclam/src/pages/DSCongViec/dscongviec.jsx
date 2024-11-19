import MainLayout from "../mainLayout";
import BoxCongViec from "./boxCongViec";
import SearchCongViec from "./searchCongViec";
import axios from "axios";
import "./congviec.scss";
import React, { useState, useEffect } from 'react';


const DsCongViec = () => {
  
    const [jobs, setJobs] = useState([]); 
    const [isSearching, setIsSearching] = useState(false);
    const [jobTitle, setJobTitle] = useState("");
    const [province, setProvince] = useState(""); 
    const [category, setCategory] = useState(""); 
    const [provinces, setProvinces] = useState([]); 
    const [categories, setCategories] = useState([]); 

    useEffect(() => {
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
        fetchData();
    }, []);

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
            console.error("Error fetching jobs:", error);
        } finally {
            setIsSearching(false); 
        }
    };
    
    
    
    
    useEffect(() => {
        fetchAllJobs();
    }, []);

    return (
        <div>
            
            <MainLayout>
            <div style={{background:"rgb(249 249 249)"}}>
                <SearchCongViec 
                    onSearch={handleSearch} 
                    jobTitle={jobTitle} 
                    province={province} 
                    category={category} 
                    provinces={provinces} 
                    categories={categories}
                    setJobTitle={setJobTitle}
                    setProvince={setProvince}
                    setCategory={setCategory}   
                    />
                <BoxCongViec jobs={jobs} isSearching={isSearching} />
            </div>
            </MainLayout>
        </div>
    );
}

export default DsCongViec;