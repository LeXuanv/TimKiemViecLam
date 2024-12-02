import { LockOutlined, MailOutlined, ManOutlined, PhoneOutlined, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select } from 'antd';
import { Link } from "react-router-dom";


const FormSignIn = ({setName, setEmail, setRole, setPassword, setPasswordConfirm, handleClickRegister}) => {
    return(
      <Form
      name="login"
      initialValues={{
        remember: true,
      }}
      style={{
        maxWidth: 600,
      }}
    >
        <div className='title-login'>
            <p>Đăng ký</p>
        </div>
      <Form.Item
  name="name"
  rules={[
    {
      required: true,
      message: 'Vui lòng nhập họ và tên!',
    },
  ]}
>
  <Input
    addonBefore={<UserOutlined />} // Icon hiển thị trước ô nhập liệu
    type="text"
    placeholder="Họ và tên"
    onChange={(e) => setName(e.target.value)}
  />
</Form.Item>

<Form.Item
  name="email"
  rules={[
    {
      required: true,
      message: 'Vui lòng nhập email đúng định dạng!',
      type: 'email', // Kiểm tra định dạng email
    },
  ]}
>
  <Input
    addonBefore={<MailOutlined />}
    type="email"
    placeholder="Email"
    onChange={(e) => setEmail(e.target.value)}
  />
</Form.Item>

<Form.Item
  name="password"
  rules={[
    {
      required: true,
      message: 'Vui lòng nhập mật khẩu!',
    },
  ]}
>
  <Input
    addonBefore={<LockOutlined />}
    type="password"
    placeholder="Mật khẩu"
    onChange={(e) => setPassword(e.target.value)}
  />
</Form.Item>

<Form.Item
  name="password_confirmation"
  rules={[
    {
      required: true,
      message: 'Vui lòng nhập lại mật khẩu!',
    },
  ]}
>
  <Input
    addonBefore={<LockOutlined />}
    type="password"
    placeholder="Nhập lại mật khẩu"
    onChange={(e) => setPasswordConfirm(e.target.value)}
  />
</Form.Item>

<Form.Item>
  <Input.Group compact>
  <Input
      style={{ width: '12%' }}
      prefix={<UsergroupAddOutlined />}
      disabled
    />
    <Select style={{ width: '88%' }} placeholder="Chọn loại tài khoản" onChange={(value) => setRole(value)} >
      <Select.Option value="3">Người tìm kiếm việc làm</Select.Option>
      <Select.Option value="2">Nhà tuyển dụng</Select.Option>
    </Select>
  </Input.Group>
</Form.Item>

<Form.Item>
  <Button style={{backgroundColor:"green"}} block type="primary" htmlType="submit" onClick={() => handleClickRegister()}>
    Đăng ký
  </Button>
  <Form.Item>
    Đã có tài khoản. <Link style={{color:"green"}} to="/login">Đăng nhập ngay !</Link>
  </Form.Item>
</Form.Item>

      </Form>
    )
}

export default FormSignIn;