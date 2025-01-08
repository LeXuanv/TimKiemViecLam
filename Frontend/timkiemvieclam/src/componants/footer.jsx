import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaGoogle, FaYoutube } from "react-icons/fa";
import './footer.scss';

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div className="innerFooter">
          <div className="fullIcon">
            <div className="innerIcon">
              <div className="icon">
                <FaFacebookF />
              </div>
              <div className="icon">
                <FaInstagram />
              </div>
              <div className="icon">
                <FaTwitter />
              </div>
              <div className="icon">
                <FaGoogle />
              </div>
              <div className="icon">
                <FaYoutube />
              </div>
            </div>
          </div>
          <div className="fullTab">
            <div className="innerTab">
              <div className="tab">
                <p>Home</p>
              </div>
              <div className="tab">
                <p>News</p>
              </div>
              <div className="tab">
                <p>About</p>
              </div>
              <div className="tab">
                <p>Contact Us</p>
              </div>
              <div className="tab">
                <p>Our Team</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="chu">
        <p>Copyright @2025 | Designed by TPV</p>
      </div>
    </>
  );
};

export default Footer;
