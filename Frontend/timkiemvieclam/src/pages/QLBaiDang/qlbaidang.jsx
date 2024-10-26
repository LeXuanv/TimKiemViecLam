import { useRef, useState } from "react";
import MainLayout from "../mainLayout";
import GioiThieuCongTyAd from "./gthieuCtyAd";
import HeaderCtyAd from "./headerCtyAd";
import ModalCtBaiDang from "./modalChitietbaidang";
import "./qlbaidang.scss";
import TuyenDungCongtyAd from "./tdCongtyAd";
import LienHeCongTyAd from "./ttLienheAd";


const QlBaiDang = () => {
    const [modal, setModal] = useState(false);
    return(
        <>
            <MainLayout>
                <div className="quanlybaidanng">
                    <HeaderCtyAd/>
                    <div className="hainuaa">
                        <div className="nua1">
                            <GioiThieuCongTyAd/>
                            <TuyenDungCongtyAd modal={modal} setModal={setModal}/>
                        </div>
                        <div className="nua2">
                            <LienHeCongTyAd/>
                        </div>
                    </div>

                    {modal ? <ModalCtBaiDang modal={modal} setModal={setModal} /> : ""}
                </div>
            </MainLayout>
        </>
    )
}

export default QlBaiDang;