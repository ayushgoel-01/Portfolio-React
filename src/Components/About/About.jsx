import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/my_image.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am Final year student at Chitkara University. My Skills are HTML, CSS, JavaScript, React JS, Node JS, Express, My SQL and Mongo Db. I have interest in Data Structures and algorithms. Apart from that i also have knowledge about Operating System, Data Base management System and Computer networks.</p>
                    <p>My passion for MERN Stack development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p>
                        <hr style={{width:"50%"}}></hr>
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p>
                        <hr style={{width:"60%"}}></hr>
                    </div>
                    <div className="about-skill">
                        <p>React JS</p>
                        <hr style={{width:"62%"}}></hr>
                    </div>
                    <div className="about-skill">
                        <p>Node JS</p>
                        <hr style={{width:"50%"}}></hr>
                    </div>
                    <div className="about-skill">
                        <p>DSA</p>
                        <hr style={{width:"100%"}}></hr>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1625+</h1>
                <p>RATINGS @LEETCODE</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>700+</h1>
                <p>DSA PROBLEMS SOLVED</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS CREATED</p>
            </div>
        </div>
    </div>
  )
}

export default About