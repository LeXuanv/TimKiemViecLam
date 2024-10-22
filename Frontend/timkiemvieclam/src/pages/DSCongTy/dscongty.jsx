import MainLayout from "../mainLayout";
import ListCty from "./listCty";
import SearchCty from "./searchCty";
import "./dscty.scss";


const DsCongTy = () => {
    return(
        <>
        <MainLayout>
            <div style={{background:"rgb(249 249 249)"}}>
                <SearchCty />
                <ListCty />
            </div>
        </MainLayout>
        </>
    )
}

export default DsCongTy;