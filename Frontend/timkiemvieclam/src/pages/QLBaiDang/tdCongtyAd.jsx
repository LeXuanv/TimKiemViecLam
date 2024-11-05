import { PiBagSimpleFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { PATH_PAGE } from "../../utils/constant";


const TuyenDungCongtyAd = ({modal, setModal}) => {
    return(
        
            <div className="tuyendungCty">
                <div className="bentrongtuyendung">
                    <div className="tieudetd">
                        <span>Tuyển dụng</span>
                        <Link to={PATH_PAGE.dangbai}>
                            <p>Đăng bài tuyển dụng</p>
                        </Link>
                        
                    </div>
                    <div className="search-tttuyendung">
                        <form id="frm-search-job">
                            <div className="group-search">
                                <div className="item">
                                    <input className="form-input" placeholder="Nhập thông tin việc làm"/>
                                </div>
                                <div className="search-nganhnghe">
                                    <div className="icon">
                                        <PiBagSimpleFill />
                                    </div>
                                    <div className="select-nghe">
                                        <select name="nghe" id="nghe">
                                            <option value>Tất cả các ngành nghề</option>
                                            <option value="cntt">cntt</option>
                                            <option value="mkt">mkt</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="button-search">
                                    <button>Tìm kiếm</button>
                                </div>
                            </div>
                        </form>
                        <div className="ttTuyendung">
                            <div onClick={() => setModal(!modal)} className="link-deital">
                                <div className="box-cv">
                                    <div className="box">
                                        <div className="img">
                                            <img src="https://my.archdaily.net/users/custom_avatars/007/454/945/original/ho.jpg?1675400346"/>
                                        </div>
                                        <div className="infoCty">
                                            <div className="tenViec">
                                                <span>Thực tập sinh Laravel</span>
                                            </div>
                                            <div className="tenCty">
                                                <span>Công ty TNHH Gol</span>
                                            </div>
                                            <div className="tt-ct">
                                                <div className="luong">
                                                    <span>Từ 20 - 25 triệu</span>
                                                </div>
                                                <div className="diadiem">
                                                    <span>Hà Nội</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        
    )
}

export default TuyenDungCongtyAd;