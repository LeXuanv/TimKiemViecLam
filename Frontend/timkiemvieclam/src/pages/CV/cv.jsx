import MainLayout from "../mainLayout";
import FormProfile from "./formProfile";
import FormSkill from "./formSkill";
import FormStudy from "./formStudy";
import "./cv.scss"
import { useState } from "react";
import axios from "axios";

const CV = () => {
    const token = localStorage.getItem('authToken');
    const [dataUser, setDataUser] = useState("");

    const [dataStudy, setdataStudy] = useState([]);

    const [formData, setFormData] = useState({
        // id:"",
        university:"",
        degree:"",
        major:"",
        graduation_year:"",
        gpa:"",
        
    });
    
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
                    <FormStudy/>
                </div>
                <div className="skill">
                    <div className="title">
                        <span className="title">Thông tin kỹ năng</span>
                    </div>

                    <FormSkill

                    />
                </div>
                <div className="save-info">
                    <button>Lưu</button>
                </div>
            </div>
        </MainLayout>
        </>
    )
}

export default CV;