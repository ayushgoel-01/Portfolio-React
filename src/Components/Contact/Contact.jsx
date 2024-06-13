import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import linkedin_icon from '../../assets/linkedin_icon.png'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "748d7bcf-8867-44ea-9f55-ad4a9f615e8c");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p className='contact-first-para'>I'm currently avaliable for Positions like Software Developer, Frontend, Backend, Full Stack Developer, so feel free to send me a message about anything. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" />
                        <a href="">goel8550@gmail.com</a>
                        {/* <p></p> */}
                    </div>
                    <div className="contact-detail">
                        <img src={linkedin_icon} alt="" />
                        <a href="https://www.linkedin.com/in/ayush-goel-44795222a/" target='_blank'>Ayush Goel</a>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" />
                        <a href="">Panchkula, India</a>
                        {/* <p></p> */}
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' required/>

                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' required/>

                <label htmlFor="">Write your message here</label>
               <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>

               <button type='submit' className='contact-submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact