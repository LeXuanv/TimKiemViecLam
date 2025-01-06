import "./header.scss"
import LogoApp from "../assets/img/Logo.png"
import { PATH_PAGE } from "../utils/constant"
import { NavLink, useNavigate } from "react-router-dom"
import { UserOutlined, CaretDownOutlined } from "@ant-design/icons"
import { useState, useRef, useEffect } from "react"
import { FaUserEdit, FaSignOutAlt, FaUser } from "react-icons/fa";

const Header = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("authToken");
    const user = localStorage.getItem("user");
    const name = localStorage.getItem("name");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handlClickLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        localStorage.removeItem("name");
        navigate("/login");
        setIsDropdownOpen(false);
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
                            <NavLink
                                to={PATH_PAGE.dscongviec}
                                className={({isActive}) =>
                                    isActive ? "item active" : "item"
                                }
                            >
                                <span>Công việc</span>
                            </NavLink>
                            {(user == 3) &&
                                <NavLink
                                    to={PATH_PAGE.cv}
                                    className={({isActive}) =>
                                        isActive ? "item active" : "item"
                                    }
                                >
                                    <span>Hồ sơ & CV</span>
                                </NavLink>
                            }

                            <NavLink
                                to={PATH_PAGE.dscongty}
                                className={({isActive}) =>
                                    isActive ? "item active" : "item"
                                }
                            >
                                <span>Danh sách công ty</span>
                            </NavLink>

                            {(user == 2 || user == 1) && (
                                <>
                                    {(user == 1) &&
                                        <NavLink
                                            to={PATH_PAGE.qlnguoidung}
                                            className={({isActive}) =>
                                                isActive ? "item active" : "item"
                                            }
                                        >
                                            <span>Quản lý người dùng</span>
                                        </NavLink>
                                    }
                                    {(user == 2) &&
                                        <NavLink
                                            to={PATH_PAGE.qlbaidang}
                                            className={({isActive}) =>
                                                isActive ? "item active" : "item"
                                            }
                                        >
                                            <span>Quản lý công ty</span>
                                        </NavLink>
                                    }
                                </>
                            )}
                        </div>
                    </div>
                    {token ?
                        <div className="energy">
                            <div className="user-dropdown" ref={dropdownRef}>
                                <div
                                    className="user-info"
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                >
                                    <FaUser />
                                    <p>{name}</p>
                                    <CaretDownOutlined className={isDropdownOpen ? 'rotate' : ''} />
                                </div>
                                {isDropdownOpen && (
                                    <div className="dropdown-menu">
                                        <NavLink
                                            to={PATH_PAGE.profile}
                                            className={({isActive}) =>
                                                isActive ? "dropdown-item active" : "dropdown-item"
                                            }
                                            onClick={() => setIsDropdownOpen(false)}
                                        >
                                            <FaUserEdit /> Thông tin cá nhân
                                        </NavLink>
                                        <div
                                            className="dropdown-item"
                                            onClick={handlClickLogout}
                                        >
                                            <FaSignOutAlt /> Đăng xuất
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        :
                        <div className="energy">
                            <div className="btn">
                                <NavLink to={PATH_PAGE.login} className="login">Đăng nhập</NavLink>
                            </div>
                            <div className="btn">
                                <NavLink to={PATH_PAGE.singin} className="sign-in">Đăng ký</NavLink>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;