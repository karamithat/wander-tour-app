import React from "react";
import "./Review.scss";
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";


const Review = () => {
  return (
    <div className="review section">
      <div className="secContainer">
        <span className="secTitle">What People Say</span>

        <div className="reviewContainer container grid">
          <div className="singleReview">
            <div className="imgDiv">
              <img src={user1} alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis, eligendi.
            </p>
            <div className="name">Nicole Webb</div>
          </div>
          <div className="singleReview">
            <div className="imgDiv">
              <img src={user3} alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis, eligendi.
            </p>
            <div className="name">Joseph Gonzalez</div>
          </div>
          <div className="singleReview">
            <div className="imgDiv">
              <img src={user2} alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis, eligendi.
            </p>
            <div className="name">Joe Doe</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
