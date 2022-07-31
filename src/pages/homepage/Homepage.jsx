import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './footer/Footer'
import Gain from './GainPage/Gain'


const Homepage = () => {
  return (
    <div>
        <Gain />
        <Footer/>
    </div>
  )
}

export default Homepage