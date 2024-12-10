import React from 'react';
import { DownloadOutlined, UploadOutlined } from '@ant-design/icons';
import { Button,message,Upload } from 'antd';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Bounce, toast } from "react-toastify";


const FormSkill = () => {
  const token = localStorage.getItem("authToken");
  const [dataUser, setDataUser] = useState(null);
  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);

  useEffect(() => {
    const fetchDataUser = async () => {
      try {
        const response = await axios.get("api/user/show", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("lấy dl data user:",response.data);
        setDataUser(response.data);
        console.log("lấy dl data user 2:",dataUser);

      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchDataUser(); 
  }, []);
  
  useEffect(() => {
    const fetchDataSkills = async () => {
      try {
        const response = await axios.get("/api/skill/get", {
          headers: {
            // Authorization: `Bearer ${token}`,
          },
        });
        console.log("lấy dl:",response.data);
        setSkills(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchDataSkills(); 
  }, []);
  useEffect(() => {
    
    const fetchDataSkillsOfUser = async () => {
      console.log("data user nafy ", dataUser);
      try {
        const response = await axios.get(`/api/job-seeker/skill/${dataUser.job_seeker_id}`, {
          headers: {
            // Authorization: `Bearer ${token}`,
          },
        });
        console.log("lấy dl:",response.data);
        setSelectedSkills(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchDataSkillsOfUser(); 
  }, [dataUser]);

  const handleSkillSelection = (skillId) => {
      setSelectedSkills(prevSelected => {
          if (prevSelected.includes(skillId)) {
              return prevSelected.filter(id => id !== skillId);
          } else {
              return [...prevSelected, skillId];
          }
      });
  };

  const handleUpdateSkill = async () => {
    const skillString = selectedSkills.join(',');
    console.log("skill da chon", skillString);
    try {
      
        const response = await axios.post("/api/job-seeker/skill/update", 
        {
          skill_ids: skillString
        }, {
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
        console.log(selectedSkills);

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


  const props = {
    name: "file",
    customRequest: async (options) => {
      const { file, onSuccess, onError } = options;
      const formData = new FormData();
      formData.append("cv", file);

      try {
        const response = await axios.post(
          `${axios.defaults.baseURL}/api/job-seeker/upload-cv`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        onSuccess(response.data);
        message.success(`${file.name} file uploaded successfully`);
      } catch (error) {
        console.error(error);
        onError(error);
        message.error(`${file.name} file upload failed.`);
      }
    },
    onChange(info) {
      console.log("Current status:", info.file.status);
      console.log(info.fileList);
    },
  };

  const viewCV = async () => {
    try {
      const response = await axios.get(`/api/job-seeker/view-cv/${dataUser.job_seeker_id}`, {
        headers: {
          // Authorization: `Bearer ${token}`,
        },
        responseType: 'blob',
      });
  
      const pdfBlob = response.data;
      const pdfURL = URL.createObjectURL(pdfBlob); 
  
      window.open(pdfURL, "_blank");
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
    }
  };
  
    return(
        <>
            <div className="fullSkill">
                {/* <div className="name">
                    <input placeholder="Nhập ngôn ngữ ứng tuyển..."/>
                </div> */}

                <div>
                    <h1>Update Skills</h1>
                    <ul>
                        {skills.map(skill => (
                            <li key={skill.id}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={selectedSkills.includes(skill.id)}
                                        onChange={() => handleSkillSelection(skill.id)}
                                    />
                                    {skill.name}
                                </label>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleUpdateSkill}>Update Skills</button>
                </div>


                {dataUser && dataUser.cv ? (
                  <div>
                    <p>CV đã được đăng tải:</p>
                    <button onClick={viewCV}>Xem CV</button>
                  </div>
                ) : (
                  <p>Bạn chưa đăng tải CV.</p>
                )}
                
                <div className="cv">
                    <Upload {...props}>
                        <Button icon={<UploadOutlined />}>Nhấn để đăng CV</Button>
                    </Upload>

                    <Button icon={<DownloadOutlined />}>Click to export your information to template CV</Button>

                </div>
            </div>
            {/* <div className='comment'>
                <textarea placeholder='Nhập chi tiết kinh nghiệm về vị trí ứng tuyển mà bạn có và định hướng tương lai (nếu có)........'></textarea>
            </div> */}
        </>
    )
}

export default FormSkill;