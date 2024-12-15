import MainLayout from "../mainLayout";
import BoxCongViec from "./boxCongViec";
import SearchCongViec from "./searchCongViec";
import PageCongViec from "./pageCongViec";
import axios from "axios";
import "./congviec.scss";
import React, { useReducer, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";


const initialState = {
    jobs: [],
    isSearching: false,
    jobTitle: "",
    province: "",
    category: "",
    provinces: [],
    categories: [],
    currentPage: 1,
    totalPages: 1,
    loading: false,
  };
  
  function reducer(state, action) {
    switch (action.type) {
      case "SET_JOBS":
        return { ...state, jobs: action.payload };
      case "SET_IS_SEARCHING":
        return { ...state, isSearching: action.payload };
      case "SET_JOB_TITLE":
        return { ...state, jobTitle: action.payload };
      case "SET_PROVINCE":
        return { ...state, province: action.payload };
      case "SET_CATEGORY":
        return { ...state, category: action.payload };
      case "SET_PROVINCES":
        return { ...state, provinces: action.payload };
      case "SET_CATEGORIES":
        return { ...state, categories: action.payload };
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
  

const DsCongViec = () => {
  
    const [state, dispatch] = useReducer(reducer, initialState);

    const token = localStorage.getItem("authToken");
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const provinceResponse = await axios.get("/api/province");
            const categoryResponse = await axios.get("/api/category");

            dispatch({ type: "SET_PROVINCES", payload: provinceResponse.data });
            dispatch({ type: "SET_CATEGORIES", payload: categoryResponse.data });
        } catch (error) {
            console.error("Error fetching provinces or categories:", error);
        }
    };

    const fetchAllJobs = async (page) => {
        try {
            dispatch({ type: "SET_LOADING", payload: true });

            const response = await axios.get(`/user/job-vacancy?page=${page}`);
            dispatch({ type: "SET_JOBS", payload: response.data.data });
            dispatch({ type: "SET_CURRENT_PAGE", payload: response.data.current_page });
            dispatch({ type: "SET_TOTAL_PAGES", payload: response.data.last_page });
        } catch (error) {
            console.error("Error fetching all jobs:", error);
        } finally {
            dispatch({ type: "SET_LOADING", payload: false });
        }
    };

    const handleSearch = async (jobTitle, categoryId, provinceId, page = 1) => {
        dispatch({ type: "SET_IS_SEARCHING", payload: true });

        const searchParams = {
            searchTerm: jobTitle || undefined,
            categoryId: categoryId || undefined,
            provinceId: provinceId || undefined,
            page: page,
        };

        try {
            dispatch({ type: "SET_LOADING", payload: true });
            const response = await axios.get(`/user/job-vacancy/search`, {
                params: searchParams,
            });

            if (!response.data?.data?.length) {
                dispatch({ type: "SET_JOBS", payload: [] });
                dispatch({ type: "SET_CURRENT_PAGE", payload: 1 });
                dispatch({ type: "SET_TOTAL_PAGES", payload: 1 });
            } else {
                dispatch({ type: "SET_JOBS", payload: response.data.data });
                dispatch({ type: "SET_CURRENT_PAGE", payload: response.data.current_page });
                dispatch({ type: "SET_TOTAL_PAGES", payload: response.data.last_page });
            }
        } catch (error) {
            fetchAllJobs();
        } finally {
            dispatch({ type: "SET_IS_SEARCHING", payload: false });
            dispatch({ type: "SET_LOADING", payload: false });
        }
    };

    useEffect(() => {
        fetchAllJobs(state.currentPage);
        fetchData();
    }, [state.currentPage]);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= state.totalPages) {
        dispatch({ type: "SET_CURRENT_PAGE", payload: page });
        }
    };

    const handleDeleteJob = async (jobId) => {
        try {
        await axios.delete(`/admin/job-vacancy/delete/${jobId}`, {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        });
        toast.success("Xóa bài đăng thành công!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Bounce,
        });
        navigate("/");
        window.location.reload();
        } catch (error) {
        console.error("Error deleting:", error);
        toast.error("Có lỗi xảy ra khi xóa!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Bounce,
        });
        }
    };
    
    return (
        <div>
            
            <MainLayout>
            <div style={{background:"rgb(249 249 249)"}}>
                <SearchCongViec 
                    state = {state}
                    dispatch = {dispatch}
                    handleSearch={handleSearch}
                                            
                    
                />
                <BoxCongViec 

                    
                    state = {state}
                    dispatch = {dispatch}
                    handleDeleteJob={handleDeleteJob}
                />
                <PageCongViec
                    // loading={loading}
                    // currentPage={currentPage}
                    // handlePageChange={handlePageChange}
                    // totalPages={totalPages}
                    state = {state}
                    dispatch = {dispatch}
                    handlePageChange={handlePageChange}

                />
            </div>
            </MainLayout>
        </div>
    );
}

export default DsCongViec;