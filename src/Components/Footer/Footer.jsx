import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import theme_pattern from '../../assets/theme_pattern.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                {/* <img src={footer_logo} alt="" /> */}
                <div className="nav-top">
                    <h1>Ayush</h1>
                    <img className='theme_pattern' src={theme_pattern} alt="" />
                </div>
                <p>I am Final year student having interest in Data Structures and MERN Stack.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">
                    Subscribe
                </div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">
            © 2024 Ayush Goel. All rights reserved.
            </p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <a href="https://www.linkedin.com/in/ayush-goel-44795222a/" target='_blank'>Connect with me</a>
            </div>
        </div>
    </div>
  )
}

export default Footer