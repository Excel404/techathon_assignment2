import React, { useEffect, useState } from 'react'
import './dashboard.css'
import personIcon from '../../images/1x/personicon.svg'
import { NavLink, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser]= useState();
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
        <div className='link'>
            Home
        </div>
        <div className='link'>
            Profile
        </div>
        <div className='link'>
            Courses
        </div>
        <div className='link' onClick ={ handleClick}>
            Log out
        </div>
      </div> 
      <div className='rightDiv'>
        <h1 className='header'>Welcome {user?.username}</h1>
        <p>Kindly click the link below to join the telegram group for {user?.course}</p>
      </div>
    </div>
  )
}

export default Dashboard