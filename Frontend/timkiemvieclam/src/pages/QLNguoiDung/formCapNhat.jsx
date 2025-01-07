import { LockOutlined, MailOutlined, ManOutlined, PhoneOutlined, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons';
import { useEffect, useState, useReducer } from "react";
import axios from "axios";
import { DatePicker, Form, Input, Select, Space, Button } from "antd";
import { useNavigate } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import moment from 'moment';
import { Bounce, toast } from "react-toastify";

const initialState = {
    titleTabs: "Hồ sơ",
    provinces: [],
    districts: [],
    wards: [],
    selectedProvince: "",
    selectedDistrict: "",
    selectedWard: "",
    dataUser: "",
    formData: {
      name: "",
      email: "",
      description: "",
      address: "",
      scale: "",
      ward_code: "",
      province_code: "",
      district_code: "",
      phone_number: "",
      website: "",
      gender: "",
      birth_date: "",
      experience: "",
      cv: "",
      industry_job: "",
    },
    logoFile: null,
    previewLogo: null,
    jobs:null,
    currentPage: 1,
    totalPages: 1,
    loading: false,
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_TITLE_TABS":
        return { ...state, titleTabs: action.payload };
      case "SET_PROVINCES":
        return { ...state, provinces: action.payload };
      case "SET_DISTRICTS":
        return { ...state, districts: action.payload };
      case "SET_WARDS":
        return { ...state, wards: action.payload };
      case "SET_SELECTED_PROVINCE":
        return { ...state, selectedProvince: action.payload };
      case "SET_SELECTED_DISTRICT":
        return { ...state, selectedDistrict: action.payload };
      case "SET_SELECTED_WARD":
        return { ...state, selectedWard: action.payload };
      case "SET_DATA_USER":
        return { ...state, dataUser: action.payload };
      case "SET_FORM_DATA":
        return { ...state, formData: { ...state.formData, ...action.payload } };
      case "SET_LOGO_FILE":
        return { ...state, logoFile: action.payload };
      case "SET_PREVIEW_LOGO":
        return { ...state, previewLogo: action.payload };
      case "SET_JOBS":
        return { ...state, jobs: action.payload };
      case "SET_CURRENT_PAGE":
        return { ...state, currentPage: action.payload };
      case "SET_TOTAL_PAGES":
        return { ...state, totalPages: action.payload };
      case "SET_LOADING":
        return { ...state, loading: action.payload };
      default:
        return state;
    }
  };
  

const onFinish = (values) => {
  console.log("Success:", values);
};
const FormCapNhat = ({
    selectedUser,
    userDatas,
}) => {
    // const dataUser = selectedUser;

    const [state, dispatch] = useReducer(reducer, initialState);
    const token = localStorage.getItem("authToken");
    const [form] = Form.useForm();
    const navigate = useNavigate();
    useEffect(() => {
        if (selectedUser) {
            dispatch({ type: "SET_DATA_USER", payload: selectedUser });
        }
    }, [selectedUser]);
    const selectedUserRole = userDatas.find(user => user.id === selectedUser.user_id)?.role_id;

    const fetchUserData = async () => {
        try {
            // setFormData({
              // name: dataUser.name || "",
              // email: dataUser.email || "",
              // description: dataUser.description || "",
              // address: dataUser.address || "",
              // scale: dataUser.scale || "",
              // ward_code: dataUser.ward_code || "",
              // phone_number: dataUser.phone_number || "",
              // province_code: dataUser.province_code || "",
              // district_code: dataUser.district_code || "",
              // // logo: dataUser.logo || "",
              // gender: dataUser.gender || "",
              // birth_date: dataUser.birth_date || "",
              // experience: dataUser.experience || "",
              // website: dataUser.website || "",
              // cv: dataUser.cv || "",
              // industry_job: dataUser.industry_job || "",
            // });
            dispatch({ type: "SET_FORM_DATA", payload: {
              name: state.dataUser.name || "",
              email: state.dataUser.email || "",
              description: state.dataUser.description || "",
              address: state.dataUser.address || "",
              scale: state.dataUser.scale || "",
              ward_code: state.dataUser.ward_code || "",
              phone_number: state.dataUser.phone_number || "",
              province_code: state.dataUser.province_code || "",
              district_code: state.dataUser.district_code || "",
              // logo: state.dataUser.logo || "",
              gender: state.dataUser.gender || "",
              birth_date: state.dataUser.birth_date || "",
              experience: state.dataUser.experience || "",
              website: state.dataUser.website || "",
              cv: state.dataUser.cv || "",
              industry_job: state.dataUser.industry_job || "",
            }});
        } catch (error) {
            console.error("Error fetching user data", error);
        }
      };
      const fetchAddressData = async () => {
        await fetchProvinces();
    
        if (state.dataUser.province_code) {
          // setSelectedProvince(dataUser.province_code);
          dispatch({ type: "SET_SELECTED_PROVINCE", payload: state.dataUser.province_code });
    
          await fetchDistricts();
        }
    
        if (state.dataUser.district_code) {
          // setSelectedDistrict(dataUser.district_code);
          dispatch({ type: "SET_SELECTED_DISTRICT", payload: state.dataUser.district_code });
    
          await fetchWards();
        }
        // console.log("SelectedDistrictA", selectedDistrict);
    
        form.setFieldsValue({
          province_code: state.dataUser.province_code,
          district_code: state.dataUser.district_code,
          ward_code: state.dataUser.ward_code,
        });
      }
      const fetchProvinces = async () => {
        try {
            const response = await axios.get('/api/province');
            // setProvinces(response.data);
            dispatch({ type: "SET_PROVINCES", payload: response.data });
    
            
        } catch (error) {
            console.error("Error fetching provinces", error);
        }
      };
      const fetchDistricts = async () => {
        if (!state.selectedProvince) return; 
        try {
            const response = await axios.get(`/api/district/${state.selectedProvince}`);
            // setDistricts(response.data);
            // setWards([]); 
            // setSelectedDistrict(""); 
            // setSelectedWard(""); 
            console.log("selectedUser", selectedUser);
            
            dispatch({ type: "SET_DISTRICTS", payload: response.data });
            dispatch({ type: "SET_WARDS", payload: [] });
            dispatch({ type: "SET_SELECTED_DISTRICT", payload: selectedUser?.district_code || "" });
            dispatch({ type: "SET_SELECTED_WARD", payload: selectedUser?.ward_code || "" });
    
        } catch (error) {
            console.error("Error fetching districts", error);
        }
        // console.log('selectedProvince:',selectedProvince);
    
      };
      const fetchWards = async () => {
        if (!state.selectedDistrict) return; 
        try {
            const response = await axios.get(`/api/ward/${state.selectedDistrict}`);
            // setWards(response.data);
            // setSelectedWard(""); 
    
            dispatch({ type: "SET_WARDS", payload: response.data  });
            dispatch({ type: "SET_SELECTED_WARD", payload: selectedUser?.ward_code || "" });
    
    
        } catch (error) {
            console.error("Error fetching wards", error);
        }
      };
    
      useEffect(() => {
        
        fetchAddressData();
        fetchUserData();
      }, [state.dataUser, form]);
      
      useEffect(() => {
        fetchProvinces();
        fetchDistricts();
      }, [state.selectedProvince]);
      
      useEffect(() => {
        fetchWards();
      }, [state.selectedDistrict]);
      const handleUpdate = async (userId) => {
        
        try {
          if(selectedUserRole == 2){
            const response = await axios.post(`api/admin/company/update/${userId}`, state.formData, {
              headers: {
                  'Authorization': `Bearer ${token}`,
              }
            });
          }
          else if(selectedUserRole == 3){
            const response = await axios.post(`api/admin/job-seeker/update/${userId}`, state.formData, {
              headers: {
                  'Authorization': `Bearer ${token}`,
              }
            });
          }
            
            // alert("Thay đổi thành công");
            toast.success('Thay đổi thành công', {
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
            console.log(state.formData);
    
            // navigate("/profile"); 
            // window.location.reload()    
          } catch (error) {
            // alert("Thay đổi thất bại");
            toast.error('Thay đổi thất bại', {
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
            console.error("Có lỗi xảy ra:", error);
        }
    
      };
    
      // const handleChange = (e) => {
      //   if (!e.target) {
      //     console.error('e.target is undefined');
      //     return;
      //   }
      //   const { name, value } = e.target;
      //   setFormData((prevData) => ({
      //       ...prevData,
      //       [name]: value,
      //   }));
      // };
      // const handleWardChange = (selectedWardCode) => {
      //   setSelectedWard(selectedWardCode);
      //   setFormData((prevData) => ({
      //     ...prevData,
      //     ward_code: selectedWardCode, 
      //   }));
      // };
      // const handleDistrictChange = (selectedDistrictCode) => {
      //   setSelectedDistrict(selectedDistrictCode);
      //   setFormData((prevData) => ({
      //     ...prevData, 
      //     district_code: selectedDistrictCode, 
      //   }));
      // };
      // const handleProvinceChange = (selectedProvinceCode) => {
      //   setSelectedProvince(selectedProvinceCode);
      //   setFormData((prevData) => ({
      //     ...prevData,
      //     province_code: selectedProvinceCode, 
      //   }));
      // };
      const handleChange = (e) => {
          if (!e.target) {
              console.error('e.target is undefined');
              return;
          }
          const { name, value } = e.target;
          dispatch({
              type: "SET_FORM_DATA",
              payload: { [name]: value }
          });
      };
      const handleProvinceChange = (selectedProvinceCode) => {
        dispatch({ type: "SET_SELECTED_PROVINCE", payload: selectedProvinceCode });
        dispatch({ type: "SET_FORM_DATA", payload: { province_code: selectedProvinceCode } });
      };
    
      const handleDistrictChange = (selectedDistrictCode) => {
        dispatch({ type: "SET_SELECTED_DISTRICT", payload: selectedDistrictCode });
        dispatch({
          type: "SET_FORM_DATA",
          payload: { district_code: selectedDistrictCode },
        });
      };
    
      const handleWardChange = (selectedWardCode) => {
        dispatch({ type: "SET_SELECTED_WARD", payload: selectedWardCode });
        dispatch({ type: "SET_FORM_DATA", payload: { ward_code: selectedWardCode } });
      };
    
      const provinceOptions = state.provinces.map((province) => ({
        value: province.code,
        label: province.name,
      }));
    
      const districtOptions = state.districts.map((district) => ({
        value: district.code,
        label: district.name,
      }));
    
      const wardOptions = state.wards.map((ward) => ({
        value: ward.code,
        label: ward.name,
      }));
      const handleDateChange = (date, dateString) => {
        dispatch({ type: "SET_FORM_DATA", payload: { birth_date: dateString } });

        // setFormData({ birth_date: dateString }); 
      };
      const handleGenderChange = (value) => {
        dispatch({ type: "SET_FORM_DATA", payload: { gender: value } });

        // setFormData({ gender: value }); 
      };
    console.log("Success:", selectedUser);
    console.log("role nef :", selectedUserRole);
    return(
        <>
            <div className="formA">
                <Form
                name="dk"
                initialValues={{
                    remember: true,
                }}
                autoComplete="off"
                form={form}
                onFinish={() => handleUpdate(selectedUser.id)}
                >
                    <div className='title-login'>
                        <p>Cập nhật tài khoản</p>
                    </div>
                    <div className="formDk">
                        <Form.Item
                            name="name"
                            // rules={[
                            // {
                            //     required: true,
                            //     message: 'Vui lòng nhập họ và tên!',
                            // },
                            // ]}
                        >
                            <Input.Group compact>
                            <Input
                                style={{ width: '5%' }}
                                prefix={<UserOutlined />} // Icon hiển thị trước Select
                                disabled // Input không khả dụng để chỉ làm prefix
                                />
                            {/* <Input style={{ width: '85%' }} placeholder="Họ và tên" /> */}
                            <Input 
                                name="name"
                                value={state.formData.name}
                                onChange={handleChange}
                                placeholder="Nhập họ và tên của bạn" 
                                style={{ width: '85%' }}
                            />
                            </Input.Group>
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            // rules={[
                            // {
                            //     required: true,
                            //     message: 'Vui lòng nhập số điện thoại!',
                            // },
                            // ]}
                        >
                            <Input.Group compact>
                            <Input
                                style={{ width: '5%' }}
                                prefix={<PhoneOutlined />}
                                disabled
                                />
                            {/* <Input style={{ width: '85%' }} placeholder="Số điện thoại" /> */}
                            <Input 
                              name="phone_number"
                              value={state.formData.phone_number}
                              onChange={handleChange}
                              placeholder="Nhập số điện thoại của bạn" 
                              style={{ width: '85%' }}  
                          />
                            </Input.Group>
                        </Form.Item>
                        <Form.Item
                            name="email"
                            // rules={[
                            // {
                            //     required: true,
                            //     message: 'Vui lòng nhập email!',
                            // },
                            // ]}
                        >
                            <Input.Group compact>
                            <Input
                                style={{ width: '5%' }}
                                prefix={<MailOutlined />} // Icon hiển thị trước Select
                                disabled // Input không khả dụng để chỉ làm prefix
                            />
                            <Input style={{ width: '85%' }} value={state.dataUser.email} />
                            </Input.Group>
                        </Form.Item>
                        {/* <Form.Item
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
                                prefix={<LockOutlined />} // Icon hiển thị trước Select
                                disabled // Input không khả dụng để chỉ làm prefix
                            />
                            <Input style={{ width: '85%' }} type="password" placeholder="Mật khẩu" />
                            </Input.Group>
                            
                        </Form.Item> */}
                        {/* <Form.Item >
                            <Input.Group compact>
                            <Input
                                style={{ width: '5%' }}
                                prefix={<ManOutlined />}
                                disabled 
                            />
                            <Select style={{ width: '85%' }} placeholder="Chọn giới tính">
                                <Select.Option value="nam">Nam</Select.Option>
                                <Select.Option value="nu">Nữ</Select.Option>
                                <Select.Option value="khac">Khác</Select.Option>
                            </Select>
                            </Input.Group>
                        </Form.Item> */}
                        <Form.Item>
                            <Input.Group compact>
                            <Input
                                style={{ width: '5%' }}
                                prefix={<UsergroupAddOutlined />}
                                disabled
                            />
                            {/* <Select style={{ width: '85%' }} placeholder="Chọn loại tài khoản" >
                                <Select.Option value="1">Tìm kiếm việc làm</Select.Option>
                                <Select.Option value="2">Nhà tuyển dụng</Select.Option>
                            </Select> */}
                            { selectedUserRole == 2? (
                               <Input style={{ width: '85%' }} value={"Nhà tuyển dụng"} />
                            ):(
                               <Input style={{ width: '85%' }} value={"Người tìm việc"} />
                            )}

                            </Input.Group>
                        </Form.Item>
                        <Form.Item
                        //  name="province_code"
                         >
                            <Input.Group compact>
                            <Input
                                style={{ width: '5%' }}
                                prefix={<UsergroupAddOutlined />}
                                disabled
                            />
                            <Select
                                placeholder="Chọn Tỉnh/Thành phố"
                                value={state.selectedProvince} 
                                onChange={handleProvinceChange}
                                options={provinceOptions} 
                                style={{ width: '85%' }}
                              />
                            </Input.Group>
                            {/* <Select style={{ width: '85%' }} placeholder="Tỉnh" >
                                <Select.Option value="1">Hà Nội</Select.Option>
                                <Select.Option value="2">Thanh Hóa</Select.Option>
                            </Select> */}
                          
                              
                            
                        </Form.Item>
                        <Form.Item
                         name="district_code"
                         >
                            <Input.Group compact>
                            <Input
                                style={{ width: '5%' }}
                                prefix={<UsergroupAddOutlined />}
                                disabled
                            />
                            <Select 
                                name="district_code"
                                placeholder="Chọn Quận/Huyện"
                                value={state.selectedDistrict} 
                                onChange={handleDistrictChange}
                                options={districtOptions} 
                                style={{ width: '85%' }}
                              />
                            </Input.Group>
                            {/* <Select style={{ width: '85%' }} placeholder="Tỉnh" >
                                <Select.Option value="1">Hà Nội</Select.Option>
                                <Select.Option value="2">Thanh Hóa</Select.Option>
                            </Select> */}
                          
                              
                        </Form.Item>
                        <Form.Item 
                         >
                            <Input.Group compact>
                            <Input
                                name="ward_code"

                                style={{ width: '5%' }}
                                prefix={<UsergroupAddOutlined />}
                                disabled
                            />
                            <Select
                                placeholder="Chọn Xã/Phường"
                                value={state.selectedWard} 
                                onChange={handleWardChange}
                                options={wardOptions} 
                                style={{ width: '85%' }}
                              />
                            </Input.Group>
  
                          
                              
                        </Form.Item>
                        <Form.Item
                            name="name"
                            // rules={[
                            // {
                            //     required: true,
                            //     message: 'Vui lòng nhập họ và tên!',
                            // },
                            // ]}
                        >
                            <Input.Group compact>
                            <Input
                                style={{ width: '5%' }}
                                prefix={<UserOutlined />} // Icon hiển thị trước Select
                                disabled // Input không khả dụng để chỉ làm prefix
                                />
                            {/* <Input style={{ width: '85%' }} placeholder="Họ và tên" /> */}
                            <Input 
                                name="address"
                                value={state.formData.address}
                                onChange={handleChange}
                                placeholder="Nhập địa chỉ của bạn" 
                                style={{ width: '85%' }}
                            />
                            </Input.Group>
                        </Form.Item>
                        { selectedUserRole == 2? (
                            <>

                            <Form.Item
                                // label="Giới thiệu:"
                              >
                                <TextArea 
                                    name="description"
                                    value={state.formData.description}
                                    onChange={handleChange}
                                    placeholder="Nhập bản giới thiệu công ty của bạn" 
                                />
                            </Form.Item>
                            <Form.Item
                                // label="Quy mô công ty:"
                              >
                                <Input 
                                    name="scale"
                                    value={state.formData.scale}
                                    onChange={handleChange}
                                    placeholder="Nhập quy mô công ty của bạn" 
                                />
                            </Form.Item>
                            <Form.Item
                                // label="Website công ty:"
                              >
                                <Input 
                                    name="website"
                                    value={state.formData.website}
                                    onChange={handleChange}
                                    placeholder="Nhập trang web công ty của bạn" 
                                />
                            </Form.Item>
                                
                          </>
                        ): (
                          <>
                          <Form.Item
                            // label="Giới tính:"
                            >
                              <Select placeholder="Chọn giới tính" 
                                name = "gender"
                                value={state.formData.gender} 
                                onChange={handleGenderChange}
                              >
                                
                                <Select.Option value="Nam">Nam</Select.Option>
                                <Select.Option value="Nữ">Nữ</Select.Option>
                              </Select>
                          </Form.Item>
                          <Form.Item
                            // label="Ngày sinh:"
                            >
                              
                              <Space direction="vertical">
                                <DatePicker
                                    name="birth_date"
                                    placeholder="Ngày sinh"
                                    value={state.formData.birth_date ? moment(state.formData.birth_date) : null}
                                    onChange={handleDateChange}
                                />
                            </Space>
                          </Form.Item>
                          <Form.Item
                            // label="Chuyên ngành:"
                          >
                            <Input 
                                name="industry_job"
                                value={state.formData.industry_job}
                                onChange={handleChange}
                                placeholder="Nhập Chuyên ngành của bạn" 
                            />
                          </Form.Item>
                          <Form.Item
                            // label="Kinh nghiệm:"
                            >
                              <TextArea 
                                name = "experience"
                                placeholder="Nhập Kinh Nghiệm" 
                                value={state.formData.experience} 
                                onChange={handleChange}
                              >
            
                              </TextArea>
                          </Form.Item>
                          
                          <Form.Item
                            // label="Định hướng công việc :"
                          >
                            <TextArea 
                                name="description"
                                value={state.formData.description}
                                onChange={handleChange}
                                placeholder="Nhập Định hướng công việc" 
                            />
                          </Form.Item>
                        </>
                        )

                        }
                    </div>
                    <Form.Item>
                        <Button block type="primary" htmlType="submit" style={{background:"green"}}>
                        Cập nhật
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}

export default FormCapNhat;