import { useReducer, useState } from "react"
import MainLayout from "../mainLayout"
import FormLogin from "./formLogin"
import "./login.scss"
import { PATH_PAGE } from "../../utils/constant"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { Bounce, toast } from "react-toastify"

const inputLogin = {
  username: " ",
  password: " "
}
function loginReduce (state, action){
  switch(action.type){
    case "USERNAME":
      return {...state, username: action.payload};
    case "PASSWORD":
      return {...state, password: action.payload};
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
const Login = () =>{
    const [stateLogin, dispatchLogin] = useReducer(loginReduce, inputLogin);
    const [modalForgotPassword, setModalForgotPassword] = useState(false);
    // console.log(password)

    const navigate = useNavigate();

  const apiLogin = async () => {
    try {
      const response = await axios.post(
        "api/login",{
            email: stateLogin.username,
            password: stateLogin.password
        }
      );
      const users = response.data;
      console.log(users.data)
      if (users.data && users.data.token) {
        localStorage.setItem("authToken", users.data.token);
        localStorage.setItem("user", users.data.role);
        localStorage.setItem("name", users.data.name)

        console.log("token trả ve kh login",users.data.token)
        toast.success('Đăng nhập thành công', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        navigate(`${PATH_PAGE.dscongviec}`);
        return true;
      } else {
        console.log("Đăng nhập thất bại:", users);
        // alert("Đăng nhập thất bại! \n Tài khoản hoặc mật khẩu không chính xác")
        toast.error('Tài khoản hoặc mật khẩu không chính xác', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        return false;
      }
    } catch (error) {
      console.error("Lỗi khi đăng nhập:", error);
      // alert(" Đăng nhập thất bại! \n Tài khoản hoặc mật khẩu không chính xác")
      toast.error('Tài khoản hoặc mật khẩu không chính xác', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
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
          toast.success('"Mật khẩu mới đã được gửi đến email của bạn!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        } catch(error){
          // alert(error.response?.data?.message || "Email không tồn tại hoặc sai cú pháp");
          toast.error('Email không tồn tại hoặc sai cú pháp!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          console.error("mail:", email);
        }
    }
    return(
        <>
            <MainLayout>
                <div className="d-login">
                    <div className="f-login">
                        <FormLogin
                            setUsername={(value) =>
                              dispatchLogin({ type: "USERNAME", payload: value })
                            }
                            setPassword={(value) => dispatchLogin({type:"PASSWORD", payload:value})}
                            apiLogin={apiLogin}
                            setModalForgotPassword={setModalForgotPassword}
                        >
                        </FormLogin>
                    </div>
                    {modalForgotPassword ?
                      <div className="modalForgot">
                        <div className="innerModal">
                          <div className="titleForgot">
                            <span>Quên mật khẩu</span>
                            <span onClick={() => setModalForgotPassword(false)} className="close-button">&times;</span>
                          </div>
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
                        :""
                      }
                </div>
            </MainLayout>
        </>
    )
}

export default Login;