



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
  const [initialData, setInitialData] = useState(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      name: "",
      email: "",
      description: "",
      address: "",
      scale: "",
      ward_code: "",
      province_code:"",
      district_code:"",
      phone_number: "",
      logo: "",
  });
  
  const fetchUserData = async () => {
    try {
        setFormData({
          name: dataUser.name || "",
          email: dataUser.email || "",
          description: dataUser.description || "",
          address: dataUser.address || "",
          scale: dataUser.scale || "",
          ward_code: dataUser.ward_code || "",
          phone_number: dataUser.phone_number || "",
          province_code: dataUser.province_code || "",
          district_code: dataUser.district_code || "",

        });
    } catch (error) {
        console.error("Error fetching user data", error);
    }
  };
  const fetchAddressData = async () => {
    await fetchProvinces();

    if (dataUser.province_code) {
      setSelectedProvince(dataUser.province_code);
      await fetchDistricts();
    }

    if (dataUser.district_code) {
      setSelectedDistrict(dataUser.district_code);
      await fetchWards();
    }
    setInitialData({
      province_code: dataUser.province_code,
      district_code: dataUser.district_code,
      ward_code: dataUser.ward_code,

    });

    form.setFieldsValue({
      province_code: dataUser.province_code,
      district_code: dataUser.district_code,
      ward_code: dataUser.ward_code,
    });
  }
  const fetchProvinces = async () => {
    try {
        const response = await axios.get('/api/province');
        setProvinces(response.data);
        
    } catch (error) {
        console.error("Error fetching provinces", error);
    }
  };
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
    console.log('selectedProvince:',selectedProvince);

  };
  const fetchWards = async () => {
    if (!selectedDistrict) return; 
    try {
        const response = await axios.get(`/api/ward/${selectedDistrict}`);
        setWards(response.data);
        setSelectedWard(""); 
    } catch (error) {
        console.error("Error fetching wards", error);
    }
    console.log('selectedDistrict:',selectedDistrict);
  };
  useEffect(() => {
    
    fetchAddressData();
    fetchUserData();
  }, [dataUser, form]);
  
  useEffect(() => {
    fetchProvinces();
    fetchDistricts();
  }, [selectedProvince]);
  
  useEffect(() => {
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
  const handleWardChange = (selectedWardCode) => {
    setSelectedWard(selectedWardCode);
    setFormData((prevData) => ({
      ...prevData,
      ward_code: selectedWardCode, 
    }));
  };
  const handleDistrictChange = (selectedDistrictCode) => {
    setSelectedDistrict(selectedDistrictCode);
    setFormData((prevData) => ({
      ...prevData, 
      district_code: selectedDistrictCode, 
    }));
  };
  const handleProvinceChange = (selectedProvinceCode) => {
    setSelectedProvince(selectedProvinceCode);
    setFormData((prevData) => ({
      ...prevData,
      province_code: selectedProvinceCode, 
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
                form={form}
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
                  name="province_code"
                >
                  <Select
                    placeholder="Chọn Tỉnh/Thành phố"
                    value={selectedProvince} 
                    onChange={handleProvinceChange}
                    options={provinceOptions} 
                  />
                </Form.Item>

                <Form.Item
                  label="Quận/Huyện:"
                  name="district_code"
                >
                  <Select
                    placeholder="Chọn Quận/Huyện"
                    value={selectedDistrict}
                    onChange={handleDistrictChange} 
                    options={districtOptions}
                    disabled={!selectedProvince}
                  />
                </Form.Item>

                <Form.Item
                  label="Phường/Xã:"
                  name="ward_code"
                >
                  <Select
                    placeholder="Chọn Phường/Xã"
                    value={selectedWard} 
                    onChange={handleWardChange} 
                    options={wardOptions} 
                    disabled={!selectedDistrict} 
                  />
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