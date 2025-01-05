import React, { useEffect, useReducer, useRef, useState } from 'react';
import { DownloadOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import axios from 'axios';
import { Bounce, toast } from "react-toastify";

const initialState = {
  dataUser: null,
  skills: [],
  filteredSkills: [],
  selectedSkills: [],
  searchText: '',
};

function formSkillReducer(state, action) {
  switch (action.type) {
    case 'SET_DATA_USER':
      return { ...state, dataUser: action.payload };
    case 'SET_SKILLS':
      return { ...state, skills: action.payload, filteredSkills: action.payload };
    case 'SET_SELECTED_SKILLS':
      return { ...state, selectedSkills: action.payload };
    case 'SET_SEARCH_TEXT':
      return { ...state, searchText: action.payload };
    case 'SET_FILTERED_SKILLS':
      return { ...state, filteredSkills: action.payload };
    default:
      return state;
  }
}

const FormSkill = () => {

  const token = localStorage.getItem("authToken");

  // Using useReducer for state management
  const [state, dispatch] = useReducer(formSkillReducer, initialState);
  const [isInputFocused, setInputFocused] = useState(false);
  const containerRef = useRef(null);

  const handleClickOutside = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setInputFocused(false);
    }
  };
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const fetchDataUser = async () => {
      try {
        const response = await axios.get("api/user/show", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("lấy dl data user:", response.data);
        dispatch({ type: 'SET_DATA_USER', payload: response.data });
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
        console.log("lấy dl:", response.data);
        dispatch({ type: 'SET_SKILLS', payload: response.data });
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchDataSkills(); 
  }, []);

  useEffect(() => {
    if (state.dataUser) {
      const fetchDataSkillsOfUser = async () => {
        try {
          const response = await axios.get(`/api/job-seeker/skill/${state.dataUser.job_seeker_id}`, {
            headers: {
              // Authorization: `Bearer ${token}`,
            },
          });
          console.log("lấy dl:", response.data);
          dispatch({ type: 'SET_SELECTED_SKILLS', payload: response.data });
        } catch (error) {
          console.error("Lỗi khi lấy dữ liệu:", error);
        }
      };

      fetchDataSkillsOfUser(); 
    }
  }, [state.dataUser]);

  const handleSearch = (e) => {
    const text = e.target.value;
    dispatch({ type: 'SET_SEARCH_TEXT', payload: text });

    if (text.trim() !== "") {
      dispatch({
        type: 'SET_FILTERED_SKILLS',
        payload: state.skills.filter(skill => skill.name.toLowerCase().includes(text.toLowerCase())),
      });
    } else {
      dispatch({ type: 'SET_FILTERED_SKILLS', payload: state.skills });
    }
  };

  const handleAddSkill = (skill) => {
    if (!state.selectedSkills.some(selected => selected.id === skill.id)) {
      dispatch({
        type: 'SET_SELECTED_SKILLS',
        payload: [...state.selectedSkills, skill],
      });
    }
    setInputFocused(false);
    dispatch({ type: 'SET_SEARCH_TEXT', payload: "" });
    dispatch({ type: 'SET_FILTERED_SKILLS', payload: state.skills });
  };

  const handleRemoveSkill = (id) => {
    dispatch({
      type: 'SET_SELECTED_SKILLS',
      payload: state.selectedSkills.filter(skill => skill.id !== id),
    });
  };

  const handleUpdateSkill = async () => {
    try {
      await axios.post(
        "/api/job-seeker/skill/update",
        { skill_ids: state.selectedSkills.map(skill => skill.id).join(",") },
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
      const response = await axios.get(`/api/job-seeker/view-cv/${state.dataUser.job_seeker_id}`, {
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
  const handleExportCV = async () => {
    try {
      const response = await axios.get(`/job-seeker/create-cv/${state.dataUser.job_seeker_id}`, {
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
  return (
    <>
      <div className="fullSkill">
        <div className='fullboxsk'>
          <div className='boxSkill' style={{ marginBottom: "20px" }} ref={containerRef}>
            <input
              type="text"
              placeholder="Gõ để tìm kiếm..."
              value={state.searchText}
              onChange={handleSearch}
              onFocus={() => setInputFocused(true)}
              style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />
            {isInputFocused && state.filteredSkills.length > 0 && (
              <ul style={{ border: "1px solid #ccc", maxHeight: "150px", overflowY: "auto", padding: "0" }}>
                {state.filteredSkills.map(skill => (
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

          <div className='skillPick'>
            <h3>Kỹ năng đã chọn</h3>
            <div className='skill'>
              {state.selectedSkills.map(skill => (
                <div style={{ background:"#28c45a",color:"white",borderRadius:"4px",padding:"3px", display: "flex", marginBottom:"10px" }}  key={skill.id}>
                  <span>{skill.name}</span>
                  <button onClick={() => handleRemoveSkill(skill.id)} style={{ marginLeft: '8px' }}>x</button>
                  
                </div>
              ))}
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <button className='buttonUpdateSkill' onClick={handleUpdateSkill}>Cập nhật kỹ năng</button>
          </div>
        </div>

        

        <div className="cv">
          {state.dataUser && state.dataUser.cv ? (
            <div className='cvDuocTai'>
              <p>CV đã được đăng tải:</p>
              <button onClick={viewCV}>Xem CV</button>
            </div>
          ) : (
            <p>Bạn chưa đăng tải CV.</p>
          )}
          <Upload {...props}>
            <Button style={{margin:"15px 0"}} icon={<UploadOutlined />}>Nhấn để đăng CV</Button>
          </Upload>

          <Button className='buttonXuatCV' icon={<DownloadOutlined />} onClick={handleExportCV}> Xuất thông tin sang mẫu CV</Button>
          
        </div>
        
      </div>
    </>
  );
};

export default FormSkill;
