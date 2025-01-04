import React from 'react';
import LogoApp from "../assets/img/Logo.png" 
import './footer.scss';

const Footer = () => {
  return (
    <footer class="footer">
     <div class="container">
      <div class="grid">
        <div class="footer-col">
          <img src={LogoApp} alt="logoApp" />
        </div>
        <div className="thanhvien">
          <div className="truongnhom">
              <div className="chucvu">
                <p>Trưởng nhóm:</p>
              </div>
              <div className="ten">
                <p>Bùi Văn Thiệu - B20DCCN671</p>
                
              </div>
          </div>
          <div className="thanhviens">
            <div className="thanhvien1">
              <div className="chucvu">
                <p>Thành viên:</p>
              </div>
              <div className="ten">
                <p>Trần Văn Phúc - B20DCCN515</p>
                
              </div>
            </div>
            <div className="thanhvien2">
              <div className="chucvu">
                <p>Thành viên:</p>
              </div>
              <div className="ten">
                <p>Lê Xuân Vũ - B20DCCN743</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
  </footer>
  );
};

export default Footer;
