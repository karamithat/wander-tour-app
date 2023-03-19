import React from 'react'
import './Staff.scss'

import user4 from '../../assets/user4.jpg'
import user5 from '../../assets/user5.jpg'
import user6 from '../../assets/user6.jpg'

const Staff = () => {
  return (
    <div className='staff section'>
      <div className="secContainer">
        <span className="secTitle">
          Different People - One Mission
        </span>

        <div className="staffContainer container grid">
          <div className="singleStaff">
            <div className="imgDiv">
              <img src={user4} alt="" />
            </div>

            <span className="name">Graham Scott</span>
            <div className="jobTitle">CEO Wander</div>
            <div className="contact">+ 344 990 7758 90</div>
          </div>
          <div className="singleStaff">
            <div className="imgDiv">
              <img src={user5} alt="" />
            </div>

            <span className="name">Luke Hamill</span>
            <div className="jobTitle">Software Engineer</div>
            <div className="contact">+ 344 990 7758 90</div>
          </div>
          <div className="singleStaff">
            <div className="imgDiv">
              <img src={user6} alt="" />
            </div>

            <span className="name">Bobby King</span>
            <div className="jobTitle">IT Specialist</div>
            <div className="contact">+ 344 990 7758 90</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Staff