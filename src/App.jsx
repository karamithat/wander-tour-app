import React from 'react'
import Cards from './components/Cards/Cards'
import Discount from './components/Discount/Discount'
import Home from './components/Home/Home'
import Navbar from "./components/Navbar/Navbar"
import Tours from './components/Tours/Tours'
import Review from './components/Review/Review'
import Staff from './components/Staff/Staff'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Cards/>
      <Tours/>
      <Discount/>
      <Review/>
      <Staff/>
      <Footer/>
    </div>
  )
}

export default App