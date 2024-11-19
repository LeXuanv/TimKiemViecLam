
import { FaPaperPlane } from "react-icons/fa";


const UngTuyen = ({ 
    job,
    isLoading,
    message,
    handleApply,
    hasApplied

 }) => {

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
