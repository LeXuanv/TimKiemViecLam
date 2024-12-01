import MainLayout from "../mainLayout";
import ListCty from "./listCty";
import SearchCty from "./searchCty";
import "./dscty.scss";
import React, { useState, useEffect } from 'react';
import axios from "axios";


const DsCongTy = () => {
    const [companies, setCompanies] = useState([]); 
    const [provinces, setProvinces] = useState([]);

    const fetchAllCompanies = async () => {
        try {
            const response = await axios.get('/api/company/get-all');
            setCompanies(response.data);
        } catch (error) {
            console.error("Error fetching all companies:", error);
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
        fetchAllCompanies();
        fetchProvinces();

    }, []);
    const getProvinceName = (provinceCode) => {
        const province = provinces.find((p) => p.code === provinceCode);
        return province ? province.name : "Không xác định";
    };
    return(
        <>
        <MainLayout>
            <div style={{background:"rgb(249 249 249)"}}>
                <SearchCty />
                <ListCty 
                    companies={companies}
                    getProvinceName={getProvinceName}  
                />
                
            </div>
        </MainLayout>
        </>
    )
}

export default DsCongTy;