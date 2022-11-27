import React from "react";
import CompanyLogo from "../../images/logo.svg";
import FacebookIcon from "../../images/icon-facebook.svg";
import InstagramIcon from "../../images/icon-instagram.svg";
import PinterestIcon from "../../images/icon-pinterest.svg";
import TwitterIcon from "../../images/icon-twitter.svg";
import bgPattern from "../../images/bg-pattern-footer-desktop.svg";

const Footer = () => {
  return (
    <div className="footer">
      {/* <img src={bgPattern} alt="" /> */}
      <div className="footer_top">
        <img src={CompanyLogo} alt="company logo" />
        <div className="footer_socials">
          <img className="social" src={FacebookIcon} alt="facebook" />
          <img className="social" src={InstagramIcon} alt="instagram" />
          <img className="social" src={TwitterIcon} alt="twitter" />
          <img className="social" src={PinterestIcon} alt="pinterest" />
        </div>
      </div>
      <div className="footer_navigation">
        <div className="nav_container">
          <p>Our company</p>
          <nav>
            <a href=""> How we work</a>
            <a href=""> Why Insure?</a>
            <a href="">View plans</a>
            <a href=""> Reviews</a>
          </nav>
        </div>
        <div className="nav_container">
          <p> Help me</p>
          <nav>
            <a href=""> FAQ</a>
            <a href=""> Terms of use</a>
            <a href="">Privacy policy</a>
            <a href=""> Cookies</a>
          </nav>
        </div>
        <div className="nav_container">
          <p>Contact</p>
          <nav>
            <a href=""> Sales</a>
            <a href=""> Support</a>
            <a href="">Live chat</a>
          </nav>
        </div>
        <div className="nav_container">
          <p> Others</p>
          <nav className="">
            <a href=""> Careers</a>
            <a href=""> Press</a>
            <a href="">Licenses</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
