import React from 'react'
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', margin:'auto',marginTop:'50px'}}>
        <h1 style={{textAlign:'center', color:'red', fontSize:'60px'}}> 404</h1>
        <div>
          <h1 style={{textAlign:'center', color:'red'}}>Page Not Found</h1>
          <p style={{textAlign:'center', color:'gray'}}>We're sorry the page you requested for could not be found<br/>
            Please go back to the homepage
          </p>
          <button onClick={()=>navigate('/')} style={{marginLeft:'40%',marginTop:'1rem',backgroundColor:'blue',color:'white',borderRadius:'8px',borderColor:'transparent', padding:'0.5rem'}}>GO HOME</button>

        </div>
    </div>
  )
}

export default ErrorPage