import MainLayout from "../mainLayout";
import ListCty from "./listCty";
import SearchCty from "./searchCty";
import "./dscty.scss";
import React, { useState, useEffect, useReducer } from 'react';
import axios from "axios";
import PageCongViec from "../DSCongViec/pageCongViec";

const initialState = {
    companies: [],
    isSearching: false,
    companyName: "",
    provinces: [],
    currentPage: 1,
    totalPages: 1,
    loading: false,
};

function reducer(state, action) {
    switch(action.type){
        case "SET_COMPANIES":
            return {...state, companies: action.payload};
        case "SET_COMPANY_NAME":
            return {...state, companyName: action.payload};
        case "SET_IS_SEARCHING":
            return {...state, isSearching: action.payload};
        case "SET_PROVINCES":
            return { ...state, provinces: action.payload };
        case "SET_CURRENT_PAGE":
            return { ...state, currentPage: action.payload };
        case "SET_TOTAL_PAGES":
            return { ...state, totalPages: action.payload };
        case "SET_LOADING":
            return { ...state, loading: action.payload };
        default:
            return state;
    }
}
const DsCongTy = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const fetchAllCompanies = async (page) => {
        try {
            dispatch({ type: "SET_LOADING", payload: true });

            const response = await axios.get(`/api/company/get-all?page=${page}`);
            dispatch({ type: "SET_COMPANIES", payload: response.data.data });
            dispatch({ type: "SET_CURRENT_PAGE", payload: response.data.current_page });
            dispatch({ type: "SET_TOTAL_PAGES", payload: response.data.last_page });
            dispatch({ type: "SET_LOADING", payload: false });

        } catch (error) {
            console.error("Error fetching all companies:", error);
            dispatch({ type: "SET_LOADING", payload: false });

        } finally {
            dispatch({ type: "SET_LOADING", payload: false });
        }
    };
    const fetchProvinces = async () => {
        try {
            const response = await axios.get("/api/province ");
            dispatch({type: "SET_PROVINCES", payload: response.data})
        } catch (error) {
            console.error("Error fetching provinces:", error);
        }
    };
    useEffect(() => {
        if (state.isSearching) {
            handleSearch(state.companyName, state.currentPage);
        } else {
            fetchAllCompanies(state.currentPage);
        }
        fetchProvinces();

    }, [state.currentPage]);
    const handlePageChange = (page) => {
        if (page >= 1 && page <= state.totalPages) {
        dispatch({ type: "SET_CURRENT_PAGE", payload: page });
        }
    };
    const handleSearch = async (searchTerm, page = 1) => {
        const searchParams = {
            searchTerm: searchTerm || undefined,
            page: page,
        };

        try {
            const response = await axios.get('/api/company/search-company', { params: searchParams });
            dispatch({ type: "SET_IS_SEARCHING", payload: true });
            dispatch({ type: "SET_COMPANIES", payload: response.data.data });
            dispatch({ type: "SET_CURRENT_PAGE", payload: response.data.current_page });
            dispatch({ type: "SET_TOTAL_PAGES", payload: response.data.last_page });
        } catch (error) {
            console.error("Error fetching search results:", error);
            dispatch({ type: "SET_LOADING", payload: false });
            dispatch({ type: "SET_IS_SEARCHING", payload: false });

        }
    };
    const getProvinceName = (provinceCode) => {
        const province = state.provinces.find((p) => p.code === provinceCode);
        return province ? province.name : "Không xác định";
    };
    return(
        <>
        <MainLayout>
            <div S style={{background:"rgb(249 249 249)"}}>
                <SearchCty 

                    handleSearch={handleSearch}
                    state={state}
                    dispatch={dispatch}
                />
                <ListCty 
                    getProvinceName={getProvinceName}  
                    state={state}
                    dispatch={dispatch}
                />
                <PageCongViec

                    state = {state}
                    dispatch = {dispatch}
                    handlePageChange={handlePageChange}
                />
                
            </div>
        </MainLayout>
        </>
    )
}

export default DsCongTy;