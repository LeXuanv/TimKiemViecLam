import MainLayout from "../../mainLayout";
import GioiThieuCongTy from "./gthieuCty";
import HeaderCty from "./headerCty";
import TuyenDungCongty from "./tdCongty";
import "./ttctychitiet.scss";
import LienHeCongTy from "./ttLienhe";
import { useParams } from "react-router-dom";
import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import PageCongViec from "../../DSCongViec/pageCongViec";

// Initial state for the reducer
const initialState = {
    company: "",
    jobs: [],
    currentPage: 1,
    totalPages: 1,
    loading: false,
};

// Reducer function
function reducer(state, action) {
    switch (action.type) {
        case "SET_COMPANY":
            return { ...state, company: action.payload };
        case "SET_JOBS":
            return { ...state, jobs: action.payload };
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

const ChiTietCongty = () => {
    const { id } = useParams();
    
    const [state, dispatch] = useReducer(reducer, initialState);

    // Fetch company details
    const fetchCompanyDetail = async () => {
        try {
            const response = await axios.get(`/api/company/show/${id}`);
            dispatch({ type: "SET_COMPANY", payload: response.data });
        } catch (error) {
            console.error("Error fetching company details:", error);
        }
    };

    useEffect(() => {
        fetchCompanyDetail();
    }, [id]);

    // Fetch all jobs for the company
    const fetchAllJobs = async (page) => {
        try {
            dispatch({ type: "SET_LOADING", payload: true });
            const response = await axios.get(`/user/job-vacancy/get-publish/${id}?page=${page}`);
            dispatch({ type: "SET_JOBS", payload: response.data.data });
            dispatch({ type: "SET_CURRENT_PAGE", payload: response.data.current_page });
            dispatch({ type: "SET_TOTAL_PAGES", payload: response.data.last_page });
            dispatch({ type: "SET_LOADING", payload: false });
        } catch (error) {
            console.error("Error fetching all jobs:", error);
            dispatch({ type: "SET_LOADING", payload: false });
        }
    };

    useEffect(() => {
        fetchAllJobs(state.currentPage);
    }, [state.currentPage]);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= state.totalPages) {
            dispatch({ type: "SET_CURRENT_PAGE", payload: page });
        }
    };

    return (
        <MainLayout>
            <HeaderCty company={state.company} />
            <div className="hainua">
                <div className="nua1">
                    <GioiThieuCongTy company={state.company} />
                    <TuyenDungCongty jobs={state.jobs} />
                    <PageCongViec
                       state = {state}
                       dispatch = {dispatch}
                       handlePageChange={handlePageChange}
                    />
                </div>
                <div className="nua2">
                    <LienHeCongTy 
                        company={state.company}
                    />
                </div>
            </div>
        </MainLayout>
    );
};

export default ChiTietCongty;
