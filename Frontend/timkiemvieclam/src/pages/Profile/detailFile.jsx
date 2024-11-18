import { DatePicker, Form, Input, Select, Space } from "antd";

import { useNavigate } from "react-router-dom";


const DetailFile = ({user}) => {
 
  return (
    <>
      <div className="all-detail">
        <div className="inner-file">
          <div className="infomation">
            <div className="inner-info">
              <Form
                name="basic"
                labelCol={{
                  span: 5,
                }}
                wrapperCol={{
                  span: 20,
                }}
                initialValues={{
                  remember: true,
                }}
                autoComplete="off"
              >
                <Form.Item
                  label="Họ và tên:"
                  name="hovaten"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập họ và tên của bạn",
                    },
                  ]}
                >
                  <Input placeholder="Nhập họ và tên của bạn"/>
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="changeemail"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng nhập email đúng định dạng!',
                      type: 'email',
                    },
                  ]}
                >
                  <Input placeholder="Nhập email của bạn"/>
                </Form.Item>

                {(user == 2 || user == 3) ? 
                <>
                
                <Form.Item
                  label="Số điện thoại:"
                  name="sdt"
                >
                  <Input placeholder="Nhập số điện thoại của bạn"/>
                </Form.Item>
                <Form.Item
                  label="Tỉnh/Thành phố:"
                  name="tinh"
                  >

                    <Select placeholder="Chọn tỉnh thành" >
                      <Select.Option value="">Thanh Hóa</Select.Option>
                      <Select.Option value="">Hà Nội</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                  label="Quận/Huyện:"
                  name="huyen"
                  >
                    <Select placeholder="Chọn quận/huyện" >
                      <Select.Option value="">Thạch Thành</Select.Option>
                      <Select.Option value="">Cẩm Thủy</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                  label="Phường/Xã:"
                  name="xa"
                  >
                    <Select placeholder="Chọn quận/huyện" >
                      <Select.Option value="">Thành Mỹ</Select.Option>
                      <Select.Option value="">Thành Yên</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                  label="Địa chỉ chi tiết:"
                  name="address"
                >
                  <Input placeholder="Nhập chi tiết địa chỉ của bạn"/>
                </Form.Item>
                {(user == 3)? 
                <>
                  <Form.Item
                    label="Giới tính:"
                    name="genner"
                    >
                      <Select placeholder="Chọn giới tính" >
                        <Select.Option value="">Nam</Select.Option>
                        <Select.Option value="">Nữ</Select.Option>
                      </Select>
                  </Form.Item>
                  <Form.Item
                    label="Ngày sinh:"
                    name="date"
                    >
                      <Space direction="vertical">
                          <DatePicker />
                      </Space>
                  </Form.Item>
                  <Form.Item
                    label="Kinh nghiệm:"
                    name="exp"
                    >
                      <Select placeholder="Chọn Kinh Nghiệm" >
                        <Select.Option value="">Chưa có kinh nghiệm</Select.Option>
                        <Select.Option value="">1 - 2 năm</Select.Option>
                        <Select.Option value="">2 - 5 năm</Select.Option>
                        <Select.Option value="">Trên 5 năm</Select.Option>
                      </Select>
                  </Form.Item>
                </>
                
                :""}
                  
                </>
                :""

                }
                
                <div className="save">
                  <button>Save</button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailFile;
