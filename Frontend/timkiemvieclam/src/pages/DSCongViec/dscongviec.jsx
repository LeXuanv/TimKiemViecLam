import MainLayout from "../mainLayout";
import BoxCongViec from "./boxCongViec";
import SearchCongViec from "./searchCongViec";
import axios from "axios";
import "./congviec.scss";
import React, { useState, useEffect } from 'react';


const DsCongViec = () => {
    // return(
    //     <>
        // <MainLayout>
        //     <div style={{background:"rgb(249 249 249)"}}>
        //         <SearchCongViec/>
        //         <BoxCongViec/>
        //     </div>
        // </MainLayout>
    //     </>
    // )
    const [jobs, setJobs] = useState([]); 
    const [isSearching, setIsSearching] = useState(false);

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
            searchTerm: jobTitle || undefined,  // Tìm kiếm theo tiêu đề công việc
            categoryId: categoryId || undefined,  // Tìm kiếm theo ngành nghề
            provinceId: provinceId || undefined  // Tìm kiếm theo tỉnh thành
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
                <SearchCongViec onSearch={handleSearch} />
                <BoxCongViec jobs={jobs} isSearching={isSearching} />
            </div>
            </MainLayout>
        </div>
    );
}

export default DsCongViec;