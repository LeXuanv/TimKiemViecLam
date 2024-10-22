import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { Link } from "react-router-dom";

const onFinish = (values) => {
  console.log("Success:", values);
};
const FormLogin = () => {
    return(
    <Form
      name="login"
      initialValues={{
        remember: true,
      }}
      style={{
        maxWidth: 360,
      }}
      onFinish={onFinish}
    >
        <div className='title-login'>
            <p>Đăng nhập</p>
        </div>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập  mật khẩu!',
          },
        ]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="Mật khẩu" />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Log in
        </Button>
        <Form.Item>
            Chưa có tài khoản. <Link to="/signin">Đăng ký ngay !</Link>
        </Form.Item>
      </Form.Item>
    </Form>
    )
} 

export default FormLogin;