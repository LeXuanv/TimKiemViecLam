
/*
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


*/



import { DatePicker, Form, Input, Select, Space, Button } from "antd";

import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from 'axios';


const DetailFile = ({
    user,
    dataUser
  }) => {
  const token = localStorage.getItem('authToken');
  const [provinces, setProvinces] = useState([]); 
  const [districts, setDistricts] = useState([]); 
  const [wards, setWards] = useState([]); 
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({
      name: "",
      email: "",
      description: "",
      address: "",
      scale: "",
      ward_code: "",
      phone_number: "",
      logo: "",
  });
  
  useEffect(() => {
    const fetchData = async () => {
      try {
          if (dataUser) {
            setFormData({
              name: dataUser.name || "",
              email: dataUser.email || "",
              description: dataUser.description || "",
              address: dataUser.address || "",
              scale: dataUser.scale || "",
              wardCode: dataUser.ward_code || "",
              phoneNumber: dataUser.phone_number || "",
            });
          }
      } catch (error) {
          console.error("Error:", error);
      }
    };

      fetchData();
  }, [dataUser]); 

  console.log("dataUser:", dataUser);
  console.log("token:", token);
  console.log("formData:", formData);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProvinces = async () => {
        try {
            const response = await axios.get('/api/province');
            setProvinces(response.data);
        } catch (error) {
            console.error("Error fetching provinces", error);
        }
    };

    fetchProvinces();
  }, []);
  useEffect(() => {
    const fetchDistricts = async () => {
        if (!selectedProvince) return; 
        try {
            const response = await axios.get(`/api/district/${selectedProvince}`);
            setDistricts(response.data);
            setWards([]); 
            setSelectedDistrict(""); 
            setSelectedWard(""); 
        } catch (error) {
            console.error("Error fetching districts", error);
        }
    };

    fetchDistricts();
  }, [selectedProvince]);
  useEffect(() => {
    const fetchWards = async () => {
        if (!selectedDistrict) return; 
        try {
            const response = await axios.get(`/api/ward/${selectedDistrict}`);
            setWards(response.data);
            setSelectedWard(""); 
        } catch (error) {
            console.error("Error fetching wards", error);
        }
    };

    fetchWards();
  }, [selectedDistrict]);
  const provinceOptions = provinces.map((province) => ({
    value: province.code, 
    label: province.name, 
  }));
  const districtOptions = districts.map((district) => ({
    value: district.code, 
    label: district.name, 
  }));
  const wardOptions = wards.map((ward) => ({
    value: ward.code, 
    label: ward.name, 
  }));
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
  };

  const handleDateChange = (birthdate, dateString) => {
      setFormData((prevData) => ({
          ...prevData,
          birthdate: dateString,
      }));
  };

  const handleUpdateJob = async () => {
    
    try {
        const response = await axios.post("/api/user/update", formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        alert("Thay đổi thành công");
        console.log("Update successful:", response.data);
        console.log(formData);

        navigate("/profile"); 
        // window.location.reload()    
      } catch (error) {
        alert("Thay đổi thất bại");
        console.error("Có lỗi xảy ra:", error);
    }

  };
  console.log("form data after update", formData);
  return (
    
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
                onFinish={handleUpdateJob}
              >
                <Form.Item
                  label="Tên:"
                  rules={[{ required: true, message: "Vui lòng nhập tên của bạn" }]}
                >
                  <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nhập họ và tên của bạn" 
                  />
                  {/* <input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nhập họ và tên của bạn"
                  /> */}
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="changeemail"
                
                >
                  <span>{dataUser.email}</span>
                </Form.Item>

                {(user == 2 || user == 3) ? 
                <>
                
                <Form.Item
                  label="Số điện thoại:"
                >
                  <Input 
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleChange}
                      placeholder="Nhập số điện thoại của bạn" 
                  />
                </Form.Item>
                
                <Form.Item
                  label="Tỉnh/Thành phố:"
                  name="tinh"
                  >

                    <Select placeholder="Chọn tỉnh thành"
                      value={selectedProvince} 
                      onChange={(selectedOption) => setSelectedProvince(selectedOption)}
                      options={provinceOptions}
                     >
                      <option value="">Chọn Tỉnh</option>
                      {provinces.map((province) => (
                          <option key={province.code} value={province.code}>
                              {province.name}
                          </option>
                      ))}
                    </Select>
                </Form.Item>
                <Form.Item
                  label="Quận/Huyện:"
                  name="huyen"
                  >
                    <Select placeholder="Chọn quận/huyện" 
                      value={selectedDistrict} 
                      onChange={(selectedOption) => setSelectedDistrict(selectedOption)}
                      options={districtOptions}
                      disabled={!selectedProvince} 

                    >
                      <option value="">Chọn quận/huyện</option>
                      {districts.map((district) => (
                      <option key={district.code} value={district.code}>
                          {district.name}
                      </option>
                      ))}
                    </Select>
                </Form.Item>
                <Form.Item
                  label="Phường/Xã:"
                  name="xa"
                  >
                    <Select placeholder="Chọn Phường/Xã" 
                      value={selectedWard} 
                      onChange={(selectedOption) => setSelectedWard(selectedOption)}
                      options={wardOptions}
                      disabled={!selectedDistrict} 
                    >
                      <option value="">Chọn Phường/Xã</option>
                      {wards.map((ward) => (
                      <option key={ward.code} value={ward.code}>
                          {ward.name}
                      </option>
                      ))}
                    </Select>
                </Form.Item>
                <Form.Item
                  label="Địa chỉ chi tiết:"
                >
                  <Input 
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Nhập địa chỉ của bạn" 
                  />
                </Form.Item>

                {(user == 2)? 
                <>

                  <Form.Item
                      label="Giới thiệu:"
                    >
                      <Input 
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          placeholder="Nhập bản giới thiệu công ty của bạn" 
                      />
                  </Form.Item>
                  <Form.Item
                      label="Quy mô công ty:"
                    >
                      <Input 
                          name="scale"
                          value={formData.scale}
                          onChange={handleChange}
                          placeholder="Nhập quy mô công ty của bạn" 
                      />
                  </Form.Item>
                  
                  
                </>
                
                :""}
                
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
                
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Lưu thay đổi
                  </Button>
              </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    
  );


};

export default DetailFile;