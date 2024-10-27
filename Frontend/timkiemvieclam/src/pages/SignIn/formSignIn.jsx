import { LockOutlined, MailOutlined, ManOutlined, PhoneOutlined, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select } from 'antd';
import { Link } from "react-router-dom";

const onFinish = (values) => {
  console.log("Success:", values);
};
const FormSignIn = () => {
    return(
      <Form
      name="login"
      initialValues={{
        remember: true,
      }}
      style={{
        maxWidth: 600,
      }}
      onFinish={onFinish}
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
        <Input.Group compact>
          <Input
              style={{ width: '10%' }}
              prefix={<UserOutlined />} // Icon hiển thị trước Select
              disabled // Input không khả dụng để chỉ làm prefix
            />
          <Input style={{ width: '90%' }} placeholder="Họ và tên" />
        </Input.Group>
      </Form.Item>
      <Form.Item
        name="phone"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập số điện thoại!',
          },
        ]}
      >
        <Input.Group compact>
          <Input
              style={{ width: '10%' }}
              prefix={<PhoneOutlined />}
              disabled
            />
          <Input style={{ width: '90%' }} placeholder="Số điện thoại" />
        </Input.Group>
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập email!',
          },
        ]}
      >
        <Input.Group compact>
        <Input
            style={{ width: '10%' }}
            prefix={<MailOutlined />} // Icon hiển thị trước Select
            disabled // Input không khả dụng để chỉ làm prefix
          />
          <Input style={{ width: '90%' }} placeholder="Email" />
        </Input.Group>
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
        <Input.Group compact>
        <Input
            style={{ width: '10%' }}
            prefix={<LockOutlined />} // Icon hiển thị trước Select
            disabled // Input không khả dụng để chỉ làm prefix
          />
        <Input style={{ width: '90%' }} type="password" placeholder="Mật khẩu" />
        </Input.Group>
        
      </Form.Item>
      <Form.Item >
         <Input.Group compact>
          <Input
            style={{ width: '10%' }}
            prefix={<ManOutlined />}
            disabled 
          />
          <Select style={{ width: '90%' }} placeholder="Chọn giới tính">
            <Select.Option value="nam">Nam</Select.Option>
            <Select.Option value="nu">Nữ</Select.Option>
            <Select.Option value="khac">Khác</Select.Option>
          </Select>
        </Input.Group>
      </Form.Item>
      <Form.Item>
        <Input.Group compact>
        <Input
            style={{ width: '10%' }}
            prefix={<UsergroupAddOutlined />}
            disabled
          />
          <Select style={{ width: '90%' }} placeholder="Chọn loại tài khoản" >
            <Select.Option value="1">Tìm kiếm việc làm</Select.Option>
            <Select.Option value="2">Nhà tuyển dụng</Select.Option>
          </Select>
        </Input.Group>
      </Form.Item>
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Đăng ký
        </Button>
        <Form.Item>
            Đã có tài khoản. <Link to="/login">Đăng nhập ngay !</Link>
        </Form.Item>
      </Form.Item>
      </Form>
    )
}

export default FormSignIn;