import "./header.scss"
import LogoApp from "../assets/img/Logo.png" 
import { PATH_PAGE } from "../utils/constant"
import { Link, useNavigate} from "react-router-dom"
import { UserOutlined } from "@ant-design/icons"


const Header = () =>{
    const navigate = useNavigate();
    const token =  localStorage.getItem("authToken");
    const user =  localStorage.getItem("user");
    const name =  localStorage.getItem("name");
    console.log("user", user)

    const handlClickLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        localStorage.removeItem("name");
        navigate("/login");
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
                            <Link 
                            to={PATH_PAGE.dscongviec}

                             className="item">
                                <span>Công việc</span>
                            </Link>
                            {(user == 3 )?
                                <Link 
                                    to={PATH_PAGE.cv}
                                     className="item">
                                        <span>Hồ sơ & CV</span>
                                    </Link>
                                :""
                                }
                            
                            <Link
                             to={PATH_PAGE.dscongty}

                              className="item">
                                <span>Danh sách công ty</span>
                            </Link>
                            {/* <Link to={PATH_PAGE.dtcongviec} className="item">
                                <span>Đăng tải công việc</span>
                            </Link> */}
                            {(user == 2 || user == 1) ?
                                <>
                                {(user == 1)?
                                    <Link to={PATH_PAGE.qlnguoidung} className="item">
                                        <span>Quản lý người dùng</span>
                                    </Link> 
                                :""
                                }
                                {(user == 2)? 
                                    <Link to={PATH_PAGE.qlbaidang} className="item">
                                        <span>Quản lý công ty</span>
                                    </Link>
                                :""
                                }
                                </>
                             : ""}
                            
                        </div>
                    </div>
                    { token ? 
                    <div className="energy">
                        <Link
                        className="nameuser"
                        to={PATH_PAGE.profile}
                        >
                        <UserOutlined />
                        <p>Wellcome, {name}</p>
                        </Link>
                        <div className="btn">
                            <button onClick={() => handlClickLogout()} className="login">Đăng xuất</button>
                        </div>
                    </div> 
                    :
                    <div className="energy">
                        <div className="btn">
                            <Link to={PATH_PAGE.login} className="login">Đăng nhập</Link>
                        </div>
                        <div className="btn">
                            <Link to={PATH_PAGE.singin} className="sign-in">Đăng ký</Link>
                        </div>
                    </div>}
                    
                </div>
            </div>
        </div>
    )
}

export default Header;