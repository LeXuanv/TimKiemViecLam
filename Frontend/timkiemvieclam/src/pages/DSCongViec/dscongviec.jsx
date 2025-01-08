import MainLayout from "../mainLayout";
import BoxCongViec from "./boxCongViec";
import SearchCongViec from "./searchCongViec";
import PageCongViec from "./pageCongViec";
import BoxRecommendCongViec from "./boxRecommendCongViec";
import axios from "axios";
import "./congviec.scss";
import React, { useReducer, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";


const initialState = {
    jobs: [],
    recommendJob: [],
    dataUser: [], 
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
      case "SET_RECOMMEND_JOB":
        return {...state, recommendJob: action.payload };
      case "SET_DATA_USER":
        return {...state, dataUser: action.payload };
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
    const user = localStorage.getItem("user");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDataUser = async () => {
          try {
            const response = await axios.get("api/user/show", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            dispatch({ type: "SET_DATA_USER", payload: response.data });
    
          } catch (error) {
            console.error("Lỗi khi lấy dữ liệu:", error);
          }
        };
    
        fetchDataUser(); 
      }, []);
    console.log("data user ne", state.dataUser);
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

        // try {
        //     dispatch({ type: "SET_LOADING", payload: true });
        //     const response = await axios.get(`/user/job-vacancy/search`, {
        //         params: searchParams,
        //     });

        //     if (!response.data?.data?.length) {
        //         dispatch({ type: "SET_IS_SEARCHING", payload: true });
        //         dispatch({ type: "SET_JOBS", payload: [] });
        //         dispatch({ type: "SET_CURRENT_PAGE", payload: 1 });
        //         dispatch({ type: "SET_TOTAL_PAGES", payload: 1 });
        //     } else {
        //         dispatch({ type: "SET_IS_SEARCHING", payload: true });

        //         dispatch({ type: "SET_JOBS", payload: response.data.data });
        //         dispatch({ type: "SET_CURRENT_PAGE", payload: response.data.current_page });
        //         dispatch({ type: "SET_TOTAL_PAGES", payload: response.data.last_page });
        //     }
        // } catch (error) {
        //     fetchAllJobs();
        // } finally {
        //     dispatch({ type: "SET_IS_SEARCHING", payload: false });
        //     dispatch({ type: "SET_LOADING", payload: false });
        // }
        try {
            dispatch({ type: "SET_LOADING", payload: true });
            const response = await axios.get('/user/job-vacancy/search', { params: searchParams });
            dispatch({ type: "SET_IS_SEARCHING", payload: true });
            dispatch({ type: "SET_JOBS", payload: response.data.data });
            dispatch({ type: "SET_CURRENT_PAGE", payload: response.data.current_page });
            dispatch({ type: "SET_TOTAL_PAGES", payload: response.data.last_page });
            dispatch({ type: "SET_LOADING", payload: false });

        } catch (error) {
            console.error("Error fetching search results:", error);
            fetchAllJobs();
            dispatch({ type: "SET_LOADING", payload: false });
            dispatch({ type: "SET_IS_SEARCHING", payload: false });

        }
    };
    console.log("id ne ", state.dataUser.job_seeker_id)
    const fetchRecommendJob = async () => {
        if(user == 3){
            try {
                const response = await axios.get(`api/job-seeker/get-recommended-job/${state.dataUser.job_seeker_id}`, {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                });
                dispatch({ type: "SET_RECOMMEND_JOB", payload: response.data });
                console.log("oc oc")
              } catch (error) {
                console.error("Lỗi khi lấy dữ liệu:", error);
              }
        }
        
    }
    console.log("recommend truoc ne ", state.recommendJob)

    useEffect(() => {
        if (state.isSearching) {
            handleSearch(state.jobTitle, state.category,  state.province, state.currentPage);
        } else {
            fetchAllJobs(state.currentPage);
        }
        fetchRecommendJob();
        fetchData();
    }, [state.currentPage, state.dataUser]);

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
                <div style={{background: "rgb(249 249 249)"}}>
                    <SearchCongViec
                        state={state}
                        dispatch={dispatch}
                        handleSearch={handleSearch}


                    />
                    <div className="title-container">
                        <h1 className="title-with-line">Danh sách công việc</h1>
                    </div>
                    <BoxCongViec
                        state={state}
                        dispatch={dispatch}
                        handleDeleteJob={handleDeleteJob}
                    />
                    {/* <PageCongViec
                    // loading={loading}
                    // currentPage={currentPage}
                    // handlePageChange={handlePageChange}
                    // totalPages={totalPages}
                    state = {state}
                    dispatch = {dispatch}
                    handlePageChange={handlePageChange}

                /> */}

                    {state.jobs && state.jobs.length > 0 ? (
                        <PageCongViec
                            state={state}
                            dispatch={dispatch}
                            handlePageChange={handlePageChange}
                        />
                    ) : (
                        <p></p>
                    )}

                    {user == 3 ? (
                            <>
                                <div className="section-title">
                                    <div className="divider-line"></div>
                                    <h1 className="title-with-line">Gợi ý việc làm phù hợp</h1>
                                </div>
                                <BoxRecommendCongViec
                                    state={state}
                                    dispatch={dispatch}
                                />
                            </>
                        )
                        : ("")
                    }
                </div>


            </MainLayout>

        </div>
    );
}

export default DsCongViec;