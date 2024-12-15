import React, { useEffect, useReducer } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Bounce, toast } from "react-toastify";

import MainLayout from "../../mainLayout";
import ChiTietTuyenDung from "./chitiettuyendung";
import CongTyCongViec from "./congtycongviec";
import ThongTinChung from "./thongtinchung";
import CongViecUngTuyen from "./ungtuyencongviec";
import DanhDau from "./danhdau";
import UngTuyen from "./ungtuyen";

import './chitietcv.scss';

const showToast = (type, message) => {
  toast[type](message, {
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
};

const jobReducer = (state, action) => {
  switch (action.type) {
    case 'SET_JOB':
      return { ...state, job: action.payload.job, company: action.payload.company };
    case 'SET_APPLIED':
      return { ...state, hasApplied: action.payload };
    case 'SET_BOOKMARKED':
      return { ...state, hasBookmarked: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_BOOKMARK_LOADING':
      return { ...state, isLoadingOfBookmark: action.payload };
    default:
      return state;
  }
};

const ChiTietCongViec = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');
  const user = localStorage.getItem("user");

  // Using useReducer to manage the state
  const [state, dispatch] = useReducer(jobReducer, {
    job: null,
    company: null,
    hasApplied: false,
    hasBookmarked: false,
    isLoading: false,
    isLoadingOfBookmark: false,
  });

  const fetchJobDetails = async () => {
    try {
      const jobResponse = await axios.get(`/user/job-vacancy/show/${id}`);
      const companyResponse = await axios.get(`/api/company/show/${jobResponse.data.companyId}`);
      const applicationResponse = await axios.get(`/user/jobs/${jobResponse.data.id}/check-application`, {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      const bookmarkResponse = await axios.get(`/user/jobs/${jobResponse.data.id}/check-bookmark`, {
        headers: { 'Authorization': `Bearer ${token}` },
      });

      dispatch({
        type: 'SET_JOB',
        payload: {
          job: jobResponse.data,
          company: companyResponse.data
        }
      });
      dispatch({ type: 'SET_APPLIED', payload: applicationResponse.data.isApplied });
      dispatch({ type: 'SET_BOOKMARKED', payload: bookmarkResponse.data.isApplied });

    } catch (error) {
      console.error("Error fetching job details:", error);
    }
  };

  useEffect(() => {
    fetchJobDetails();
  }, [id]);

  const handleApply = async () => {
    if (!token) {
      showToast('error', 'Vui lòng đăng nhập để ứng tuyển');
      navigate('/login');
      return;
    }

    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const response = await axios.post(`/user/jobs/${state.job.id}/apply`, {}, {
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (response.status === 200 || response.status === 201) {
        dispatch({ type: 'SET_APPLIED', payload: !state.hasApplied });
        showToast('success', state.hasApplied ? "Hủy ứng tuyển thành công!" : "Ứng tuyển thành công!");
      } else {
        showToast('error', "Ứng tuyển thất bại!");
      }
    } catch (error) {
      console.error("Error applying for job:", error);
      showToast('error', "Có lỗi xảy ra, vui lòng thử lại sau.");
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const handleBookmark = async (e) => {
    e.preventDefault();

    if (!token) {
      showToast('error', "Vui lòng đăng nhập để đánh dấu");
      navigate('/login');
      return;
    }

    dispatch({ type: 'SET_BOOKMARK_LOADING', payload: true });
    try {
      const response = await axios.post(`/user/jobs/${state.job.id}/bookmark`, {}, {
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (response.status === 200 || response.status === 201) {
        dispatch({ type: 'SET_BOOKMARKED', payload: !state.hasBookmarked });
        showToast('success', state.hasBookmarked ? "Hủy đánh dấu thành công!" : "Đánh dấu thành công!");
      } else {
        showToast('error', "Đánh dấu thất bại!");
      }
    } catch (error) {
      console.error("Error bookmarking job:", error);
      showToast('error', "Có lỗi xảy ra, vui lòng thử lại sau.");
    } finally {
      dispatch({ type: 'SET_BOOKMARK_LOADING', payload: false });
    }
  };

  const handleDeleteJob = async () => {
    try {
      const response = await axios.delete(`/admin/job-vacancy/delete/${state.job.id}`, {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      showToast('success', 'Xóa bài đăng thành công!');
      navigate("/");
    } catch (error) {
      console.error('Error deleting job:', error);
      showToast('error', 'Có lỗi xảy ra khi xóa!');
    }
  };

  return (
    <MainLayout>
      <div className="detailFull">
        <div className="detail">
          <div className="nua1">
            <CongViecUngTuyen job={state.job} user={user} handleDeleteJob={handleDeleteJob} />
            <ChiTietTuyenDung job={state.job} />

            {user === '3' && (
              <>
                <div className="utvdd">
                  <UngTuyen
                    job={state.job}
                    handleApply={handleApply}
                    isLoading={state.isLoading}
                    hasApplied={state.hasApplied}
                  />
                  <DanhDau
                    job={state.job}
                    handleBookmark={handleBookmark}
                    isLoading={state.isLoadingOfBookmark}
                    hasBookmarked={state.hasBookmarked}
                  />
                </div>
              </>
            )}
          </div>
          <div className="nua2">
            <CongTyCongViec job={state.job} company={state.company} />
            <ThongTinChung job={state.job} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ChiTietCongViec;
