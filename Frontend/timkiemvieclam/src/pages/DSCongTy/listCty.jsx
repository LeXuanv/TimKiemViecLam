import { Link } from "react-router-dom";
import { PATH_PAGE } from "../../utils/constant";
import axios from 'axios';

function ListCty({ companies, getProvinceName }) {
  console.log(companies);
  const baseURL = axios.defaults.baseURL;

    return (
      <div className="dscongty">
        <div className="full-box-cty">
          {companies.length > 0 ? (
            companies.map((company) => (
              // <Link key={job.id} to={`${PATH_PAGE.chitietcongviec}/${job.id}`} className="link-deital">
              <Link key={company.id} to={PATH_PAGE.chitietcongty.replace(':id', company.id)} className="link-deital">
    
                  <div div className="box-cv">
                      <div className="box">
                          <div className="img">
                            <img src={`${baseURL}/storage/${company.logo}`} />
                          </div>
                          <div className="infoCty">
                              <div className="tenCty">
                                  <span>{company.name}</span>
                                  <div className="diadiem">
                                      <span>{getProvinceName(company.province_code)}</span>
                                  </div>
                              </div>
                              <div className="gt-cty">
                                  <pre>{company.description}</pre>
                              </div>
                          </div>
                      </div>
                  </div>
              </Link>
            ))
          ) : (
            <p>Không có công ty nào được tìm thấy.</p>
          )}
        </div>
      </div>
    );
  }
  
  export default ListCty;
  