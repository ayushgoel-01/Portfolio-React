import React from 'react'
import './Hero.css'
import profile_img from '../../assets/my_image.png'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Ayush Goel,</span> Final Year student at Chitkara University.</h1>
        <p>I am MERN Stack developer and have interest in Data Structures and Algorithms.</p>
        <div className="hero-action">
            <div className="hero-connect">
                <a href="https://www.linkedin.com/in/ayush-goel-44795222a/" target='_blank'>Connect With me</a>
                
            </div>
            <div className="hero-resume">
                <a href="https://drive.google.com/file/d/1Iv04abXnYxls7qOLywvDuP2MhjiLOuz2/view?usp=drive_link" target='_blank'>My Resume</a>
            </div>
        </div>
    </div>
  )
}

export default Hero