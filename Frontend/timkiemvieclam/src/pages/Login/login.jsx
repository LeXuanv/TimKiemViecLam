import { useState } from "react"
import MainLayout from "../mainLayout"
import FormLogin from "./formLogin"
import "./login.scss"
import { PATH_PAGE } from "../../utils/constant"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { Button, Checkbox, Form, Input, Flex } from 'antd';



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
        alert("Đăng nhập thất bại! \n Tài khoản hoặc mật khẩu không chính xác")
        return false;
      }
    } catch (error) {
      console.error("Lỗi khi đăng nhập:", error);
      alert(" Đăng nhập thất bại! \n Tài khoản hoặc mật khẩu không chính xác")

      return false;
    }
  };


    const handleForgotPassword = async (values) => {
        const { email } = values;
        try {
          const response = await axios.post(
            "/api/user/forgot-password",{
                email
            }
          );
          console.log(response.data);
          alert("Mật khẩu mới đã được gửi đến email của bạn!!!");
        } catch(error){
          alert(error.response?.data?.message || "Email không tồn tại hoặc sai cú pháp");
          console.error("mail:", email);
        }
    }
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

                        <Form
                        name="forgot-password"
                        onFinish={handleForgotPassword}
                        >
                          <Form.Item
                            name="email"
                            rules={[
                              {
                                required: true,
                                message: 'Vui lòng nhập email!',
                              },
                            ]}
                          >
                            <Input placeholder="Email"  />
                          </Form.Item>
                          <Form.Item
                            wrapperCol={{
                              offset: 8,
                              span: 16,
                            }}
                            style={{ display: "flex", justifyContent: "center" }}
                          >
                            <Button
                              type="primary"
                              htmlType="submit"
                              style={{ backgroundColor: "green", padding: "5px 20px" }}
                            >
                              Lấy mật khẩu mới
                          </Button>
                        </Form.Item>
                        </Form>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}

export default Login;