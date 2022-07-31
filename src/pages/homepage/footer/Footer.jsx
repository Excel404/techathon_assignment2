import React from 'react'
import { Link } from 'react-router-dom'
import logo2 from '../../../images/1x/Artboard 4.png'
import phoneIcon from '../../../images/1x/icon-phone.svg'
import emailIcon from '../../../images/1x/icon-email.svg'
import * as Icon from 'react-bootstrap-icons'
import './footer.css'
const Footer = () => {
    const handleClick =(url)=>{
        window.open(url, '_blank')
    }
  return (
    <div className='footerDiv'>
        <img src={logo2} alt='person' className='img1' />
        <div className='listDiv' style={{width:'90%', justifyContent:'space-between'}}>
            <section style={{margin:'1rem'}}>
                <section style={{display:'flex',paddingBottom:'1rem'}}>
                    <img style={{paddingRight:'1rem'}} className='img' src={phoneIcon} alt ='phone icon'></img>
                    <span>Phone: +234-906-434-5314</span>
                </section>
                <section style={{display:'flex'}}>
                <img style={{paddingRight:'1rem'}} className='img' src={emailIcon} alt ='email icon'></img>
                    <span>skilup@gmail.com</span>
                </section>
                
            </section>
            <section className ='footerLinks' >
                <p style={{paddingBottom:'1rem',fontSize:'20px',fontWeight:'bold'}}>About Us</p>
                <p style={{paddingBottom:'1rem'}}>Jobs</p>
                <p style={{paddingBottom:'1rem'}}>Press</p>
                <p>Blog</p>
            </section>
            <section className ='footerLinks' >
                <p style={{paddingBottom:'1rem',fontSize:'20px',fontWeight:'bold'}}>Contact Us</p>
                <p style={{paddingBottom:'1rem'}}><Link style={{color:'#0071BC'}} to={'/terms'}>Terms</Link></p>
                <p> <Link style={{color:'#0071BC'}} to ={'/'}>Privacy</Link></p>
                
            </section>
            <div className='connect'>
                <p style={{paddingBottom:'1rem',fontSize:'20px',fontWeight:'bold'}}>Connect us on</p>
                <div style={{ display:'flex' }}>
                    
                    <Icon.Facebook onClick={()=>handleClick('https://www.facebook.com/chimdindu.edeh')} style={{color:'#0071BC',paddingRight:'1rem'}}/> 
                    <Icon.Twitter onClick={()=>handleClick('https://www.twitter.com/excel4900')} style={{color:'#0071BC',paddingRight:'1rem'}}/> 
                    <Icon.Instagram onClick={()=>handleClick('https://www.facebook.com/chimdindu.edeh')} style={{color:'#0071BC',paddingRight:'1rem'}} />
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Footer