import { Button, Form, Input, Select } from "antd";
import { LockOutlined, MailOutlined, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons';
import axios from "axios";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";


const onFinish = (values) => {
  console.log("Success:", values);
};
const FormDangky = ({

}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role_id: "",
        password_confirmation: "",
    });
    const handleRegister = async () => {
        try {
            const response = await axios.post(
                "api/register",formData
            );
            const users = response.data;
            // alert("Thêm tài khoản thành công");
            toast.success("Thêm tài khoản thành công", {
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
            console.log(users);
        } catch (error) {
            console.error(error);
            console.log(formData);
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleRoleChange = (value) => {
        setFormData({
            ...formData,
            role_id: value, 
        });
    };
    return(
        <>
            <div className="formA">
                <Form
                name="dk"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                >
                    <div className='title-login'>
                        <p>Đăng ký tài khoản</p>
                    </div>
                    <div className="formDk">
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
                                style={{ width: '5%' }}
                                prefix={<UserOutlined />}
                                disabled 
                                />
                            <Input 
                                style={{ width: '85%' }} 
                                placeholder="Họ và tên" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
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
                                style={{ width: '5%' }}
                                prefix={<MailOutlined />} 
                                disabled 
                            />
                            <Input 
                                style={{ width: '85%' }} 
                                placeholder="Email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
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
                                style={{ width: '5%' }}
                                prefix={<LockOutlined />}
                                disabled 
                            />
                            <Input 
                                style={{ width: '85%' }} 
                                type="password" 
                                placeholder="Mật khẩu" 
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
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
                                style={{ width: '5%' }}
                                prefix={<LockOutlined />}
                                disabled 
                            />
                            <Input 
                                style={{ width: '85%' }} 
                                type="password" 
                                placeholder="Nhập lại Mật khẩu" 
                                name="password_confirmation"
                                value={formData.password_confirmation}
                                onChange={handleChange}
                            />
                            </Input.Group>
                            
                        </Form.Item>
                        <Form.Item>
                            <Input.Group compact>
                            <Input
                                style={{ width: '5%' }}
                                prefix={<UsergroupAddOutlined />}
                                disabled
                            />
                            <Select 
                                style={{ width: '85%' }} 
                                placeholder="Chọn loại tài khoản" 
                                name="role_id"
                                value={formData.role_id}
                                onChange={handleRoleChange}
                            >
                                <Select.Option value="3">Tìm kiếm việc làm</Select.Option>
                                <Select.Option value="2">Nhà tuyển dụng</Select.Option>
                            </Select>
                            </Input.Group>
                        </Form.Item>
                    </div>
                    <Form.Item>
                        <Button block type="primary" htmlType="submit"
                        onClick={handleRegister}
                        style={{background: "green"}}
                            > 
                            Đăng ký
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}

export default FormDangky;