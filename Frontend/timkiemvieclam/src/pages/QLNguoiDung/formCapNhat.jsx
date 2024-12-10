import { Button, Form, Input, Select } from "antd";
import { LockOutlined, MailOutlined, ManOutlined, PhoneOutlined, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons';


const onFinish = (values) => {
  console.log("Success:", values);
};
const FormCapNhat = ({
    
}) => {
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
                        <p>Cập nhật tài khoản</p>
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
                            <Input.Group compact>
                            <Input
                                style={{ width: '10%' }}
                                prefix={<UsergroupAddOutlined />}
                                disabled
                            />
                            <Select style={{ width: '90%' }} placeholder="Tỉnh" >
                                <Select.Option value="1">Hà Nội</Select.Option>
                                <Select.Option value="2">Thanh Hóa</Select.Option>
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
                            <Select style={{ width: '90%' }} placeholder="Huyện" >
                                <Select.Option value="1">Thạch Thành</Select.Option>
                                <Select.Option value="2">Cẩm Thủy</Select.Option>
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
                            <Select style={{ width: '90%' }} placeholder="Xã" >
                                <Select.Option value="1">Thành Mỹ</Select.Option>
                                <Select.Option value="2">Thành Yên</Select.Option>
                            </Select>
                            </Input.Group>
                        </Form.Item>
                        
                    </div>
                    <Form.Item>
                        <Button block type="primary" htmlType="submit">
                        Cập nhật
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}

export default FormCapNhat;