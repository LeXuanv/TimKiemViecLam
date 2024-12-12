import { useReducer, useState } from "react"
import MainLayout from "../mainLayout"
import FormLogin from "./formLogin"
import "./login.scss"
import { PATH_PAGE } from "../../utils/constant"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { Button, Checkbox, Form, Input, Flex, message  } from 'antd';
import { Bounce, toast } from "react-toastify"
import FormItem from "antd/es/form/FormItem"

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

  const [formData, setFormData] = useState({
    email: "",
    verification_code: "",
    new_password: "",
    new_password_confirmation: "",
  });

  const [verificationChecked, setVerificationChecked] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [timer, setTimer] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleForgotPassword = async () => {
    setIsButtonDisabled(true);
  
    let countdown = 60;
    setTimer(countdown);
  
    const interval = setInterval(() => {
      countdown -= 1;
      setTimer(countdown);
  
      if (countdown <= 0) {
        clearInterval(interval);
        setIsButtonDisabled(false); 
      }
    }, 1000);
  
    // Thực hiện gửi API
    try {
      await axios.post("/api/user/forgot-password", { email: formData.email });
      message.success("Mã xác thực đã được gửi đến email của bạn!");
    } catch (error) {
      message.error("Email không tồn tại hoặc sai cú pháp!");
  
      // Dừng đếm ngược nếu API thất bại
      clearInterval(interval);
      setIsButtonDisabled(false);
      setTimer(0);
      console.error("error:", error);
    }
  };

  const handleCheckVerificationCode = async () => {
    try {
      await axios.post("/api/user/check-verification-code", {
        email: formData.email,
        verification_code: formData.verification_code,
      });
      message.success("Mã xác thực chính xác!");
      setVerificationChecked(true);
    } catch (error) {
      message.error("Mã xác thực sai!");
      console.error("error:", error);
    }
  };

  const handleResetPassword = async () => {
    try {
      await axios.post("/api/user/reset-password", {
        email: formData.email,
        verification_code: formData.verification_code,
        new_password: formData.new_password,
        new_password_confirmation: formData.new_password_confirmation,
      });
      message.success("Mật khẩu mới đã được đặt thành công!");
      setVerificationChecked(false);
      setFormData({
        email: "",
        verification_code: "",
        new_password: "",
        new_password_confirmation: "",
      });
    } catch (error) {
      message.error("Có lỗi xảy ra, vui lòng thử lại!");
      console.error("error:", error);
    }
  };
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
                      
                          <Form>
                            
                          <Form.Item
                            name="email"
                            rules={[{ required: true, message: "Vui lòng nhập email!" }]}
                          >
                            <Input
                              name="email"
                              placeholder="Email"
                              value={formData.email}
                              onChange={handleInputChange}
                            />
                          </Form.Item>
                          <Form.Item>
                            <Button
                              type="primary"
                              onClick={handleForgotPassword}
                              disabled={isButtonDisabled}

                              style={{ backgroundColor: "green", padding: "5px 20px", marginBottom: "10px" }}
                            >
                              {isButtonDisabled ? `Đợi ${timer}s` : "Lấy Mã xác thực"}
                            </Button>
                          </Form.Item>

                          <Form.Item
                            name="verification_code"
                            rules={[{ required: true, message: "Vui lòng nhập mã xác thực!" }]}
                          >
                            <Input
                              name="verification_code"
                              placeholder="Mã xác thực"
                              value={formData.verification_code}
                              onChange={handleInputChange}
                            />
                          </Form.Item>
                          <Form.Item>

                            <Button
                              type="primary"
                              onClick={handleCheckVerificationCode}
                              style={{ backgroundColor: "blue", padding: "5px 20px", marginBottom: "10px" }}
                            >
                              Kiểm tra
                            </Button>
                          </Form.Item>

                          {verificationChecked && (
                            <>
                              <Form.Item
                                name="new_password"
                                rules={[{ required: true, message: "Vui lòng nhập mật khẩu mới!" }]}
                              >
                                <Input.Password
                                  name="new_password"
                                  placeholder="Mật khẩu mới"
                                  value={formData.new_password}
                                  onChange={handleInputChange}
                                />
                              </Form.Item>
                              <FormItem></FormItem>
                              <Form.Item
                                name="new_password_confirmation"
                                rules={[
                                  { required: true, message: "Vui lòng xác nhận mật khẩu mới!" },
                                ]}
                              >
                                <Input.Password
                                  name="new_password_confirmation"
                                  placeholder="Xác nhận mật khẩu mới"
                                  value={formData.new_password_confirmation}
                                  onChange={handleInputChange}
                                />
                              </Form.Item>
                              <FormItem></FormItem>
                              <FormItem>
                                <Button
                                  type="primary"
                                  onClick={handleResetPassword}
                                  style={{ backgroundColor: "green", padding: "5px 20px" }}
                                >
                                  Đặt lại mật khẩu
                                </Button>
                              </FormItem>
                            </>
                          )}
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