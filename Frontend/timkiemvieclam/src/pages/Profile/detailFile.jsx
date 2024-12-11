
import { DatePicker, Form, Input, Select, Space, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import moment from 'moment';

const DetailFile = ({
    user,
    dataUser,
    token,
    provinces,
    districts,
    wards,
    selectedProvince,
    selectedDistrict,
    selectedWard,
    form,
    formData,
    setFormData,
    handleUpdateJob,
    handleChange,
    handleProvinceChange,
    handleDistrictChange,
    handleWardChange,

    handleLogoCompanyChange,
    handleLogoCompanyUpload,
    handleLogoJobSeekerChange,
    handleLogoJobSeekerUpload,
    previewLogo,
   
  }) => {

    console.log ("selectedDistrict:", selectedDistrict);
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

 console.log(dataUser)
 
  const handleDateChange = (birth_date, dateString) => {
      setFormData((prevData) => ({
          ...prevData,
          birth_date: dateString,
      }));
  };
  const handleExpChange = (value, option) => {
    const name = option?.name || 'experience';
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, 
    }));
  };
  const handleGenderChange = (value, option) => {
    const name = option?.name || 'gender';
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, 
    }));
  };
  return (
    
      <div className="all-detail">
        <div className="inner-file">
          <div className="infomation">
            <div className="logo-infor">
              {user == 2 && (
                <>
                  <h2>Logo Công Ty</h2>
                  {!previewLogo && dataUser.logo ? (
                    <img src={dataUser.logo} alt="Logo Hiện Tại" width="150" />
                  ) : (
                    previewLogo ? (
                      <img src={previewLogo} alt="Logo Mới" width="150" />
                    ) : (
                      <p>Chưa có logo</p>
                    )
                  )}
                  <input type="file" onChange={handleLogoCompanyChange} />
                  <button onClick={handleLogoCompanyUpload}>Upload Logo</button>
                </>
              )}
              {user == 3 && (
                <>
                  <h2>Ảnh đại diện</h2>
                  {!previewLogo && dataUser.logo ? (
                    <img src={dataUser.logo} alt="Ảnh Hiện Tại" width="150" />
                  ) : (
                    previewLogo ? (
                      <img src={previewLogo} alt="Ảnh Mới" width="150" />
                    ) : (
                      <p>Chưa có ảnh</p>
                    )
                  )}
                  <input type="file" onChange={handleLogoJobSeekerChange} />
                  <button onClick={handleLogoJobSeekerUpload}>Upload Ảnh</button>
                </>
              )}
            </div>
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
                      <TextArea 
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
                  <Form.Item
                      label="Website công ty:"
                    >
                      <Input 
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          placeholder="Nhập trang web công ty của bạn" 
                      />
                  </Form.Item>
                      
                </>
                
                :""}
                
                {(user == 3)? 
                <>
                  <Form.Item
                    label="Giới tính:"
                    >
                      <Select placeholder="Chọn giới tính" 
                        name = "gender"
                        value={formData.gender} 
                        onChange={handleGenderChange}
                      >
                        
                        <Select.Option value="Nam">Nam</Select.Option>
                        <Select.Option value="Nữ">Nữ</Select.Option>
                      </Select>
                  </Form.Item>
                  <Form.Item
                    label="Ngày sinh:"
                    >
                      
                      <Space direction="vertical">
                        <DatePicker
                            name="birth_date"
                            placeholder="Ngày sinh"
                            value={formData.birth_date ? moment(formData.birth_date) : null}
                            onChange={handleDateChange}
                        />
                    </Space>
                  </Form.Item>
                  <Form.Item
                    label="Chuyên ngành:"
                  >
                    <Input 
                        name="industry_job"
                        value={formData.industry_job}
                        onChange={handleChange}
                        placeholder="Nhập Chuyên ngành của bạn" 
                    />
                  </Form.Item>
                  <Form.Item
                    label="Kinh nghiệm:"
                    >
                      <Input 
                        name = "experience"
                        placeholder="Chọn Kinh Nghiệm" 
                        value={formData.experience} 
                        onChange={handleChange}
                      >
    
                      </Input>
                  </Form.Item>
                  
                  <Form.Item
                    label="Định hướng công việc :"
                  >
                    <TextArea 
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Nhập Định hướng công việc của bạn" 
                    />
                  </Form.Item>
                </>
                
                :""}
                  
                </>
                :""

                }
                
                <Form.Item style={{ display: "flex", justifyContent: "center" }}>
                  <Button type="primary" htmlType="submit" style={{ backgroundColor:"green", padding : "5px 20px" }}>
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