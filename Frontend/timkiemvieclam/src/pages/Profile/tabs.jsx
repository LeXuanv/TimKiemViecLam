import { useState } from "react";
import { UserOutlined } from "@ant-design/icons";

const Tabs = (props) => {
  const [clickTab, setClickTab] = useState(1);
  const handleClickFile = () => {
    setClickTab(1);
    props.onHandleTitle("Hồ sơ");
  };
  // const handleClickAddress = () => {
  //   setClickTab(2);
  //   props.onHandleTitle("Địa chỉ");
  // };
  const handleClickChangePassWord = () => {
    setClickTab(3);
    props.onHandleTitle("Đổi mật khẩu");
  };
  const name = localStorage.getItem("name");
  return (
    <>
      <div className="tabs">
        <div className="user">
          <div className="inner-user">
            <div className="name-user">
              <p className="name">{name}</p>
              <p className="change">Sửa hồ sơ</p>
            </div>
          </div>
        </div>
        <div className="inner-tabs">
          <div className="account-me">
            <UserOutlined /> <span>Tài Khoản của tôi</span>
          </div>
          <p
            className={clickTab === 1 ? "activeTab" : ""}
            onClick={() => handleClickFile()}
          >
            Hồ sơ
          </p>
          {/* <p
            className={clickTab === 2 ? "activeTab" : ""}
            onClick={() => handleClickAddress()}
          >
            Địa chỉ
          </p> */}
          <p
            className={clickTab === 3 ? "activeTab" : ""}
            onClick={() => handleClickChangePassWord()}
          >
            Đổi mật khẩu
          </p>
        </div>
      </div>
    </>
  );
};

export default Tabs;
