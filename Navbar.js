import React, { useState } from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  return (
    <div className='navbar'>
      {/* The name will displayed */}
        <div className='logo'>
            <h1 className='logoh1'><span>P</span>rince</h1>
        </div>

        <div className='listItems desktop'>
            <Link  to='Hero'  smooth={true}  duration={1000} className='list'>Home</Link>
            <Link  to='about'  smooth={true}  duration={1000} className='list' >About</Link>
            <Link  to='skills'  smooth={true}  duration={1000}  className='list'>Skills</Link>
            <Link  to='Projects'  smooth={true}  duration={1000}  className='list'>Projects</Link>
            <Link to='Contact'  smooth={true}  duration={1000} className='list'>Contact</Link>
            {/* <GiHamburgerMenu className='hamburger'/> */}
            
        </div>
    </div>
  )
}
