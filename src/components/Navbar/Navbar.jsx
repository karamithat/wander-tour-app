import React, { useState } from "react";
import "./Navbar.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState("menuDiv");

  const showNavbar = () => {
    if (active === "menuDiv") {
      setActive("menuDiv activeNavbar");
    } else {
      setActive("menuDiv");
    }
  };

  // remove the active class when the close icon is clicked
  const closeNavbar = () => {
    setActive("menuDiv");
  };

  return (
    <div>
      <div className="header flex">
        <div className="logoDiv">
          <h3 className="logo">Wonder</h3>
        </div>
        <div className={active}>
          <ul className="menuLists">
            <li className="navItem">
              <a href="" onClick={closeNavbar} className="menuLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="" onClick={closeNavbar} className="menuLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="" onClick={closeNavbar} className="menuLink">
                Our Tours
              </a>
            </li>
            <li className="navItem">
              <a href="" onClick={closeNavbar} className="menuLink">
                Gallery
              </a>
            </li>
            <li className="navItem">
              <a href="" onClick={closeNavbar} className="menuLink">
                Blog
              </a>
            </li>
            <li className="navItem">
              <a href="" onClick={closeNavbar} className="menuLink">
                Contact
              </a>
            </li>
            <li className="navItem">
              <a href="" onClick={closeNavbar} className="menuLink">
                Pages
              </a>
            </li>
          </ul>

          <div onClick={closeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div className="socialIcons flex">
          <BsFacebook className="icon" />
          <BsTwitter className="icon" />
          <BsYoutube className="icon" />
          <BsInstagram className="icon" />
        </div>

        <div onClick={showNavbar} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
