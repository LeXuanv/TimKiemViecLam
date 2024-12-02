import MainLayout from "../../mainLayout";
import SearchCongViec from "../searchCongViec";
import './chitietcv.scss'
import ChiTietTuyenDung from "./chitiettuyendung";
import CongTyCongViec from "./congtycongviec";
import ThongTinChung from "./thongtinchung";
import CongViecUngTuyen from "./ungtuyencongviec";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UngTuyen from "./ungtuyen";
import DanhDau from "./danhdau";
import { useNavigate } from 'react-router-dom';

const ChiTietCongViec = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [isLoadingOfBookmark, setIsLoadingOfBookmark] = useState(false);
    const [messageOfBookmark, setMessageOfBookmark] = useState("");
    const [hasApplied, setHasApplied] = useState(false); 
    const [hasBookmarked, setHasBookmarked] = useState(false); 

    const token = localStorage.getItem('authToken');
    const navigate = useNavigate();

    const fetchJobDetail = async () => {
        try {
            const response = await axios.get(`/user/job-vacancy/show/${id}`);
            setJob(response.data);
        } catch (error) {
            console.error("Error fetching job details:", error);
        }
    };

    const checkIfApplied = async () => {
        if (!token || !job) return;
        
        try {
            const response = await axios.get(`/user/jobs/${job.id}/check-application`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            });
            
            setHasApplied(response.data.isApplied);
        } catch (error) {
            console.error("Error checking application status:", error);
        }
    };
    const checkIfBookmarked = async () => {
        if (!token || !job) return;
        
        try {
          const response = await axios.get(`/user/jobs/${job.id}/check-bookmark`, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
          
          setHasBookmarked(response.data.isApplied);
        } catch (error) {
          console.error("Error checking bookmark status:", error);
        }
      };
    useEffect(() => {
        
        fetchJobDetail();
    }, [id]);
    useEffect(() => {
        
        checkIfApplied();
        checkIfBookmarked();
    }, [job, token]);

    const handleApply = async () => {
        if (!token) {
            alert("Vui lòng đăng nhập để ứng tuyển.");
            navigate('/login');
            return;
        }
  
        setIsLoading(true);
        setMessage("");
  
        try {
            const response = await axios.post(`/user/jobs/${job.id}/apply`, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
  
          if (response.status === 201 || response.status === 200) {
              setHasApplied(!hasApplied); 
              alert(hasApplied ? "Hủy ứng tuyển thành công!" : "Ứng tuyển thành công!");
          } else {
              alert(response.data.message || "Ứng tuyển thất bại!");
          }
          } catch (error) {
              console.error("Có lỗi xảy ra:", error);
              if (error.response) {
                  alert(error.response.data.message || "Có lỗi xảy ra, vui lòng thử lại sau.");
              } else {
                  alert("Có lỗi xảy ra, vui lòng kiểm tra kết nối internet.");
              }
          } finally {
              setIsLoading(false);
          }
    };
    const handleBookmark = async (e) => {
        e.preventDefault();
    
        if (!token) {
          alert("Vui lòng đăng nhập để đánh dấu.");
          navigate('/login');
          return;
        }
    
        setIsLoadingOfBookmark(true);
        setMessageOfBookmark("");
    
        try {
          const response = await axios.post(`/user/jobs/${job.id}/bookmark`, {}, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
    
          if (response.status === 201 || response.status === 200) {
            setHasBookmarked(!hasBookmarked); 
            alert(hasBookmarked ? "Hủy đánh dấu thành công!" : "Đánh dấu thành công!");
          } else {
            alert(response.data.message || "Đánh dấu thất bại!");
          }
        } catch (error) {
          console.error("Có lỗi xảy ra:", error);
          if (error.response) {
            alert(error.response.data.message || "Có lỗi xảy ra, vui lòng thử lại sau.");
          } else {
            alert("Có lỗi xảy ra, vui lòng kiểm tra kết nối internet.");
          }
        } finally {
          setIsLoadingOfBookmark(false);
        }
      };
    
    return(
        
        <MainLayout>
            {/* <SearchCongViec/> */}
            <div className="detailFull">
                <div className="detail">
                    <div className="nua1">
                        <CongViecUngTuyen job = {job} />
                        <ChiTietTuyenDung job = {job}/>
                        <div className="utvdd">
                          <UngTuyen 
                            job = {job}
                            handleApply = {handleApply}
                            isLoading={isLoading} 
                            message={message}
                            hasApplied={hasApplied}
                          />
                          <DanhDau 
                            job = {job}
                            handleBookmark = {handleBookmark}
                            isLoading={isLoadingOfBookmark} 
                            message={messageOfBookmark}
                            hasBookmarked={hasBookmarked}
                          />
                        </div>
                    </div>
                    <div className="nua2">
                        <CongTyCongViec job = {job}/>
                        <ThongTinChung job = {job}/>
                    </div>
                </div>
            </div>  
        </MainLayout>
    )
}

export default ChiTietCongViec;