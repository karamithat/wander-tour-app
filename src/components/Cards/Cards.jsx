import React, {useEffect} from 'react'
import './Cards.scss'
import CardImage1 from '../../assets/cardImage1.jpg'
import CardImage2 from '../../assets/cardImage2.jpeg'
import CardImage3 from '../../assets/cardImage3.jpg'
import { AiOutlineSwapRight } from 'react-icons/ai'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Cards = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='cards'>
      <div data-aos="fade-up" data-aos-duration="2000" className="cardContainer container grid">
        <div className="singleCard">
          <div className="imgDiv">
            <img src={CardImage1} />
          </div>
          <h4 className='textDiv'>
            Balloon Flight
          </h4>
        </div>
        <div className="singleCard">
          <div className="imgDiv">
            <img src={CardImage2} />
          </div>
          <h4 className='textDiv'>
            Beach Travels
          </h4>
        </div>
        <div className="singleCard">
          <div className="imgDiv">
            <img src={CardImage3} />
          </div>
          <h4 className='textDiv'>
            Mountain Tour
          </h4>
        </div>
      </div>
      <div className="spanText flex">
        Other Tours <AiOutlineSwapRight className='icon' />
      </div>
    </div>
  )
}

export default Cards