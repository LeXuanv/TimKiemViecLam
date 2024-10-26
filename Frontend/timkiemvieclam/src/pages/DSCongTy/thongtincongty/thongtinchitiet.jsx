import MainLayout from "../../mainLayout";
import GioiThieuCongTy from "./gthieuCty";
import HeaderCty from "./headerCty";
import TuyenDungCongty from "./tdCongty";
import "./ttctychitiet.scss"
import LienHeCongTy from "./ttLienhe";

const ChiTietCongty = () => {
    return(
        <MainLayout>
            <HeaderCty/>
            <div className="hainua">
                <div className="nua1">
                    <GioiThieuCongTy/>
                    <TuyenDungCongty/>
                </div>
                <div className="nua2">
                    <LienHeCongTy/>
                </div>
            </div>
            
        </MainLayout>
    )
}

export default ChiTietCongty;