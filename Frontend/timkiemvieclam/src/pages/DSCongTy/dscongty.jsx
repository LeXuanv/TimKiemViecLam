import MainLayout from "../mainLayout";
import ListCty from "./listCty";
import SearchCty from "./searchCty";
import "./dscty.scss";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import PageCongViec from "../DSCongViec/pageCongViec";


const DsCongTy = () => {
    const [companies, setCompanies] = useState([]); 
    const [provinces, setProvinces] = useState([]);
    const [companyName, setCompanyName] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchAllCompanies = async (page) => {
        try {
            setLoading(true);

            const response = await axios.get(`/api/company/get-all?page=${page}`);
            setCompanies(response.data.data);
            setCurrentPage(response.data.current_page);
            setTotalPages(response.data.last_page);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching all companies:", error);
            setLoading(false);

        }
    };
    const fetchProvinces = async () => {
        try {
            const response = await axios.get("/api/province ");
            setProvinces(response.data);
        } catch (error) {
            console.error("Error fetching provinces:", error);
        }
    };
    useEffect(() => {
        fetchAllCompanies(currentPage);
        fetchProvinces();

    }, [currentPage]);
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
          setCurrentPage(page);
        }
      };
      const handleSearch = async (searchTerm, page = 1) => {
        const searchParams = {
            searchTerm: searchTerm || undefined,
            page: page,
        };
    
        try {
            const response = await axios.get('/api/company/search-company', { params: searchParams });
            setCompanies(response.data.data);
            setCurrentPage(response.data.current_page);
            setTotalPages(response.data.last_page);
        } catch (error) {
            console.error("Error fetching search results:", error);
            setCompanies([]);
        }
    };
    const getProvinceName = (provinceCode) => {
        const province = provinces.find((p) => p.code === provinceCode);
        return province ? province.name : "Không xác định";
    };
    return(
        <>
        <MainLayout>
            <div S style={{background:"rgb(249 249 249)"}}>
                <SearchCty 
                    handleSearch={handleSearch}
                    companyName={companyName}
                    setCompanyName={setCompanyName}
                />
                <ListCty 
                    companies={companies}
                    getProvinceName={getProvinceName}  
                />
                <PageCongViec
                    loading={loading}
                    currentPage={currentPage}
                    handlePageChange={handlePageChange}
                    totalPages={totalPages}
                />
                
            </div>
        </MainLayout>
        </>
    )
}

export default DsCongTy;