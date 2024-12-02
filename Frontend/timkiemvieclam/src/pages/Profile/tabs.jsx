import { useState } from "react";
import { UserOutlined } from "@ant-design/icons";

const Tabs = (props) => {
  const [clickTab, setClickTab] = useState(1);
  const handleClickFile = () => {
    setClickTab(1);
    props.onHandleTitle("Hồ sơ");
  };
  const handleClickJobSave = () => {
    setClickTab(2);
    props.onHandleTitle("jobsave");
  };
  const handleClickChangePassWord = () => {
    setClickTab(3);
    props.onHandleTitle("Đổi mật khẩu");
  };
  const handleClickCv = () => {
    setClickTab(4);
    props.onHandleTitle("Cv đã nộp");
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
          {props.user == 3 ? 
          <>
            <p
              className={clickTab === 2 ? "activeTab" : ""}
              onClick={() => handleClickJobSave()}
            >
              Công việc đã lưu
            </p>
            <p
              className={clickTab === 4 ? "activeTab" : ""}
              onClick={() => handleClickCv()}
            >
              Cv đã nộp
            </p>
          </>
          : ""}
          
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
