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
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [searchText, setSearchText] = useState("");

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



  const handleSearch = (e) => {
    const text = e.target.value;
    setSearchText(text);
  
    if (text.trim() !== "") {
      setFilteredSkills(skills.filter(skill => skill.name.toLowerCase().includes(text.toLowerCase())));
    } else {
      setFilteredSkills(skills);
    }
  };
  

  const handleAddSkill = (skill) => {
    if (!selectedSkills.some(selected => selected.id === skill.id)) {
      setSelectedSkills([...selectedSkills, skill]); 
    }
    setSearchText("");
    setFilteredSkills(skills);
  };
  const handleRemoveSkill = (id) => {
    setSelectedSkills(selectedSkills.filter(skill => skill.id !== id));
  };

  const handleUpdateSkill = async () => {
    try {
      await axios.post(
        "/api/job-seeker/skill/update",
        { skill_ids: selectedSkills.map(skill => skill.id).join(",") },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Cập nhật kỹ năng thành công!", { theme: "light", transition: Bounce });
    } catch (error) {
      toast.error("Cập nhật kỹ năng thất bại", { theme: "light", transition: Bounce });
      console.error("Error updating skills:", error);
    }
  };
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
        toast.success("CV đăng tải thành công!", { theme: "light", transition: Bounce });
      } catch (error) {
        console.error(error);
        onError(error);
        toast.error("Đăng tải cv thất bại", { theme: "light", transition: Bounce });
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
                <div style={{ marginBottom: "20px" }}>
                  <input
                    type="text"
                    placeholder="Gõ để tìm kiếm..."
                    value={searchText}
                    onChange={handleSearch}
                    style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
                  />
                  {searchText && (
                    <ul style={{ border: "1px solid #ccc", maxHeight: "150px", overflowY: "auto", padding: "0" }}>
                      {filteredSkills.map(skill => (
                        <li
                          key={skill.id}
                          onClick={() => handleAddSkill(skill)}
                          style={{ padding: "10px", cursor: "pointer", borderBottom: "1px solid #eee" }}
                        >
                          {skill.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div>
                  <h3>Kỹ năng đã chọn</h3>
                  {selectedSkills.map(skill => (
                    <div key={skill.id}>
                      <span>{skill.name}</span>
                      
                      <button onClick={() => handleRemoveSkill(skill.id) } style={{ marginLeft: '8px' }}>x</button>
                    </div>
                  ))}
                </div>

                {/* Update Button */}
                <button onClick={handleUpdateSkill}>
                  Cập nhật kỹ năng
                </button>
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