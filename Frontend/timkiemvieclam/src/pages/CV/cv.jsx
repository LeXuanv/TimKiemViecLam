import MainLayout from "../mainLayout";
import FormProfile from "./formProfile";
import FormSkill from "./formSkill";
import FormStudy from "./formStudy";
import "./cv.scss"


const CV = () => {
    return(
        <>
        <MainLayout>
            <div className="profile">
                <div className="title">
                    <span>Thông tin cá nhân</span>
                </div>
                <FormProfile/>
            </div>
            <div className="study">
                <div className="title">
                    <span className="title">Thông tin học vấn</span>
                </div>
                <FormStudy/>
            </div>
            <div className="skill">
                <div className="title">
                    <span className="title">Thông tin kỹ năng</span>
                </div>

                <FormSkill/>
            </div>
        </MainLayout>
        </>
    )
}

export default CV;