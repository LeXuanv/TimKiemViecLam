
import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { PiBagSimpleFill } from "react-icons/pi";

function SearchCongViec({ 
    // handleSearch,
    // jobTitle,
    // setJobTitle,
    // province,
    // setProvince,
    // category,
    // setCategory,
    // provinces,
    // categories

    state,
    dispatch,
    handleSearch
}) {
    const { jobTitle, category, province, provinces, categories } = state;
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(jobTitle, category, province);
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
                                onChange={(e) =>
                                    dispatch({ type: "SET_JOB_TITLE", payload: e.target.value })
                                }
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
                                    value={province} 
                                    onChange={(e) =>
                                        dispatch({ type: "SET_PROVINCE", payload: e.target.value })
                                    }   
                                >
                                    <option value="">Tất cả các tỉnh</option>
                                    {provinces.map((province) => (
                                        <option key={province.code} value={province.code}>
                                            {province.name}
                                        </option>
                                    ))}
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
                                    onChange={(e) =>
                                        dispatch({ type: "SET_CATEGORY", payload: e.target.value })
                                    }
                                >
                                    <option value="">Tất cả các ngành nghề</option>
                                    {categories.map((category) => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))}
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
