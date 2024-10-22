import MainLayout from "../mainLayout"
import FormLogin from "./formLogin"
import "./login.scss"


const Login = () =>{
    return(
        <>
            <MainLayout>
                <div className="d-login">
                    <div className="f-login">
                        <FormLogin></FormLogin>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}

export default Login;