import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Projects</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <a href={work.link} target='_blank'><img key={index} src={work.w_img} alt="img" /></a> 
            })}
        </div>
        <div className="mywork-showmore">
            {/* <p>Show More</p> */}
            <a href="https://github.com/ayushgoel-01?tab=repositories" target='_blank'>Show More</a>
            
        </div>
    </div>
  )
}

export default MyWork