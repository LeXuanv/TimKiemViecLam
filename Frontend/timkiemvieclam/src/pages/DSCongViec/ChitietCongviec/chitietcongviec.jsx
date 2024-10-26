import MainLayout from "../../mainLayout";
import SearchCongViec from "../searchCongViec";
import './chitietcv.scss'
import ChiTietTuyenDung from "./chitiettuyendung";
import CongTyCongViec from "./congtycongviec";
import ThongTinChung from "./thongtinchung";
import CongViecUngTuyen from "./ungtuyencongviec";

const ChiTietCongViec = () => {
    return(
        <MainLayout>
            <SearchCongViec/>
            <div className="detailFull">
                <div className="detail">
                    <div className="nua1">
                        <CongViecUngTuyen />
                        <ChiTietTuyenDung />
                    </div>
                    <div className="nua2">
                        <CongTyCongViec />
                        <ThongTinChung />
                    </div>
                </div>
            </div>  
        </MainLayout>
    )
}

export default ChiTietCongViec;