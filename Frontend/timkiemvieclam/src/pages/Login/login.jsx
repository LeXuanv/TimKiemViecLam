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
        "/api/login",{
            email: username,
            password: password
        }
      );
      const users = response.data;
      console.log(users.data)
    //   const user = users.find(
    //     (user) => user.email === username && user.password === password
    //   );
      if (users.data && users.data.token) {
        localStorage.setItem("authToken", users.data.token);
        // localStorage.setItem("user", JSON.stringify(users));
        localStorage.setItem("user", users.data.role);
        navigate(`/${PATH_PAGE.dscongviec}`);
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