import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import theme_pattern from '../../assets/theme_pattern.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

    const [menu,setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () =>{
        menuRef.current.style.right="0";
    }
    const closeMenu = () =>{
        menuRef.current.style.right="-350px";
    }
 
  return (
    <div className='navbar'>
        <div className="nav-top">
            <h1>Ayush</h1>
            <img className='theme_pattern' src={theme_pattern} alt="" />
        </div>

        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
        
        <ul ref={menuRef} className="nav-menu">
            <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close'/>

            <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline}/>:<></>}</li>

            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About me</p></AnchorLink>{menu==="about"?<img src={underline}/>:<></>}</li>

            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Skills</p></AnchorLink>{menu==="services"?<img src={underline}/>:<></>}</li>

            <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Projects</p></AnchorLink>{menu==="work"?<img src={underline}/>:<></>}</li>

            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline}/>:<></>}</li>
        </ul>
        <div className="nav-connect">
            <a target='_blank' href="https://www.linkedin.com/in/ayush-goel-44795222a/">Connect with me</a>
        </div>
    </div>
  )
}

export default Navbar