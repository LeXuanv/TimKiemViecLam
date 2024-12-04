import { BiWorld } from "react-icons/bi";
import { BiSolidBuildingHouse } from "react-icons/bi";
import axios from 'axios';

const HeaderCty = ({
    company
}) => {
    const baseURL = axios.defaults.baseURL;

    return(
        <>
            <div className="headerCty">
                <div className="innerHeaderCty">
                    {/* <div className="topheader">
                        <div className="biaCty">
                            <img src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/company_covers/iG4XtDpniVr6WmwXw0nc.jpg"/>
                        </div>
                    </div> */}
                    <div className="bottomHeader">
                        <div className="tencty">
                            <span>{company.name}</span>
                        </div>
                        <div className="thongTinCty">
                            <div className="linkCty">
                                <BiWorld />
                                <div className="tenlink">
                                    {company.website}
                                </div>
                            </div>
                            <div className="slNhanVien">
                                <BiSolidBuildingHouse />
                                <div className="slnv">
                                    <span>{company.scale}</span>
                                </div>
                            </div>
                        </div>
                        <div className="avtCty">
                            <img src={`${baseURL}/storage/${company.logo}`} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderCty;