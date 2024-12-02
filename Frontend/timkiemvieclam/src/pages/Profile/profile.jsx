import { useEffect, useState } from "react";
import MainLayout from "../mainLayout";
import "./profile.scss";
import Tabs from "./tabs";
import DetailFile from "./detailFile";
import ChangePassword from "./changePassword";
import axios from "axios";
import { DatePicker, Form, Input, Select, Space, Button } from "antd";
import { useNavigate } from "react-router-dom";
import JobSave from "./JobSave";

const Profile = () => {
  const [titleTabs, setTitleTabs] = useState("Hồ sơ");
  const token = localStorage.getItem('authToken');
  const [provinces, setProvinces] = useState([]); 
  const [districts, setDistricts] = useState([]); 
  const [wards, setWards] = useState([]); 
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [form] = Form.useForm();
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
      website: "",
      gender:"",
      birth_date: "",
      experience: "",

  });


  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [sdt, setSdt] = useState("");
  // const [tinh, setTinh] = useState("");
  // const [huyen, setHuyen] = useState("");
  // const [xa, setXa] = useState("");
  // const [address, setAddress] = useState("");
  // const [genner, setGenner] = useState("");
  // const [date, setdate] = useState("");
  // const [exp, setExp] = useState("");
  // const [password, setPassword] = useState("");
  
  const [dataUser, setDataUser] = useState("");
  const HandleTitle = (newtitle) => {
    setTitleTabs(newtitle);
  };
  const user =  localStorage.getItem("user");
  useEffect(() => {
    const fetchDataUser = async () => {
      try {
        const response = await axios.get("api/user/show", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("lấy dl:",response.data);
        setDataUser(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchDataUser(); 
  }, []);
  // const apiChanggeAcout = async () => {
  //   try {
  //     const response = await axios.get(
  //       "api/user/show",{
  //           name: name,
  //           email: email,
  //           phone_number: sdt,
  //           ward_code: huyen,
  //           address: address,
  //           gender: genner,
  //           birth_date: date,
  //           experience: exp,
  //           password: password,
  //       }
  //     );
  //     console.log("thay đôi thông tin",response.data)
  //     return response.data;
  //   } catch (error) {
  //     console.error("Lỗi khi thay đổi thông tin:", error);
  //     return false;
  //   }
  // };

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
          logo: dataUser.logo || "",
          gender: dataUser.gender || "",
          birth_date: dataUser.birth_date || "",
          experience: dataUser.experience || "",
          website: dataUser.website || "",
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
        window.location.reload()    
      } catch (error) {
        alert("Thay đổi thất bại");
        console.error("Có lỗi xảy ra:", error);
    }

  };

  const handleChange = (e) => {
    if (!e.target) {
      console.error('e.target is undefined');
      return;
    }
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



  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        setFormData((prev) => ({ ...prev, logo: file }));
    }
  };
    const [uploading, setUploading] = useState(false);
  const handleLogoUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const data = new FormData();
    data.append("logo", file);

    setUploading(true);
    try {
        const response = await fetch("/api/company/upload-logo", {
            method: "POST",
            headers: {
                Authorization: "Bearer YOUR_ACCESS_TOKEN", // Thêm nếu cần
            },
            body: data,
        });

        if (!response.ok) {
            throw new Error("Failed to upload logo");
        }

        const result = await response.json();
        setFormData((prev) => ({
            ...prev,
            logo: result.path, 
        }));
        console.log("Uploaded logo:", result.path);
    } catch (error) {
        console.error("Error uploading logo:", error.message);
    } finally {
        setUploading(false);
    }
  };
  return (
    <>
      <MainLayout>
        <div className="container-profile">
          <div className="inner-profle">
            <Tabs onHandleTitle={HandleTitle} />
            <div className="all-content">
              <div className="inner-content">
                {titleTabs === "Hồ sơ" ? (
                  <DetailFile 
                    user={user} 
                    dataUser={dataUser} 
                    token={token}
                    provinces={provinces}
                    districts={districts}
                    wards={wards}
                    selectedProvince={selectedProvince}
                    selectedDistrict={selectedDistrict}
                    selectedWard={selectedWard}
                    form={form}
                    formData={formData}
                    setFormData={setFormData}
                    handleUpdateJob={handleUpdateJob}
                    handleChange={handleChange}
                    handleProvinceChange={handleProvinceChange}
                    handleDistrictChange={handleDistrictChange}
                    handleWardChange={handleWardChange}
                    handleFileChange={handleFileChange}
                    handleLogoUpload={handleLogoUpload}
                    />
                ) : titleTabs === "jobsave" ? (
                  <JobSave />
                ) : (
                  <ChangePassword />
                )}
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Profile;
