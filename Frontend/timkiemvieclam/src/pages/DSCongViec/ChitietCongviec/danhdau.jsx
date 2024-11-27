
import { FaPaperPlane } from "react-icons/fa";


const DanhDau = ({ 
    job,
    isLoading,
    message,
    handleBookmark,
    hasBookmarked

 }) => {

  if (!job) return null;

  return (
    <div className="congviecungtuyen">
      <div className="innerCVungtuyen">
        <div className="btn-ungtuyen" onClick={handleBookmark} disabled={isLoading}>
          <div className="ut">
            <div className="icon-ungtuyen">
              <FaPaperPlane />
            </div>
            <span>
              {isLoading ? (hasBookmarked ? "Đang hủy đánh dấu..." : "Đang đánh dấu...") : (hasBookmarked ? "Hủy đánh dấu" : "Đánh dấu")}
            </span>
          </div>
        </div>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default DanhDau;
