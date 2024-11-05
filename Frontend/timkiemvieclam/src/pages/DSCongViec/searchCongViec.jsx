// import { FaMapMarkerAlt} from "react-icons/fa";
// import { PiBagSimpleFill } from "react-icons/pi";

// const SearchCongViec = () => {
//     return(
//         <>
//             <div className="box-search-job">
//                 <div className="box-search">
//                     <form id="frm-search-job">
//                         <div className="group-search">
//                             <div className="item">
//                                 <input className="form-input" placeholder="Nhập thông tin việc làm"/>
//                             </div>
//                             <div className="search-tinh">
//                                 <div className="icon">
//                                     <FaMapMarkerAlt />
//                                 </div>
//                                 <div className="select-city">
//                                     <select name="city" id="city">
//                                         <option value>Tất cả các tỉnh</option>
//                                         <option value="1">Ha noi</option>
//                                         <option value="2">TP Ho Chi Minh</option>
//                                     </select>
//                                 </div>
//                             </div>
//                             <div className="search-nganhnghe">
//                                 <div className="icon">
//                                     <PiBagSimpleFill />
//                                 </div>
//                                 <div className="select-nghe">
//                                     <select name="nghe" id="nghe">
//                                         <option value>Tất cả các ngành nghề</option>
//                                         <option value="cntt">cntt</option>
//                                         <option value="mkt">mkt</option>
//                                     </select>
//                                 </div>
//                             </div>
//                             <div className="button-search">
//                                 <button>Tìm kiếm</button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default SearchCongViec;



import React, { useState } from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { PiBagSimpleFill } from "react-icons/pi";
function SearchCongViec({ onSearch }) {
    const [jobTitle, setJobTitle] = useState("");
    const [city, setCity] = useState("");
    const [category, setCategory] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(jobTitle);
    };

    return (
        <div className="box-search-job">
            <div className="box-search">
                <form id="frm-search-job" onSubmit={handleSubmit}>
                    <div className="group-search">
                        <div className="item">
                            <input 
                                className="form-input" 
                                placeholder="Nhập thông tin việc làm" 
                                value={jobTitle}
                                onChange={(e) => setJobTitle(e.target.value)}
                            />
                        </div>
                        <div className="search-tinh">
                            <div className="icon">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="select-city">
                                <select 
                                    name="city" 
                                    id="city" 
                                    value={city} 
                                    onChange={(e) => setCity(e.target.value)}
                                >
                                    <option value="">Tất cả các tỉnh</option>
                                    <option value="1">Hà Nội</option>
                                    <option value="2">TP Hồ Chí Minh</option>
                                </select>
                            </div>
                        </div>
                        <div className="search-nganhnghe">
                            <div className="icon">
                                <PiBagSimpleFill />
                            </div>
                            <div className="select-nghe">
                                <select 
                                    name="nghe" 
                                    id="nghe" 
                                    value={category} 
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value="">Tất cả các ngành nghề</option>
                                    <option value="cntt">CNTT</option>
                                    <option value="mkt">Marketing</option>
                                </select>
                            </div>
                        </div>
                        <div className="button-search">
                            <button type="submit">Tìm kiếm</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SearchCongViec;
