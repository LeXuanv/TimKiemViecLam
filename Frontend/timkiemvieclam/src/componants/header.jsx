import "./header.scss"
import LogoApp from "../assets/img/Logo.png" 
import { useState } from "react"
import { PATH_PAGE } from "../utils/constant"


const Header = () =>{
    const [activeLink, setActiveLink] = useState("")

    const handleClickMenu = (path) =>{
        console.log(path)
        setActiveLink(path)
    }


    return(
        <div className="header-app">
            <div className="all-header">
                <div className="logo-app">
                    <img src={LogoApp} alt="logoApp" />
                </div>
                <div className="header">
                    <div className="menu-app">
                        <div className="all-menu">
                            <div className={`item ${activeLink === "" ? "active" :""}`} onClick={() => handleClickMenu(`${PATH_PAGE.dscongviec}`)}>
                                <span>Công việc</span>
                            </div>
                            <div className={`item ${activeLink === "cv" ? "active" :""}`} onClick={() => handleClickMenu(`${PATH_PAGE.cv}`)}>
                                <span>Hồ sơ & CV</span>
                            </div>
                            <div className={`item ${activeLink === "dscongty" ? "active" :""}`} onClick={() => handleClickMenu(`${PATH_PAGE.dscongty}`)}>
                                <span>Danh sách công ty</span>
                            </div>
                            <div className={`item ${activeLink === "dtcongviec" ? "active" :""}`} onClick={() => handleClickMenu(`${PATH_PAGE.dtcongviec}`)}>
                                <span>Đăng tải công việc</span>
                            </div>
                            <div className={`item ${activeLink === "qlnguoidung" ? "active" :""}`} onClick={() => handleClickMenu(`${PATH_PAGE.qlnguoidung}`)}>
                                <span>Quản lý người dùng</span>
                            </div>
                            <div className={`item ${activeLink === "qlbaidang" ? "active" :""}`}onClick={() => handleClickMenu(`${PATH_PAGE.qlbaidang}`)}>
                                <span>Quản lý bài đăng</span>
                            </div>
                        </div>
                    </div>
                    <div className="energy">
                        <div className="btn">
                            <button className="login">Đăng nhập</button>
                        </div>
                        <div className="btn">
                            <button className="sign-in">Đăng ký</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;