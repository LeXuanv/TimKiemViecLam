const ChiTietTuyenDung = ({job}) =>{
    if (!job) return null;
    return(
        <>
            <div className="chitiettuyendung">
                <div className="tieudechitiet">
                    <span>Chi tiết tin tuyển dụng</span>
                </div>
                {/* <div className="cacyeucau">
                    <p className="tieudeyeucau">Mô tả công việc</p>
                    <p className="chitietyeucau">
                        - Mời khách hàng tham gia hội thảo về sức khỏe theo data có sẵn từ Công ty cung cấp <br/>
                        - Hỗ trợ khách hàng đặt dịch vụ <br/>
                        - Chăm sóc và đồng hành cùng khách hàng trong hành trình sống khỏe <br/>
                        - Lên kế hoạch công việc và báo cáo hàng tuần <br/>
                        - Thực hiện các công việc khác theo chỉ thị của quản lý <br/>
                    </p>

                    <p className="tieudeyeucau">Yêu cầu ứng viên</p>
                    <p className="chitietyeucau">
                        - Tốt nghiệp cao đẳng, đại học hoặc sinh viên đang chờ bằng <br/>
                        - Ưu tiên ứng viên có kinh nghiệm trong lĩnh vực chăm sóc sức khỏe, y tế. <br/>
                        - Không có kinh nghiệm sẽ được đào tạo từ Công ty <br/>
                        - Kỹ năng giao tiếp tốt <br/>
                        - Yêu thích công việc bán hàng, thích gặp gỡ khách hang <br/>
                    </p>

                    <p className="tieudeyeucau">Quyền lợi</p>
                    <p className="chitietyeucau">
                        - Lương cứng 7M + Thưởng hoa hồng 7 – 10% + Thưởng nóng <br/>
                        - Chế độ BHXH, BHYT, BHTN, nghỉ lễ tết theo quy định của nhà nước <br/>
                        - Được tham gia quy trình đào tạo bài bản và đặc biệt hưởng lương trong thời gian đào tạo. <br/>
                    </p>

                    <p className="tieudeyeucau">Địa điểm làm việc</p>
                    <p className="chitietyeucau">
                        -  Hà Nội: 85 Nguyễn Du, Phường Nguyễn Du, Hai Bà Trưng <br/>
                    </p>

                    <p className="tieudeyeucau">Thời gian làm việc</p>
                    <p className="chitietyeucau">
                        - Thứ 2 - Thứ 6 (từ 08:00 đến 17:30) <br/>
                    </p>
                </div> */}
                <span>{job.description}</span>
            </div>
        </>
    )
}

export default ChiTietTuyenDung;