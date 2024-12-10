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
import CvSubmit from "./cvSubmit";
import { Bounce, toast } from "react-toastify";

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
  const [dataUser, setDataUser] = useState("");

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
      website: "",
      gender:"",
      birth_date: "",
      experience: "",
      cv:"",
      industry_job:"",

  });
  const [logoFile, setLogoFile] = useState(null);
  const [previewLogo, setPreviewLogo] = useState(null);
  const [jobBookmarked, setJobBookmarked] = useState(null);
  const [jobApplied, setJobApplied] = useState(null);
  const handleLogoCompanyChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogoFile(file); 
      setPreviewLogo(URL.createObjectURL(file));
    }
  };

  const handleLogoCompanyUpload = async () => {
    if (!logoFile) {
      // alert("Vui lòng chọn logo trước khi upload!");
      toast.error('Vui lòng chọn logo trước khi upload!', {
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
      return;
    }

    const formData = new FormData();
    formData.append("logo", logoFile);

    try {
      const response = await axios.post(
        "/api/company/upload-logo",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,

          },
        }
      );
      // console.log("Upload logo thành công!", response.data);
      // alert("Upload logo thành công!");
      toast.success('Upload logo thành công!', {
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

    } catch (error) {
      console.error("Lỗi khi upload logo:", error);
    }
  };  
  const handleLogoJobSeekerChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogoFile(file); 
      setPreviewLogo(URL.createObjectURL(file)); // Xem trước logo
    }
  };

  const handleLogoJobSeekerUpload = async () => {
    if (!logoFile) {
      // alert("Vui lòng chọn logo trước khi upload!");
      toast.error('Vui lòng chọn logo trước khi upload!', {
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
      return;
    }

    const formData = new FormData();
    formData.append("logo", logoFile);

    try {
      const response = await axios.post(
        "/api/job-seeker/upload-logo",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,

          },
        }
      );
      console.log("Upload logo thành công!", response.data);
      // alert("Upload logo thành công!");
      toast.success('Upload logo thành công!', {
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
    } catch (error) {
      console.error("Lỗi khi upload logo:", error);
      // toast.error(`Lỗi khi upload logo: ${error}`, {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      //   transition: Bounce,
      // });
    }
  };

  
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
        // console.log("lấy dl:",response.data);
        setDataUser(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchDataUser(); 
  }, []);
  
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
          // logo: dataUser.logo || "",
          gender: dataUser.gender || "",
          birth_date: dataUser.birth_date || "",
          experience: dataUser.experience || "",
          website: dataUser.website || "",
          cv: dataUser.cv || "",
          industry_job: dataUser.industry_job || "",
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
    // console.log('selectedProvince:',selectedProvince);

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
  };
  const fetchJobBookmark = async () => {
    try {
        const response = await axios.get(`/user/jobs/bookmarks`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        setJobBookmarked(response.data);
    } catch (error) {
        console.error("Error fetching job bookmark", error);
    }
  }
  const fetchJobApplied = async () => {
    try {
        const response = await axios.get(`/user/jobs/applied`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        setJobApplied(response.data);
    } catch (error) {
        console.error("Error fetching job apply", error);
    }
  }

   useEffect(() => {
    if(user == 3){
          fetchJobBookmark();
          fetchJobApplied();
        }

  }, [user, token]);
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
        console.log("Update successful:", response.data);
        console.log(formData);

        navigate("/profile"); 
        window.location.reload()    
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



  
  return (
    <>
      <MainLayout>
        <div className="container-profile">
          <div className="inner-profle">
            <Tabs onHandleTitle={HandleTitle} user = {user} />
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

                    handleLogoCompanyChange={handleLogoCompanyChange}
                    handleLogoCompanyUpload={handleLogoCompanyUpload}

                    handleLogoJobSeekerChange={handleLogoJobSeekerChange}
                    handleLogoJobSeekerUpload={handleLogoJobSeekerUpload}
                    previewLogo={previewLogo}
                    />
                ) 
                : titleTabs === "jobsave" ? (
                  <JobSave jobs = {jobBookmarked} />
                ) 
                : titleTabs === "Cv đã nộp" ? (
                  <CvSubmit jobs = {jobApplied}/>
                ) 
                : (
                  <ChangePassword token= {token}/>
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
