import MainLayout from "../../mainLayout";
import "./dangbai.scss"
import FormDangBai from "./formdangbai";

const DangBai = () => {
    return(
        <>
            <MainLayout>
                <div className="thembaidang">
                    <FormDangBai />
                </div>
            </MainLayout>
        </>
    )
}

export default DangBai;