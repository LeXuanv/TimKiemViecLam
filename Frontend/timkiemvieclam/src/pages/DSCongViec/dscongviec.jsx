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

    
    const handleSearch = async (jobTitle) => {
        setIsSearching(true);
    
        try {
            const response = await axios.get(jobTitle ? '/user/job-vacancy/search' : '/user/job-vacancy', {
                params: jobTitle ? { searchTerm: jobTitle } : {}
            });
    
            if (Array.isArray(response.data) && response.data.length === 0) {
                setJobs([]);
                console.log("Không có công việc nào được tìm thấy.");
            } else {
                setJobs(response.data);
            }
        } catch (error) {
            console.error("Error fetchinasfasfg jobs:", error);
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