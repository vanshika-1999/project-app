import React, { useState } from 'react';
import './navbar.css'
import logo from '../../assets/logo.png'
import conactMe from '../../assets/contact.png'
import {Link} from 'react-scroll';
import Menu from '../../assets/menu.png';


const Navbar = () => {
  const[showMenu,setshowMenu]=useState(false);
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Projects</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Experince</Link>
            {/* <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link> */}
        </div>
        <button className='desktopMenuBtn' onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}>
            <img src={conactMe} alt='' className='desktopMenuImg'/> Contact Me </button>
            
            <img src={Menu} alt='Menu' className='mobMenu' onClick={()=>setshowMenu(!showMenu)}/>
            <div className='navMenu' style={{display:showMenu?'flex':'none'}}>
              <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>{setshowMenu(false)}}>Home</Link>
              <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>{setshowMenu(false)}}>About me</Link>
              <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>{setshowMenu(false)}}>Experince</Link>
              <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>{setshowMenu(false)}}>Contact</Link>
       
        
          </div>
    </nav>
  )
}

export default Navbar;