import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import lock from '../../images/1x/lock.svg'
import personIcon from '../../images/1x/personicon.svg'
import sms from '../../images/1x/sms.svg'
import showP from '../../images/1x/showP.svg'
import hideP from '../../images/1x/hi.svg'

import './signup.css'

const SignUp = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        username: '',
        fullname:'',
        phoneNumber : '',
        email: '',
        password: '',
        confirmpassword:'',
        course:'',
        gender:''        
    });
    const{username,fullname,phoneNumber,email, password,confirmpassword,course,gender}= userData;
    
    const [nameIsValid, setNameIsValid] = useState(false);
    const [usernameIsValid, setUsernameIsValid] = useState(false);
    const [emailIsValid, setEmailIsValid] = useState(false); 
    const [passwordIsValid, setPasswordIsValid] = useState(false); 
    const [confirmPasswordIsValid, setConfirmPasswordIsValid] = useState(false); 
    //const [phoneNumberIsValid, setPhoneNumberIsValid] = useState(false); 
    const [passwordType, setPasswordType] = useState('password'); 
    const [passwordType1, setPasswordType1] = useState('password'); 
    const [nameError, setNameError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    //const [phoneNumberError, setPhoneNumberError] = useState('');
    
    const handleChange2 = (e)=>{
        const uppercaseRegExp = /(?=.*?[A-Z])/;
        const lowercaseRegExp = /(?=.*?[a-z])/;
        const digitsRegExp = /(?=.*[0-9])/;
        const specialCharRegExp = /(?=.*[!@#$%^&*])/;
        const uppercasePassword = uppercaseRegExp.test(e.target.value.trim());
        const lowercasePassword = lowercaseRegExp.test(e.target.value.trim());
        const digitsPassword = digitsRegExp.test(e.target.value.trim());
        const specialCharPassword = specialCharRegExp.test(e.target.value.trim());
        const minLengthPassword = e.target.value.length >= 8;
        if(!e.target.value.length >= 1){
            setPasswordError('Password is empty')
        }else if(!uppercasePassword){
            setPasswordError('Password should have at least one Uppercase')
        }else if(!lowercasePassword){
            setPasswordError('Password should have at least one Lowercase')
        }else if(!digitsPassword){
            setPasswordError('Password should have at least one digit')
        }else if(!specialCharPassword){
            setPasswordError('Password should have at least one special character')
        }else if(!minLengthPassword){
            setPasswordError('Password should have at least 8 characters')
        }  
        if(uppercasePassword &&
            lowercasePassword &&
            digitsPassword &&
            specialCharPassword &&
            minLengthPassword
            ){
            setPasswordIsValid(true)
            }else{
            setPasswordIsValid(false)
            }  
    }
    
    
    const handleChange = (e) => {
        const {name,value} = e.target;
        setUserData({
            ...userData,
            [name]: value
        })
    }
    
    const submitForm = (e)=>{
        e.preventDefault();
        console.log(userData);
        const userDataString = JSON.stringify(userData);
        if(sessionStorage.getItem('user')=== null){
        sessionStorage.setItem('user', userDataString);
        navigate('/login')
        }else{
            sessionStorage.removeItem('user');
            sessionStorage.setItem('user',userDataString);
            navigate('/login')
        }
    }
    
  return (
    <div className='signupDiv'>
        <h1>SignUp</h1>
        <form className='signUpForm'>
            <div className='innerDiv'>
                <label>Username <span className='important'>*</span></label>
                
                    <div style={{display:'flex', flexDirection:'row'}}>
                    <input 
                        type={'text'} 
                        name ={'username'}
                        value ={username}
                        onChange ={(e)=>{handleChange(e);
                            
                            if(e.target.value.length >= 5 &&
                                e.target.value !== '' && 
                                e.target.value.trim().match(/[a-zA-Z][a-zA-Z ]+/)
                                ){
                                setUsernameIsValid(true);
                                
                                }else{
                                setUsernameIsValid(false);
                                setUsernameError('name should contain only letters and must be greater than five letters');
                                }
                        }}
                        placeholder= {'Enter username'} 
                    
                    />
                    <img src={personIcon} alt='person' className='img' />
                    </div>
                    { !usernameIsValid? <span className ='error'>{usernameError}</span>:''}
                
            </div>
            <div className='innerDiv'>
                <label>Full Name <span className='important'>*</span></label>
                <div style={{display:'flex', flexDirection:'row'}}>
                <input 
                    type={'text'} 
                    name ={'fullname'}
                    value ={fullname}
                    onChange ={(e)=>{handleChange(e);
                        if(e.target.value.length >= 5 &&
                            e.target.value !== '' && 
                            e.target.value.trim().match(/[a-zA-Z][a-zA-Z ]+/)
                            ){
                              setNameIsValid(true);
                              
                            }else{
                              setNameIsValid(false);
                              setNameError('name should contain only letters and must be greater than five letters');
                            }
                    }}
                    placeholder= {'Enter full name'} 
                />
                <img src={personIcon} alt='person' className='img' />
                </div>
                { !nameIsValid? <span className ='error'>{nameError}</span>:''}
            </div>
            <div className='innerDiv'>
                <label>Phone Number <span className='important'>*</span></label>
                <div style={{display:'flex', flexDirection:'row'}}>
                <input 
                    type={'text'} 
                    name ={'phoneNumber'}
                    value ={phoneNumber}
                    onChange ={handleChange}
                    placeholder= {'Enter phone number'} 
                />
                </div>
            </div>
            <div className='innerDiv'>
                <label>Email <span className='important'>*</span></label>
                <div style={{display:'flex', flexDirection:'row'}}>
                <input 
                    type={'email'} 
                    name ={'email'}
                    value ={email}
                    onChange={(e)=>{handleChange(e);
                        if(e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
                            e.target.value !== '' 
                            ){
                              setEmailIsValid(true);
                            }else{
                              setEmailIsValid(false);
                              setEmailError('email should be similar to - example@gmail.com');
                            }
      
                      }}
                    placeholder= {'Enter email'} 
                />
                <img src={sms} alt='email' className='img' />
                </div>
                { !emailIsValid? <span className ='error'>{emailError}</span>:''}
            </div>
            <div className='innerDiv'>
                <label>Choose Gender <span className='important'>*</span></label>
                <div className='select'>
                    <select name='gender' value={gender} onChange={(e)=>handleChange(e)} >
                        <option value={'none'} >Choose your Gender</option>
                        <option value={'Male'}>Male</option>    
                        <option value={'Female'}>Female</option>    
                        <option value={'CisGender'}>CisGender</option>    
                        <option value={'TransGender'}>TransGender</option>    
                    </select> 
                </div>
            </div>
            <div className='innerDiv'>
                <label>Choose Course <span className='important'>*</span></label>
                <div className='select'>
                    <select name='course' value={course} onChange={(e)=>handleChange(e)} >
                        <option value={'none'} >Choose your course</option>
                        <option value={'Frontend (ReactJS)'}>Frontend(ReactJS)</option>    
                        <option value={'Backend (NodeJs)'}>Backend (Node JS)</option>    
                        <option value={'UI/UX Design'}>UI/UX Design</option>    
                        <option value={'Graphic Design'}>Graphic Design</option>    
                        <option value={'Product Design'}>Product Design</option>    
                        <option value={'Copywriting'}>Copywriting</option>    
                    </select> 
                </div>
            </div>
            <div className='innerDiv'>
                <label>Password <span className='important'>*</span></label>
                <div style={{display:'flex', flexDirection:'row'}}>
                <input 
                    type={passwordType} 
                    name ={'password'}
                    value ={password}
                    placeholder= {'Enter password'} 
                    onChange={(e)=>{handleChange(e);
                        handleChange2(e)
                      }}
                />
                <span>
                      
                        {passwordType==='password'? 
                        <img src={hideP} onClick ={()=>setPasswordType('text')} className='icon' color='#239ED9' alt=''/>
                        :<img src={showP} onClick ={()=>setPasswordType('password')}className='icon' color='#239ED9' alt=''/>}
                </span>
                <img src={lock} alt='password' className='lock' />

                </div>
                { !passwordIsValid? <span className ='error'>{passwordError}</span>:''}
            </div>
            <div className='innerDiv'>
                <label>Confirm password <span className='important'>*</span></label>
                    <div style={{display:'flex',  flexDirection:'row' }}>
                    <input 
                        type={passwordType1} 
                        name ={'confirmpassword'}
                        value ={confirmpassword}
                        placeholder= {'Enter password'} 
                        onChange={(e)=>{handleChange(e);
                            if(e.target.value === password){
                                setConfirmPasswordIsValid(true);
                            }else{
                                setPasswordIsValid(false);
                                setConfirmPasswordError('password does not match')
                            }
                        }}
                        />
                        <span>
                        {passwordType1==='password'? 
                        <img src={hideP} onClick ={()=>setPasswordType1('text')} className='icon' color='#239ED9' alt=''/>
                        :<img src={showP} onClick ={()=>setPasswordType1('password')}className='icon' color='#239ED9' alt=''/>}
                        </span>
                    <img src={lock} alt='password' className='lock' />
                    </div>
                
                { !confirmPasswordIsValid? <span className ='error'>{confirmPasswordError}</span>:''}
            </div>
            <p style={{textAlign:'center',color:'blue',fontSize:'1rem',marginTop:'1.5rem'}}>By signing up, you agree to our <Link to={'/terms'}>terms and services</Link></p>
            <button onClick ={submitForm}onSubmit={submitForm}>SignUp</button>

        </form>
        <p style={{textAlign:'center',marginTop:'1rem'}}>Already have an account? <Link to ={'/login'}>Login</Link></p>
    </div>
  )
}

export default SignUp