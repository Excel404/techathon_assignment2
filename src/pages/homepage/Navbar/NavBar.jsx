import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../images/1x/Artboard 1.png'
import './navbar.css'

const NavBar = () => {
  return (
    <div className='NavBarDiv'>

        <img className = 'image'src ={logo} alt='' />
        <ul style={{display:'flex', width:'20%',gap:'20px',listDecoration:'none'}}>
          <li><NavLink to ={'/signup'} style= {({isActive})=> isActive?{color:'blue'}:{color:'white'}} className='navlink' >Signup</NavLink></li>
          <li><NavLink to ={'/login'} style= {({isActive})=> isActive?{color:'blue'}:{color:'white'}} className='navlink' >Login</NavLink></li>
        </ul>
        
        
        
    </div>
  )
}

export default NavBar