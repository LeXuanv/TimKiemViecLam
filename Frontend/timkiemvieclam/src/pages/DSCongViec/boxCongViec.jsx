

import { Link } from "react-router-dom";
import { PATH_PAGE } from "../../utils/constant";
import axios from 'axios';
import { MdDelete } from "react-icons/md";

function BoxCongViec({ 
    
    jobs, 
    isSearching, 
    user, 
    handleDeleteJob,

  }) {
  const baseURL = axios.defaults.baseURL;

  return (
    
    <div className="full-box-cv">

      {jobs.length > 0 ? (
        jobs.map((job) => (
          // <Link key={job.id} to={`${PATH_PAGE.chitietcongviec}/${job.id}`} className="link-deital">
          <Link key={job.id} to={PATH_PAGE.chitietcongviec.replace(':id', job.id)} className="link-deital">

            <div className="box-cv">
              <div className="box">
                <div className="img">
                  <img src={`${baseURL}/storage/${job.companyLogo}`} />
                </div>
                <div className="infoCty">
                  <div className="tenViec">
                    <span>{job.title}</span>
                  </div>
                  <div className="tenCty">
                    <span>{job.companyName}</span>
                  </div>
                  <div className="tt-ct">
                    <div className="luong">
                      <span>{job.salary}</span>
                    </div>
                    <div className="diadiem">
                      <span>{job.provinceName}</span>
                    </div>
                  </div>
                </div>
              </div>
              {user == 1 ?
              <div className="admin-delete">
                <MdDelete 
                    className="delete" 
                    onClick={() => handleDeleteJob(job.id)}
                />
              </div>
              : ""
              }
            </div>
          </Link>
        ))
      ) : (
        <p>Không có công việc nào được tìm thấy.</p>
      )}
    </div>
    
  );
}

export default BoxCongViec;
