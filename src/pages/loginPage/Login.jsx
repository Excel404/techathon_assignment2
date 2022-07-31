import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import lock from '../../images/1x/lock.svg'
import personIcon from '../../images/1x/personicon.svg'
import showP from '../../images/1x/showP.svg'
import hideP from '../../images/1x/hi.svg'
import './login.css'
const Login = () => {
    const [user, setUser] = useState({});
    const [currentUser, setCurrentUser] = useState({});
    const [passwordType, setPasswordType] = useState('password');
    useEffect(()=>{
        if(sessionStorage.getItem('user') !== null){
            
            const userInfo = sessionStorage.getItem('user');
            const userInfoString = JSON.parse(userInfo);
            setUser(userInfoString);
            console.log(userInfoString);
        }
        
        

    },[]);
    
    const[cUsername, setCUsername] = useState('');
    const[cPassword, setCPassword] = useState('');
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const submitForm = (e)=>{
        e.preventDefault()
        console.log(user?.username,user?.password);
        if(cUsername === user?.username && cPassword === user?.password){
            setCurrentUser(user);
            sessionStorage.setItem('userdata', currentUser);
            navigate('/dashboard')
        }else{
            setShow(true);
        }
    }

  return (
    <div className='loginDiv'>
        <h1>Login</h1>
        <form className='loginForm'>
            <div>
                <label className='label'>Username <span style ={{color:'red'}}>*</span></label>
                <div className='innerLogInDiv'>
                <input 
                    type={'text'} 
                    name ={'name'}
                    value={cUsername}
                    onChange ={(e)=>setCUsername(e.target.value)}
                    placeholder ={'Enter username'}
                     
                />
                <img src={personIcon} alt='person' className='img' />
                </div>
            </div>

            <div>
                <label className='label'>Password <span style ={{color:'red'}}>*</span></label>
                <div className='innerLogInDiv'>
                <input 
                    type={passwordType} 
                    name ={'name'} 
                    value ={cPassword}
                    onChange ={(e)=>setCPassword(e.target.value)}
                    placeholder ={'Enter password'}
                />
                <span>
                      
                      {passwordType==='password'? 
                      <img src={hideP} onClick ={()=>setPasswordType('text')} className='icon' color='#239ED9' alt=''/>
                      :<img src={showP} onClick ={()=>setPasswordType('password')}className='icon' color='#239ED9' alt=''/>}
              </span>
                <img src={lock} alt='password' className='img' />
                </div>
            {show && <p style={{textAlign:'center',color:'red'}}>invalid username or password</p>}
            </div>
        <button onClick={submitForm} onSubmit={submitForm}> Login</button>
        </form>
        <p style={{textAlign:'center'}}>Don't have an account? <Link style={{color:'#0071BC'}} to ={'/signup'}>SignUp</Link></p>

    </div>
  )
}

export default Login