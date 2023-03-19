import React, { useEffect } from "react";
import "./Discount.scss";
import video from "../../assets/video.mp4";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Discount = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
    <div className="discount section">
      <div className="secContainer">
        <video src={video} autoPlay loop muted></video>
        <div className="textDiv">
          <span data-aos="fade-up" data-aos-duration="2000" className="title">Sign Up for 35% Discount</span>
          <p data-aos="fade-up" data-aos-duration="2500">
            Want to get an instat 35% discount on your next trip? Just sign up
            for our newsletter and we'll send you a coupon with our best offer.
          </p>

          <div data-aos="fade-up" data-aos-duration="3000" className="input_btn flex">
            <input type="text" placeholder="Enter your email" />
            <button className="btn">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
