import { useState } from "react"
import MainLayout from "../mainLayout"
import FormSignIn from "./formSignIn"
import { PATH_PAGE } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState();
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    // console.log("name", name);
    // console.log("email", email);
    // console.log("role", role);
    // console.log("password", password);
    // console.log("passwordConfirm", passwordConfirm);
    const navigate = useNavigate();

    const handleClickRegister = async () => {
    try {
        await axios.post(
        "/api/register",
        {
          name: name,
          email: email,
          password: password,
          password_confirmation: passwordConfirm,
          role_id: role,
        }
      );
      navigate(`/${PATH_PAGE.login}`);
      alert("Đăng ký thành công");
    } catch (error) {
      console.error("loi", error);
    }
  };


    return(
        <>
            <MainLayout>
                <div className="d-login">
                    <div className="f-login">
                        <FormSignIn
                            setName={setName}
                            setEmail={setEmail}
                            setRole={setRole}
                            setPassword={setPassword}
                            setPasswordConfirm={ setPasswordConfirm}
                            handleClickRegister={handleClickRegister}
                        >
                        </FormSignIn>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}

export default SignIn;