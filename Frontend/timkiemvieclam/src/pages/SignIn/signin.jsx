import MainLayout from "../mainLayout"
import FormSignIn from "./formSignIn"

const SignIn = () =>{
    return(<>
        <MainLayout>
            <div className="d-login">
                <div className="f-login">
                <FormSignIn>
                </FormSignIn>
                </div>
            </div>
        </MainLayout>
    </>)
}

export default SignIn;