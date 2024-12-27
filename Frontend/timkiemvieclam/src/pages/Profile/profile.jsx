import { useEffect, useState, useReducer } from "react";
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


const Profile = () => {
  // const [titleTabs, setTitleTabs] = useState("Hồ sơ");
  // const token = localStorage.getItem('authToken');
  // const [provinces, setProvinces] = useState([]); 
  // const [districts, setDistricts] = useState([]); 
  // const [wards, setWards] = useState([]); 
  // const [selectedProvince, setSelectedProvince] = useState("");
  // const [selectedDistrict, setSelectedDistrict] = useState("");
  // const [selectedWard, setSelectedWard] = useState("");
  // const [form] = Form.useForm();
  // const navigate = useNavigate();
  // const [dataUser, setDataUser] = useState("");

  // const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     description: "",
  //     address: "",
  //     scale: "",
  //     ward_code: "",
  //     province_code:"",
  //     district_code:"",
  //     phone_number: "",
  //     website: "",
  //     gender:"",
  //     birth_date: "",
  //     experience: "",
  //     cv:"",
  //     industry_job:"",

  // });
  // const [logoFile, setLogoFile] = useState(null);
  // const [previewLogo, setPreviewLogo] = useState(null);
  // const [jobBookmarked, setJobBookmarked] = useState(null);
  // const [jobApplied, setJobApplied] = useState(null);
  // const [currentPageBookmarked, setCurrentPageBookmarked] = useState(1);
  // const [totalPagesBookmarked, setTotalPagesBookmarked] = useState(1);
  // const [loadingBookmarked, setLoadingBookmarked] = useState(false);
  // const [currentPageApplied, setCurrentPageApplied] = useState(1);
  // const [totalPagesApplied, setTotalPagesApplied] = useState(1);
  // const [loadingApplied, setLoadingApplied] = useState(false);


  const [state, dispatch] = useReducer(reducer, initialState);
  const token = localStorage.getItem("authToken");
  const [form] = Form.useForm();
  const navigate = useNavigate();


  const handleLogoCompanyChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // setLogoFile(file); 
      dispatch({ type: "SET_LOGO_FILE", payload: file });

      // setPreviewLogo(URL.createObjectURL(file));
      dispatch({ type: "SET_PREVIEW_LOGO", payload: URL.createObjectURL(file) });

    }
  };

  const handleLogoCompanyUpload = async () => {
    if (!state.logoFile) {
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
    formData.append("logo", state.logoFile);

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
      // setLogoFile(file); 
      dispatch({ type: "SET_LOGO_FILE", payload: file });

      // setPreviewLogo(URL.createObjectURL(file));
      dispatch({ type: "SET_PREVIEW_LOGO", payload: URL.createObjectURL(file) });
    }
  };

  const handleLogoJobSeekerUpload = async () => {
    if (!state.logoFile) {
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
    formData.append("logo", state.logoFile);

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
    // setTitleTabs(newtitle);
    dispatch({ type: "SET_TITLE_TABS", payload: newtitle });

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
        // setDataUser(response.data);
        dispatch({ type: "SET_DATA_USER", payload: response.data });

      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchDataUser(); 
  }, []);
  
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
        dispatch({ type: "SET_DISTRICTS", payload: response.data });
        dispatch({ type: "SET_WARDS", payload: [] });
        dispatch({ type: "SET_SELECTED_DISTRICT", payload: "" });
        dispatch({ type: "SET_SELECTED_WARD", payload: "" });

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
        dispatch({ type: "SET_SELECTED_WARD", payload: "" });


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
  const handleUpdate = async () => {
    
    try {
        const response = await axios.post("/api/user/update", state.formData, {
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



  
  return (
    <>
      <MainLayout>
        <div className="container-profile">
          <div className="inner-profle">
            <Tabs onHandleTitle={HandleTitle} user = {user} />
            <div className="all-content">
              <div className="inner-content">
                {state.titleTabs === "Hồ sơ" ? (
                  <DetailFile 
                    user={user} 
                    dataUser={state.dataUser} 
                    token={token}
                    provinces={state.provinces}
                    districts={state.districts}
                    wards={state.wards}
                    selectedProvince={state.selectedProvince}
                    selectedDistrict={state.selectedDistrict}
                    selectedWard={state.selectedWard}
                    form={form}
                    formData={state.formData}
                    setFormData={(updatedData) =>
                        dispatch({ type: "SET_FORM_DATA", payload: updatedData })
                    }
                    handleUpdate={handleUpdate}
                    handleChange={handleChange}
                    handleProvinceChange={handleProvinceChange}
                    handleDistrictChange={handleDistrictChange}
                    handleWardChange={handleWardChange}

                    handleLogoCompanyChange={handleLogoCompanyChange}
                    handleLogoCompanyUpload={handleLogoCompanyUpload}

                    handleLogoJobSeekerChange={handleLogoJobSeekerChange}
                    handleLogoJobSeekerUpload={handleLogoJobSeekerUpload}
                    previewLogo={state.previewLogo}
                    />
                ) 
                : state.titleTabs === "jobsave" ? (
                  <JobSave 
                    token={token}
                    state = {state}
                    dispatch = {dispatch}
                   />
                ) 
                : state.titleTabs === "Cv đã nộp" ? (
                  <CvSubmit 
                    token={token}
                    state = {state}
                    dispatch = {dispatch}
                  />
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
