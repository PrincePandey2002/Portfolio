import React from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';


export default function Navbar() {
  return (
    <div className='navbar'>
      {/* The name will displayed */}
        <div className='logo'>
            <h1 className='logoh1'><span>P</span>rince</h1>
        </div>

        <div className='listItems desktop'>
            <Link  to='HeroSection'  smooth={true}  duration={1000} className='list'>Home</Link>
            <Link  to='AboutSection'  smooth={true}  duration={1000} className='list' >About</Link>
            <Link  to='SkillSection'  smooth={true}  duration={1000}  className='list'>Skills</Link>
            <Link  to='ProjectSection'  smooth={true}  duration={1000}  className='list'>Projects</Link>
            <Link to='ContactSection'  smooth={true}  duration={1000} className='list'>Contact</Link>            
        </div>
    </div>
  )
}
