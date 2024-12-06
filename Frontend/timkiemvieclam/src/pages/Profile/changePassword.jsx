import { Button, Form, Input } from "antd";
import axios from "axios";
import { useState } from "react";

const ChangePassword = ({ token }) => {
  console.log("token nay", token);
  
  const handleChangePassword = async (values) => {
    const { old_password, password, password_confirmation } = values;

    if (password !== password_confirmation) {
      alert("Mật khẩu mới và xác nhận mật khẩu không khớp!");
      return;
    }

    try {
      const response = await axios.post(
        "/api/user/change-password",
        { old_password, password, password_confirmation },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Đổi mật khẩu thành công!");
    } catch (error) {
      alert(error.response?.data?.message || "Nhập sai mật khẩu cũ!");
      console.log("old pw, pw, cf pw: ", old_password, password, password_confirmation)
    }
  };

  return (
    <div className="all-detail">
      <div className="inner-file">
        <div className="infomation">
          <div className="inner-info">
            <Form
              name="change_password"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 15,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={handleChangePassword} // Chuyển từ onChange sang onFinish
              autoComplete="off"
            >
              <Form.Item
                label="Nhập mật khẩu cũ"
                name="old_password"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mật khẩu cũ!",
                  },
                ]}
              >
                <Input.Password placeholder="Nhập mật khẩu cũ" />
              </Form.Item>

              <Form.Item
                label="Nhập mật khẩu mới"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mật khẩu mới!",
                  },
                ]}
              >
                <Input.Password placeholder="Nhập mật khẩu mới" />
              </Form.Item>

              <Form.Item
                label="Xác nhận mật khẩu mới"
                name="password_confirmation"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng xác nhận mật khẩu mới!",
                  },
                ]}
              >
                <Input.Password placeholder="Xác nhận mật khẩu mới" />
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
                  Xác nhận đổi mật khẩu
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
