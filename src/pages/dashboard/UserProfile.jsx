import React, { useEffect, useState } from 'react'
import personIcon from '../../images/1x/personicon.svg'
import './dashboard.css'

const UserProfile = () => {
  const [user, setUser]= useState();
  useEffect(()=>{
    if(sessionStorage.getItem('user') !== null){
        
        const userInfo = sessionStorage.getItem('user');
        const userInfoString = JSON.parse(userInfo);
        setUser(userInfoString);
        console.log(userInfoString);
    }
    
    

},[]);
  
  return (
    <div className='profileDiv'>
      <img src={personIcon} alt='person' className='img' />
      <div>
        <p>Username: </p>
        <span>{user?.username}</span>

        <p>Fullname:</p>
        <span>{user?.fullname}</span>
        
        <p>Email address:</p>
        <span> {user?.email}</span>
        
        <p>Course Selected: </p>
        <span>{user?.course}</span>
        
        <p>Phone number: </p>
        <span>{user?.phoneNumber}</span>
      </div>
    </div>
  )
}

export default UserProfile