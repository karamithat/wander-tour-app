import React, { useEffect } from "react";
import "./Tours.scss";

import tourImage1 from "../../assets/image2.jpeg";
import tourImage2 from "../../assets/image3.jpeg";

import { AiFillStar } from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";

const Tours = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="tours container section">
      <div className="secContainer">
        <span className="secTitle">Hot Tours</span>
        <div className="tourContainer">
          <div data-aos="fade-up" data-aos-duration="2000" className="singleTour grid">
            <div className="imgDiv">
              <img src={tourImage1} alt="" />
            </div>
            <div data-aos="fade-up" data-aos-duration="3000" className="tourInfo">
              <span className="tourTitle">Spain, Benidorm</span>
              <div className="stars_review flex">
                <div className="stars">
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                </div>
                <small className="custReview">2 Customer Review</small>
              </div>
              <p>
                Spain, a country on Europe’s Iberian Peninsula, includes 17
                autonomous regions with diverse geography and cultures. Capital
                city Madrid is home to the Royal Palace and Prado Museum,
                housing works by European masters.
              </p>
              <button className="btn">Buy This Tour</button>
            </div>
            <span className="price">$790</span>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className="singleTour grid">
            <div className="imgDiv">
              <img src={tourImage2} alt="" />
            </div>
            <div data-aos="fade-up" data-aos-duration="3500" className="tourInfo">
              <span className="tourTitle">Maritius Island, India</span>
              <div className="stars_review flex">
                <div className="stars">
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                </div>
                <small className="custReview">12 Customer Review</small>
              </div>
              <p>
                Maritius, an island nation in the Indian Ocean about 2,000
                kilometers (1,250 miles) off the southeast coast of the African
                continent, is known for its beaches, lagoons and reefs. The
                mountainous interior includes Black River Gorges National Park,
                with rainforests, waterfalls, hiking trails and wildlife like
                the flying fox.
              </p>
              <button className="btn">Buy This Tour</button>
            </div>
            <span className="price">$590</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
