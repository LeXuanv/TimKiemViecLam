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
import { Bounce, toast } from "react-toastify";

const ChiTietCongViec = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [isLoadingOfBookmark, setIsLoadingOfBookmark] = useState(false);
    const [messageOfBookmark, setMessageOfBookmark] = useState("");
    const [hasApplied, setHasApplied] = useState(false); 
    const [hasBookmarked, setHasBookmarked] = useState(false); 
    const [company, setCompany] = useState("");
    const [jobSeekerApplies, setJobSeekerApplies] = useState("")

    const token = localStorage.getItem('authToken');
    const navigate = useNavigate();
    const user =  localStorage.getItem("user");
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
    
    const getCompany = async () => {
      if (!job) return;
      
      try {
        const response = await axios.get(`/api/company/show/${job.companyId}`);
        setCompany(response.data);
      } catch (error) {
        console.error("Error fetching company details:", error);
      }
    }

    const getJobSeekerApplies = async () => {
      if (!job) return;
      
      try {
        const response = await axios.get(`/company/jobs/${job.id}/applications`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setJobSeekerApplies(response.data);
      } catch (error) {
        console.error("Error fetching job seeker applies:", error);
      }
    }
   
    useEffect(() => {
        
        fetchJobDetail();
    }, [id]);

    console.log("Company:", company)
    console.log("Job:", job)



    useEffect(() => {
      if (user === 3) {
        getJobSeekerApplies();
      }
    }, [job, token, user]); 
    useEffect(() => {
        
      getCompany();
    }, [job]);
    useEffect(() => {
     
        checkIfApplied();
        checkIfBookmarked();
    
  }, [job]);
    const handleApply = async () => {
        if (!token) {
            // alert("Vui lòng đăng nhập để ứng tuyển.");
            toast.error('Vui lòng đăng nhập để ứng tuyển', {
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
              
              toast.success(hasApplied ? "Hủy ứng tuyển thành công!" : "Ứng tuyển thành công!", {
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
          } else {
              // alert(response.data.message || "Ứng tuyển thất bại!");
              toast.error("Ứng tuyển thất bại!", {
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
          } catch (error) {
              console.error("Có lỗi xảy ra:", error);
              if (error.response) {
                  // alert(error.response.data.message || "Có lỗi xảy ra, vui lòng thử lại sau.");
                  toast.error("Có lỗi xảy ra, vui lòng thử lại sau.", {
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
              } else {
                  // alert("Có lỗi xảy ra, vui lòng kiểm tra kết nối internet.");
                  toast.error("Có lỗi xảy ra, vui lòng kiểm tra kết nối internet.", {
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
          } finally {
              setIsLoading(false);
          }
    };
    const handleBookmark = async (e) => {
        e.preventDefault();
    
        if (!token) {
          // alert("Vui lòng đăng nhập để đánh dấu.");
          toast.error("Vui lòng đăng nhập để đánh dấu", {
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
            // alert(hasBookmarked ? "Hủy đánh dấu thành công!" : "Đánh dấu thành công!");
            toast.success(hasBookmarked ? "Hủy đánh dấu thành công!" : "Đánh dấu thành công!", {
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
          } else {
            // alert(response.data.message || "Đánh dấu thất bại!");
            toast.error("Đánh dấu thất bại!", {
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
        } catch (error) {
          console.error("Có lỗi xảy ra:", error);
          if (error.response) {
            // alert(error.response.data.message || "Có lỗi xảy ra, vui lòng thử lại sau.");
            toast.error("Có lỗi xảy ra, vui lòng thử lại sau", {
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
          } else {
            // alert("Có lỗi xảy ra, vui lòng kiểm tra kết nối internet.");
            toast.error("Có lỗi xảy ra, vui lòng kiểm tra kết nối internet.", {
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
        } finally {
          setIsLoadingOfBookmark(false);
        }
      };
      const handleDeleteJob = async (jobId) => {
        try {
            const response = await axios.delete(`/admin/job-vacancy/delete/${jobId}` , {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // alert('Xóa bài đăng thành công!');
            toast.success('Xóa bài đăng thành công!', {
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
            navigate("/")

            window.location.reload()   
        } catch (error) {
            console.error('Error deleting :', error);
            // alert('Có lỗi xảy ra khi xóa !');
            toast.error('Có lỗi xảy ra khi xóa !', {
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
    }
    return(
        
        <MainLayout>
            {/* <SearchCongViec/> */}
            <div className="detailFull">
                <div className="detail">
                    <div className="nua1">
                        <CongViecUngTuyen job = {job} user={user} handleDeleteJob={handleDeleteJob} />
                        <ChiTietTuyenDung job = {job}/>

                        {user == 3 && (
                        <>
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
                        </>
                      )}
                        
                    </div>
                    <div className="nua2">
                        <CongTyCongViec job = {job} company ={company}/>
                        <ThongTinChung job = {job}/>
                    </div>
                    
                </div>
            </div>  
        </MainLayout>
    )
}

export default ChiTietCongViec;