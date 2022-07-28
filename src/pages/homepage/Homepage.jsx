import React from 'react'
import { Link } from 'react-router-dom'
import Gain from './GainPage/Gain'


const Homepage = () => {
  return (
    <div>
        <Gain />
        <Link to ={'/signup'}>SignUp</Link>
    </div>
  )
}

export default Homepage