import MainLayout from "../mainLayout";
import BoxCongViec from "./boxCongViec";
import SearchCongViec from "./searchCongViec";
import "./congviec.scss";


const DsCongViec = () => {
    return(
        <>
        <MainLayout>
            <div style={{background:"rgb(249 249 249)"}}>
                <SearchCongViec/>
                <BoxCongViec/>
            </div>
        </MainLayout>
        </>
    )
}

export default DsCongViec;