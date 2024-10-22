

const SearchCty = () =>{
    return(
        <>
            <>
            <div className="box-search-job">
                <div className="box-search">
                    <form id="frm-search-job">
                        <div className="group-search">
                            <div className="item">
                                <input className="form-input" placeholder="Nhập tên công ty"/>
                            </div>
                            {/* <div className="search-tinh">
                                <div className="icon">
                                    <FaMapMarkerAlt />
                                </div>
                                <div className="select-city">
                                    <select name="city" id="city">
                                        <option value>Tất cả các tỉnh</option>
                                        <option value="1">Ha noi</option>
                                        <option value="2">TP Ho Chi Minh</option>
                                    </select>
                                </div>
                            </div>
                            <div className="search-nganhnghe">
                                <div className="icon">
                                    <PiBagSimpleFill />
                                </div>
                                <div className="select-nghe">
                                    <select name="nghe" id="nghe">
                                        <option value>Tất cả các ngành nghề</option>
                                        <option value="cntt">cntt</option>
                                        <option value="mkt">mkt</option>
                                    </select>
                                </div>
                            </div> */}
                            <div className="button-search">
                                <button>Tìm kiếm</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
        </>
    )
}

export default SearchCty;