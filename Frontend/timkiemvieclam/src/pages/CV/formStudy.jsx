


const FormStudy = () => {
    return(
        <>
            <div className="fullStudy">
                <div className="name">
                    <input placeholder="Nhập tên trường bạn..."/>
                </div>
                <div className="bang">
                    <select name="bang" id="bang">
                        <option value>Loại bằng</option>
                        <option value="1">Xuất sắc</option>
                        <option value="2">Giỏi</option>
                        <option value="3">Khá</option>
                        <option value="4">Trung bình</option>
                    </select>
                </div>
                <div className="name">
                    <input placeholder="Nhập tên chuyên ngành bạn..."/>
                </div>
                <div className="name">
                    <input placeholder="Nhập điểm GPA của bạn..."/>
                </div>
                <div className="name">
                    <input placeholder="Nhập năm tốt nghiệp của bạn..."/>
                </div>
            </div>
        </>
    )
}

export default FormStudy;