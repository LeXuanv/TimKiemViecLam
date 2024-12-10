import MainLayout from "../mainLayout";
import FormProfile from "./formProfile";
import FormSkill from "./formSkill";
import FormStudy from "./formStudy";
import "./cv.scss"
import { useState, useEffect } from "react";
import axios from "axios";
import { Bounce, toast } from "react-toastify";

const CV = () => {
    const token = localStorage.getItem('authToken');
    const [dataUser, setDataUser] = useState("");
    const [dataEdu, setDataEdu] = useState([])
    const [dataStudy, setdataStudy] = useState([]);

    const [formData, setFormData] = useState({
        id:"",
        university:"",
        degree:"",
        major:"",
        graduation_year:"",
        gpa:"",
        
    });
    useEffect(() => {
        const fetchDataUser = async () => {
          try {
            const response = await axios.get("api/user/show", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            // console.log("lấy dl:",response.data);
            setDataUser(response.data);
          } catch (error) {
            console.error("Lỗi khi lấy dữ liệu:", error);
          }
        };
    
        fetchDataUser(); 
      }, []);
      useEffect(() => {
        const fetchEduData = async () => {
          try {
            const response = await axios.get(`api/job-seeker/education-detail/${dataUser.job_seeker_id}`, {
              headers: {
                // Authorization: `Bearer ${token}`,
              },
            });
            console.log("lấy dl edu:",response.data);
            setDataEdu(response.data);
          } catch (error) {
            console.error("Lỗi khi lấy dữ liệu:", error);
          }
        };
    
        fetchEduData(); 
      }, [dataUser.job_seeker_id]);


    useEffect(() => {
        const setFormEduData = async ()=>{
            try {
                setFormData({
                    id: dataEdu[0].id ,
                    university: dataEdu[0].university || "",
                    degree: dataEdu[0].degree || "",
                    major: dataEdu[0].major || "",
                    graduation_year: dataEdu[0].graduation_year || "",
                    gpa: dataEdu[0].gpa || "",
                });
                console.log("formdata lay duoc: ", formData)
            } catch (error) {
                console.error("Looxi khi lấy dữ liệu:", error);
                console.log("form data ne:  ", formData);
            }
          }
          setFormEduData();
    },[dataEdu]);

    const handleUpdateEdu = async () => {
        console.log("Dữ liệu học vấn:", formData);
        try {
            const response = await axios.post("/api/job-seeker/education-detail/update", formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            // alert("Thay đổi thành công");
            toast.success('Thay đổi thành công', {
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
            console.log("Update successful:", response.data);
            console.log(formData);
    
            // navigate("/cv"); 
            // window.location.reload()    
          } catch (error) {
            // alert("Thay đổi thất bại");
            toast.error('Thay đổi thất bại', {
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
            console.error("Có lỗi xảy ra:", error);
        }
    }
    const handleChange = (e) => {
        if (!e.target) {
            console.error('e.target is undefined');
            return;
        }
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    return(
        <>
        <MainLayout >
            <div style={{position: "relative"}}>
                
                {/* <div className="profile">
                    <div className="title">
                        <span>Thông tin cá nhân</span>
                    </div>
                    <FormProfile/>
                </div> */}
                <div className="study">
                    <div className="title">
                        <span className="title">Thông tin học vấn</span>
                    </div>
                    <FormStudy
                        formData={formData}
                        handleChange={handleChange}
                        setFormData={setFormData}
                    />
                </div>
                <div className="skill">
                    <div className="title">
                        <span className="title">Thông tin kỹ năng</span>
                    </div>

                    <FormSkill

                    />
                </div>
                <div className="save-info">
                    <button onClick={handleUpdateEdu}>Lưu</button>
                </div>
            </div>
        </MainLayout>
        </>
    )
}

export default CV;