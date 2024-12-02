import { Button, Checkbox, Form, Input } from "antd";

const ChangePassword = () => {
  return (
    <>
      <div className="all-detail">
        <div className="inner-file">
          <div className="infomation">
            <div className="inner-info">
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 15,
                }}
                initialValues={{
                  remember: true,
                }}
                autoComplete="off"
              >
                <Form.Item
                  label="Nhập mật khẩu cũ"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập mật khẩu cũ!",
                    },
                  ]}
                >
                  <Input.Password placeholder="Nhập mât khẩu cũ" />
                </Form.Item>
                <Form.Item
                  label="Nhập mật khẩu mới"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập mật khẩu với!",
                    },
                  ]}
                >
                  <Input.Password placeholder="Nhập mât khẩu mới" />
                </Form.Item>
                <Form.Item
                  label="Xác nhận mật khẩu mới"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập lại mật khẩu mới!",
                    },
                  ]}
                >
                  <Input.Password placeholder="Xác thực mật khẩu" />
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Button type="primary" htmlType="submit" style={{ backgroundColor:"green", padding : "5px 20px" }}>Xác nhận đổi mật khẩu</Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChangePassword;
