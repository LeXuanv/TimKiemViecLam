import React from 'react';
import { TbBrandTwitter } from "react-icons/tb";
import { CiInstagram } from "react-icons/ci";
import { SlSocialLinkedin } from "react-icons/sl";
import { LuFacebook } from "react-icons/lu";
import './footer.scss';

const Footer = () => {
  return (
    <footer class="footer">
     <div class="container">
      <div class="row">
        <div class="footer-col">
          <h1>Tìm kiếm việc làm</h1>
          <p>Uy tín - Chất lượng</p>
        </div>
        <div class="footer-col">
          <h4>get help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">shipping</a></li>
            <li><a href="#">returns</a></li>
            <li><a href="#">order status</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>online shop</h4>
          <ul>
            <li><a href="#">watch</a></li>
            <li><a href="#">bag</a></li>
            <li><a href="#">shoes</a></li>
            <li><a href="#">dress</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <div class="social-links">
            <a href="#"><LuFacebook /></a>
            <a href="#"><TbBrandTwitter /></a>
            <a href="#"><CiInstagram /></a>
            <a href="#"><SlSocialLinkedin /></a>
          </div>
        </div>
      </div>
     </div>
  </footer>
  );
};

export default Footer;
