import React from 'react';
import { DownloadOutlined, UploadOutlined } from '@ant-design/icons';
import { Button,message,Upload } from 'antd';
import axios from 'axios';
import { useState, useEffect } from 'react';


const FormSkill = () => {
  const token = localStorage.getItem("authToken");
  const [dataUser, setDataUser] = useState(null);
  useEffect(() => {
    const fetchDataUser = async () => {
      try {
        const response = await axios.get("api/user/show", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("lấy dl:",response.data);
        setDataUser(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchDataUser(); 
  }, []);
  
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
                <div className="name">
                    <input placeholder="Nhập ngôn ngữ ứng tuyển..."/>
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
            <div className='comment'>
                <textarea placeholder='Nhập chi tiết kinh nghiệm về vị trí ứng tuyển mà bạn có và định hướng tương lai (nếu có)........'></textarea>
            </div>
        </>
    )
}

export default FormSkill;