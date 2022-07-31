import React, { useEffect, useState } from 'react'
import './dashboard.css'
import personIcon from '../../images/1x/personicon.svg'
import { useNavigate } from 'react-router-dom';
import UserProfile from './UserProfile';

export const Welcome= ()=>{
  const [user, setUser]= useState();
  useEffect(()=>{
    if(sessionStorage.getItem('user') !== null){
        
        const userInfo = sessionStorage.getItem('user');
        const userInfoString = JSON.parse(userInfo);
        setUser(userInfoString);
        
    }
    
    

},[]);
  
  return(
    <div className ='welcomeDiv'>
      <h1 className='header'>Welcome {user?.username}</h1>
        
    </div>
  )
}
export const Courses= ()=>{
  const [user, setUser]= useState();
  useEffect(()=>{
    if(sessionStorage.getItem('user') !== null){
        
        const userInfo = sessionStorage.getItem('user');
        const userInfoString = JSON.parse(userInfo);
        setUser(userInfoString);
        
    }
    
    

},[]);
  
  return(
    <div className ='welcomeDiv'>
      <h1 className='header'>Your track is {user?.course}</h1>
        <p style={{color:'black', marginTop:'1rem'}}>Kindly click the link below to join the telegram group for {user?.course}</p>
        <p style={{color:'#0071BC'}} onClick={()=>{window.open('https://wa.link/115kmn', '_blank')}}> https://wa.link/115kmn</p>
    </div>
  )
}

const Dashboard = () => {
  const [user, setUser]= useState();
  const [show, setShow]= useState(true);
  const [showProfile, setShowProfile]= useState(false);
  const [showCourse, setShowCourse]= useState(false);
  const navigate = useNavigate();
  const handleClick = ()=>{
    sessionStorage.removeItem('user');
    navigate('/login')
  }
  useEffect(()=>{
    if(sessionStorage.getItem('user') !== null){
        
        const userInfo = sessionStorage.getItem('user');
        const userInfoString = JSON.parse(userInfo);
        setUser(userInfoString);
        console.log(userInfoString);
    }
    
    

},[]);

  return (
    <div style={{display:'flex'}}>
      <div className='leftDiv'>
        <div>
          <img src={personIcon} alt='person' className='img' />
          <h1>{user?.fullname.toUpperCase()}</h1>
          <p>{user?.email}</p>
        </div>
        <div onClick={()=>{setShow(true);setShowCourse(false); setShowProfile(false)}} className='link'>
            Home
        </div>
        <div onClick={()=>{setShow(false);setShowCourse(false); setShowProfile(true)}} className='link'>
            Profile
        </div>
        <div onClick={()=>{setShow(false);setShowCourse(true); setShowProfile(false)}} className='link'>
            Courses
        </div>
        <div className='link' onClick ={ handleClick}>
            Log out
        </div>
      </div> 
      <div className='rightDiv'>
       {show? <Welcome/>:''}
       {showProfile ? <UserProfile/>:''}
       {showCourse ? <Courses/>:''}
      </div>
    </div>
  )
}

export default Dashboard