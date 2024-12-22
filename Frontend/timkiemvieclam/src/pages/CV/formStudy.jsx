


const FormStudy = ({
    formData,
    handleChange,
    setFormData,
}) => {
    const handleDegreeChange = (e) => {
        const { value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            degree: value,
        }));
    };
    return(
        <>
            <div className="fullStudy">
                <div className="name">
                    <p>Tên trường:</p>
                    <input
                        name = "university" 
                        placeholder="Nhập tên trường bạn..."
                        value={formData.university}
                        onChange={handleChange}
                    />
                </div>
                <div className="bang">
                    <p>Loại bằng:</p>
                    <select 
                        name="degree"
                        value={formData.degree} 
                        onChange={handleDegreeChange}

                    >
                        <option value="">Loại bằng</option>
                        <option value="Xuất sắc">Xuất sắc</option>
                        <option value="Giỏi">Giỏi</option>
                        <option value="Khá">Khá</option>
                        <option value="Trung bình">Trung bình</option>
                    </select>
                </div>
                <div className="name">
                    <p>Chuyên ngành:</p>
                    <input 
                        name ="major"
                        placeholder="Nhập tên chuyên ngành bạn..."
                        value={formData.major}
                        onChange={handleChange}
                    />
                </div>
                <div className="name">
                    <p>Điểm:</p>
                    <input 
                        name ="gpa"
                        placeholder="Nhập điểm GPA của bạn..."
                        value={formData.gpa}
                        onChange={handleChange}
                    />
                </div>
                <div className="name">
                    <p>Năm tốt nghiệp</p>
                    <input 
                    name ="graduation_year"
                    placeholder="Nhập năm tốt nghiệp của bạn..."
                    value={formData.graduation_year}
                    onChange={handleChange}
                    />
                </div>
                
            </div>
        </>
    )
}

export default FormStudy;