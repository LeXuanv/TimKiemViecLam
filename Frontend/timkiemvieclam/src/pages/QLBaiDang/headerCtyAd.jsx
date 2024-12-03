import { BiWorld } from "react-icons/bi";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { Link } from "react-router-dom";
import { PATH_PAGE } from "../../utils/constant";

const HeaderCtyAd = (dataUser) => {
    return(
        <>
            <div className="headerCty">
                <div className="innerHeaderCty">
                    <div className="topheader">
                        <div className="biaCty">
                            {/* <img src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/company_covers/iG4XtDpniVr6WmwXw0nc.jpg"/> */}
                        </div>
                    </div>
                    <div className="bottomHeader">
                        <div className="tencty">
                            <span>{dataUser.dataUser.name}</span>
                        </div>
                        <div className="thongTinCty">
                            <div className="linkCty">
                                <BiWorld />
                                <div className="tenlink">
                                    {dataUser.dataUser.website}
                                </div>
                            </div>
                            <div className="slNhanVien">
                                <BiSolidBuildingHouse />
                                <div className="slnv">
                                    <span>{dataUser.dataUser.scale}</span>
                                </div>
                            </div>
                        </div>
                        <Link to={PATH_PAGE.profile}>
                            <div className="btn-suathongtincty">
                                <span>Sửa thông tin</span>
                            </div>
                        </Link>
                        
                        <div className="avtCty">
                            <img src={`${dataUser.dataUser.logo}`} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderCtyAd;