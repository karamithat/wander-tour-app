import React from "react";
import "./Footer.scss";
import { HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="secContainer container">
        <div className="content grid">
          <div className="row">
            <div className="spanText">CONTACT US</div>
            <div className="contactDiv">
              <span className="flex">
                <HiPhone className="icon" />
                <span>+244 334 555 667</span>
              </span>
              <span className="flex">
                <MdEmail className="icon" />
                <span>contact@wonder.com</span>
              </span>
              <span className="flex">
                <FaLocationArrow className="icon" />
                <span>1506 Wilkinson Street,Nashville TN</span>
              </span>
            </div>
          </div>

          <div className="row">
            <div className="spanText">POPULAR NEWS</div>

            <div className="singleNews">
              <span className="text">
                Your Personal Guide to most places to visit in the world.
              </span>
              <p>Mar 18, 2023</p>
            </div>

            <div className="singleNews">
              <span className="text">
                The grand reveal of the most beautiful places in the world.
              </span>
              <p>Mar 19, 2023</p>
            </div>
          </div>

          <div className="row">
            <div className="spanText">QUICK LINKS</div>
            <div className="footerLinks">
              <ul>
                <li>About Us</li>
                <li>Our Team</li>
                <li>Gallery</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bottomDiv flex">
          <p>Copyright 2023 Mithat Kara - All rights reserved</p>

          <div className="social flex">
            <BsFacebook className="icon" />
            <BsTwitter className="icon" />
            <BsYoutube className="icon" />
            <BsInstagram className="icon" />
          </div>

          <p className="policy">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
