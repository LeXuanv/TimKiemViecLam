import { useState } from "react"
import MainLayout from "../mainLayout"
import FormLogin from "./formLogin"
import "./login.scss"
import { PATH_PAGE } from "../../utils/constant"
import { useNavigate } from "react-router-dom"
import axios from "axios";



const Login = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // console.log(password)

    const navigate = useNavigate();

  const apiLogin = async () => {
    try {
      const response = await axios.post(
        "api/login",{
            email: username,
            password: password
        }
      );
      const users = response.data;
      console.log(users.data)
      if (users.data && users.data.token) {
        localStorage.setItem("authToken", users.data.token);
        localStorage.setItem("user", users.data.role);
        localStorage.setItem("name", users.data.name)

        console.log("token trả ve kh login",users.data.token)
        navigate(`${PATH_PAGE.dscongviec}`);
        return true;
      } else {
        console.log("Đăng nhập thất bại:", users);
        return false;
      }
    } catch (error) {
      console.error("Lỗi khi đăng nhập:", error);
      return false;
    }
  };

    return(
        <>
            <MainLayout>
                <div className="d-login">
                    <div className="f-login">
                        <FormLogin
                            setUsername={setUsername}
                            setPassword={setPassword}
                            apiLogin={apiLogin}
                        >
                        </FormLogin>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}

export default Login;