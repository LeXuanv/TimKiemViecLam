import { useReducer, useState } from "react"
import MainLayout from "../mainLayout"
import FormSignIn from "./formSignIn"
import { PATH_PAGE } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const inputSign = {
  name: "",
  email: "",
  role:"",
  password: "",
  passwordConfirm: ""
}

function signReduce (state, action){
  switch(action.type){
    case "NAME":
      return {...state, name: action.payload}
    case "EMAIL":
      return {...state, email: action.payload}
    case "ROLE":
      return {...state, role: action.payload}
    case "PASSWORD":
      return {...state, password: action.payload}
    case "PASSWORDCONFIRM":
      return {...state, passwordConfirm: action.payload}
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
const SignIn = () =>{
  const [stateSign, dispatchSign] = useReducer(signReduce, inputSign);
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [role, setRole] = useState();
    // const [password, setPassword] = useState("");
    // const [passwordConfirm, setPasswordConfirm] = useState("");

    // console.log("name", name);
    // console.log("email", email);
    // console.log("role", role);
    // console.log("password", password);
    // console.log("passwordConfirm", passwordConfirm);
    const navigate = useNavigate();

    const handleClickRegister = async () => {
    try {
      if(stateSign.password != stateSign.passwordConfirm){
        toast.error('Mật khẩu không trùng nhau', {
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
        return;
      }
        await axios.post(
        "/api/register",
        {
          name: stateSign.name,
          email: stateSign.email,
          password: stateSign.password,
          password_confirmation: stateSign.passwordConfirm,
          role_id: stateSign.role,
        }
      );
      toast.success('Đăng ký hành công', {
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
      navigate(`${PATH_PAGE.login}`);
      // alert("Đăng ký thành công");
    } catch (error) {
      console.error("loi", error);
      toast.error('Đăng ký thất bại', {
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
    }
  };


    return(
        <>
            <MainLayout>
                <div className="d-login">
                    <div className="f-login">
                        <FormSignIn
                            setName={(value) => dispatchSign({type: "NAME", payload: value})}
                            setEmail={(value) => dispatchSign({type: "EMAIL", payload: value})}
                            setRole={(value) => dispatchSign({type: "ROLE", payload: value})}
                            setPassword={(value) => dispatchSign({type: "PASSWORD", payload: value})}
                            setPasswordConfirm={ (value) => dispatchSign({type: "PASSWORDCONFIRM", payload: value})}
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