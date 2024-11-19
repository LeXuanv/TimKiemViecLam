
import { FaPaperPlane } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UngTuyen = ({ job }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [hasApplied, setHasApplied] = useState(false); 
  const token = localStorage.getItem('authToken');
  const navigate = useNavigate();

  useEffect(() => {
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

    checkIfApplied();
  }, [job, token]); 

  const handleApply = async (e) => {
    e.preventDefault();

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

  if (!job) return null;

  return (
    <div className="congviecungtuyen">
      <div className="innerCVungtuyen">
        <div className="btn-ungtuyen" onClick={handleApply} disabled={isLoading}>
          <div className="ut">
            <div className="icon-ungtuyen">
              <FaPaperPlane />
            </div>
            <span>
              {isLoading ? (hasApplied ? "Đang hủy ứng tuyển..." : "Đang ứng tuyển...") : (hasApplied ? "Hủy ứng tuyển" : "Ứng tuyển")}
            </span>
          </div>
        </div>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default UngTuyen;
