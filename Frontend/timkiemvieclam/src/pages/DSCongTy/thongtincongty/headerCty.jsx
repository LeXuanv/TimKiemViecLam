import { BiWorld } from "react-icons/bi";
import { BiSolidBuildingHouse } from "react-icons/bi";

const HeaderCty = () => {
    return(
        <>
            <div className="headerCty">
                <div className="innerHeaderCty">
                    <div className="topheader">
                        <div className="biaCty">
                            <img src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/company_covers/iG4XtDpniVr6WmwXw0nc.jpg"/>
                        </div>
                    </div>
                    <div className="bottomHeader">
                        <div className="tencty">
                            <span>Công ty TNHH công nghệ Gol</span>
                        </div>
                        <div className="thongTinCty">
                            <div className="linkCty">
                                <BiWorld />
                                <div className="tenlink">
                                    afasdfasdfasdfasd.com
                                </div>
                            </div>
                            <div className="slNhanVien">
                                <BiSolidBuildingHouse />
                                <div className="slnv">
                                    <span>10+ nhân viên</span>
                                </div>
                            </div>
                        </div>
                        <div className="avtCty">
                            <img src="https://my.archdaily.net/users/custom_avatars/007/454/945/original/ho.jpg?1675400346" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderCty;