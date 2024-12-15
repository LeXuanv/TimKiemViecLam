import React, { useEffect, useReducer } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Bounce, toast } from "react-toastify";
import MainLayout from "../mainLayout";
import GioiThieuCongTyAd from "./gthieuCtyAd";
import HeaderCtyAd from "./headerCtyAd";
import TuyenDungCongtyAd from "./tdCongtyAd";
import LienHeCongTyAd from "./ttLienheAd";
import PageCongViec from "../DSCongViec/pageCongViec";
import "./qlbaidang.scss";

const actionTypes = {
    SET_JOBS: 'SET_JOBS',
    SET_SELECTED_JOB: 'SET_SELECTED_JOB',
    SET_MODAL: 'SET_MODAL',
    SET_DATA_USER: 'SET_DATA_USER',
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
    SET_TOTAL_PAGES: 'SET_TOTAL_PAGES',
    SET_LOADING: 'SET_LOADING',
};

const initialState = {
    jobs: [],
    selectedJob: null,
    modal: false,
    dataUser: "",
    currentPage: 1,
    totalPages: 1,
    loading: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_JOBS:
            return { ...state, jobs: action.payload };
        case actionTypes.SET_SELECTED_JOB:
            return { ...state, selectedJob: action.payload };
        case actionTypes.SET_MODAL:
            return { ...state, modal: action.payload };
        case actionTypes.SET_DATA_USER:
            return { ...state, dataUser: action.payload };
        case actionTypes.SET_CURRENT_PAGE:
            return { ...state, currentPage: action.payload };
        case actionTypes.SET_TOTAL_PAGES:
            return { ...state, totalPages: action.payload };
        case actionTypes.SET_LOADING:
            return { ...state, loading: action.payload };
        default:
            return state;
    }
};
const QlBaiDang = () => {
    const token = localStorage.getItem('authToken');
    const navigate = useNavigate();

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchDataUser = async () => {
            try {
                const response = await axios.get("api/user/show", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                dispatch({ type: actionTypes.SET_DATA_USER, payload: response.data });
            } catch (error) {
                console.error("Lỗi khi lấy dữ liệu:", error);
            }
        };

        fetchDataUser();
    }, [token]);

    const fetchAllJobs = async (page) => {
        dispatch({ type: actionTypes.SET_LOADING, payload: true });

        try {
            const response = await axios.get(`/company/job-vacancy/get-publish?page=${page}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            dispatch({ type: actionTypes.SET_JOBS, payload: response.data.data });
            dispatch({ type: actionTypes.SET_CURRENT_PAGE, payload: response.data.current_page });
            dispatch({ type: actionTypes.SET_TOTAL_PAGES, payload: response.data.last_page });
            dispatch({ type: actionTypes.SET_LOADING, payload: false });
        } catch (error) {
            console.error("Error fetching all jobs:", error);
        }
    };

    useEffect(() => {
        fetchAllJobs(state.currentPage);
    }, [token, state.currentPage]);

    const handleDeleteJob = async () => {
        try {
            await axios.delete(`/company/job-vacancy/destroy/${state.selectedJob.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            toast.success('Xóa công việc thành công!', {
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

            navigate('/qlcongty');
            window.location.reload();
        } catch (error) {
            console.error('Error deleting job:', error);
            toast.error('Có lỗi xảy ra khi xóa công việc!', {
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
    };

    const handlePageChange = (page) => {
        if (page >= 1 && page <= state.totalPages) {
            dispatch({ type: actionTypes.SET_CURRENT_PAGE, payload: page });
        }
    };

    return (
        <MainLayout>
            <div className="quanlybaidanng">
                <HeaderCtyAd dataUser={state.dataUser} />
                <div className="hainuaa">
                    <div className="nua1">
                        <GioiThieuCongTyAd dataUser={state.dataUser} />
                        <TuyenDungCongtyAd
                            modal={state.modal}
                            setModal={(modal) => dispatch({ type: actionTypes.SET_MODAL, payload: modal })}
                            jobs={state.jobs}
                            selectedJob={state.selectedJob}
                            setSelectedJob={(job) => dispatch({ type: actionTypes.SET_SELECTED_JOB, payload: job })}
                            handleDeleteJob={handleDeleteJob}
                            token={token}
                        />
                        <PageCongViec
                            state = {state}
                            dispatch = {dispatch}
                            handlePageChange={handlePageChange}
                        />
                    </div>
                    <div className="nua2">
                        <LienHeCongTyAd company={state.dataUser} />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default QlBaiDang;
