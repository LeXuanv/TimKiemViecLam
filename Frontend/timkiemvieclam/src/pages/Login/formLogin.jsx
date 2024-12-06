import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { Link } from "react-router-dom";

const FormLogin = ({setUsername, setPassword, apiLogin}) => {
    return(
    <Form
      name="login"
      initialValues={{
        remember: true,
      }}
      style={{
        maxWidth: 360,
      }}
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
        <Input prefix={<UserOutlined />} placeholder="Email" onChange={(e) => setUsername(e.target.value)} />
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
        <Input prefix={<LockOutlined />} type="password" placeholder="Mật khẩu" onChange={(e)=> setPassword(e.target.value)} />
      </Form.Item>
      {/* <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Flex>
      </Form.Item> */}

      <Form.Item>
        <Button style={{backgroundColor:"green"}} block type="primary" htmlType="submit" onClick={() => apiLogin()}>
          Log in
        </Button>
        <Form.Item>
            Chưa có tài khoản. <Link style={{color:"green"}} to="/signin">Đăng ký ngay !</Link>
        </Form.Item>
        <Form.Item>
             <Link style={{color:"green"}} to="/forgotPassword">Quên mật khẩu?!</Link>
        </Form.Item>
      </Form.Item>
    </Form>
    )
} 

export default FormLogin;