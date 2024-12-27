import MainLayout from "../mainLayout";
import FormProfile from "./formProfile";
import FormSkill from "./formSkill";
import FormStudy from "./formStudy";
import "./cv.scss"
import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { Bounce, toast } from "react-toastify";

const initialState = {
  dataUser: "",
  dataEdu: [],
  formData: {
      id: "",
      university: "",
      degree: "",
      major: "",
      graduation_year: "",
      gpa: "",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
      case "SET_USER_DATA":
          return { ...state, dataUser: action.payload };
      case "SET_EDU_DATA":
          return { ...state, dataEdu: action.payload };
      case "SET_FORM_DATA":
          return { ...state, formData: action.payload };
      case "UPDATE_FORM_DATA":
          return { 
              ...state, 
              formData: { ...state.formData, [action.payload.field]: action.payload.value }
          };
      default:
          return state;
  }
};

const CV = () => {
    const token = localStorage.getItem('authToken');

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchDataUser = async () => {
            try {
                const response = await axios.get("api/user/show", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                dispatch({ type: "SET_USER_DATA", payload: response.data });
            } catch (error) {
                console.error("Lỗi khi lấy dữ liệu:", error);
            }
        };
        fetchDataUser(); 
    }, []);

    useEffect(() => {
        const fetchEduData = async () => {
            try {
                const response = await axios.get(`api/job-seeker/education-detail/${state.dataUser.job_seeker_id}`);
                dispatch({ type: "SET_EDU_DATA", payload: response.data });
            } catch (error) {
                console.error("Lỗi khi lấy dữ liệu:", error);
            }
        };
        if (state.dataUser.job_seeker_id) {
            fetchEduData(); 
        }
    }, [state.dataUser.job_seeker_id]);

    useEffect(() => {
        if (state.dataEdu.length > 0) {
            const edu = state.dataEdu[0];
            dispatch({
                type: "SET_FORM_DATA",
                payload: {
                    id: edu.id,
                    university: edu.university || "",
                    degree: edu.degree || "",
                    major: edu.major || "",
                    graduation_year: edu.graduation_year || "",
                    gpa: edu.gpa || "",
                }
            });
        }
    }, [state.dataEdu]);

    const handleUpdateEdu = async () => {
        console.log("Dữ liệu học vấn:", state.formData);
        try {
            const response = await axios.post("/api/job-seeker/education-detail/update", state.formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
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
        } catch (error) {
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
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: "UPDATE_FORM_DATA",
            payload: { field: name, value }
        });
    };

    return (
        <MainLayout>
            <div style={{ position: "relative" }}>
                <div className="study">
                    <div className="title">
                        <span className="title">Thông tin học vấn</span>
                    </div>
                    <FormStudy
                        formData={state.formData}
                        handleChange={handleChange}
                        setFormData={(updatedData) =>
                            dispatch({ type: "SET_FORM_DATA", payload: updatedData })
                        }                    
                        />
                </div>
                <div className="skill">
                    <div className="title">
                        <span className="title">Thông tin kỹ năng</span>
                    </div>
                    <FormSkill />
                </div>
                <div className="save-info">
                    <button onClick={handleUpdateEdu}>Lưu</button>
                </div>
            </div>
        </MainLayout>
    );
}

export default CV;
