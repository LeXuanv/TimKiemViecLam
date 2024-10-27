import { useState } from "react";
import MainLayout from "../mainLayout";
import FormDangky from "./formDangKy";
import FormDanhSach from "./formDanhsach";
import "./qlnguoidung.scss";
import FormCapNhat from "./formCapNhat";


const QlNguoiDung = () => {
    const [modalAdmin, setModalAdmin] = useState(false)
    const [update, setUpdate] = useState(false);
    const handleClickmodal =()=>{
        setModalAdmin(!modalAdmin);
        setUpdate(false)
    }

    return(
        <>
            <MainLayout>
                <div className="qlnguoidung">
                      <FormDanhSach update={update} setUpdate={setUpdate} modalAdmin={modalAdmin} setModalAdmin={setModalAdmin}  />
                      <button onClick={handleClickmodal}>Tạo tài khoản</button>
                      {modalAdmin ?  
                      <div className="modal">
                        <div className="formModal">
                            <span onClick={() => setModalAdmin(!modalAdmin)} class="close-button">&times;</span>
                            {update ? <FormCapNhat/> : <FormDangky/>}
                            
                            
                        </div>
                      </div>
                      : ""}
                </div>
            </MainLayout>
        </>
    )
}

export default QlNguoiDung;