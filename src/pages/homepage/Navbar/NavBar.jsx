import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../../images/1x/Artboard 1.png'
import './navbar.css'

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className='NavBarDiv'>

        <img onClick={()=>navigate('/')} className = 'image'src ={logo} alt='' />
        <ul style={{display:'flex', width:'20%',gap:'20px',listDecoration:'none'}}>
          <li><NavLink to ={'/signup'} style= {({isActive})=> isActive?{color:'#0071BC'}:{color:'white'}} className='navlink' >Signup</NavLink></li>
          <li><NavLink to ={'/login'} style= {({isActive})=> isActive?{color:'#0071BC'}:{color:'white'}} className='navlink' >Login</NavLink></li>
        </ul>
        
        
        
    </div>
  )
}

export default NavBar