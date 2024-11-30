import { useContext, useEffect, useState } from "react";
import MainLayout, { AddressContext } from "../mainLayout";
import "./profile.scss";
import Tabs from "./tabs";
import DetailFile from "./detailFile";
import ChangePassword from "./changePassword";
import axios from "axios";
import JobSave from "./JobSave";

const Profile = () => {
  const [titleTabs, setTitleTabs] = useState("Hồ sơ");
  const [data, setData] = useState([]);
  const [name, setName] = useState();
  const [email, setEmail] = useState("");
  const [sdt, setSdt] = useState("");
  const [tinh, setTinh] = useState("");
  const [huyen, setHuyen] = useState("");
  const [xa, setXa] = useState("");
  const [address, setAddress] = useState("");
  const [genner, setGenner] = useState("");
  const [date, setdate] = useState("");
  const [exp, setExp] = useState("");
  const [password, setPassword] = useState("");
  
  const [dataUser, setDataUser] = useState("");

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await axios.get('/api/province');
        setProvinces(response.data);
      } catch (error) {
        console.error('Lỗi khi lấy danh sách tỉnh:', error);
      }
    };

    fetchProvinces();
  }, []);
  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        const response = await axios.get(`api/district/${selectedProvince}`);
        setDistricts(response.data);
      } catch (error) {
        console.error('Lỗi khi lấy danh sách huyện:', error);
      }
    };

    fetchDistricts();
  }, [selectedProvince]);
  useEffect(() => {
    const fetchWards = async () => {
      try {
        const response = await axios.get(`api/ward/${selectedDistrict}`);
        setWards(response.data);
        console.log("Danh sách xã:", response.data);
      } catch (error) {
        console.error('Lỗi khi lấy danh sách xã:', error);
      }
    };

    fetchWards();
  }, [selectedDistrict]);

  const HandleTitle = (newtitle) => {
    setTitleTabs(newtitle);
  };
  const user =  localStorage.getItem("user");
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("authToken");
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

    fetchUserData(); 
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

  return (
    <>
      <MainLayout>
        <div className="container-profile">
          <div className="inner-profle">
            <Tabs onHandleTitle={HandleTitle} />
            <div className="all-content">
              <div className="inner-content">
                {titleTabs === "Hồ sơ" ? (
                  <DetailFile user={user} dataUser={dataUser} />
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
