import React from 'react';
import './Contact.css';
import Form from './Form';

// For LinkedIn Icon
import { RiLinkedinBoxLine } from "react-icons/ri";
// For github icon
import { SiGithub } from "react-icons/si";

// For Person Icon
import { BsFillPersonFill } from "react-icons/bs";

// for emial icon
import { MdOutlineMailOutline } from "react-icons/md";

// for Location icon
import { IoLocationOutline } from "react-icons/io5";


const Contact = React.forwardRef((props,ref) => {
  return (
    <div className='Contact' ref={ref}>
        <h1 className='contactHead'>Contact Me</h1>
        <div className='contactUnderline'></div>
        <div className='contactContainer'>
            <div className='iconWala'>

                <h1 className='touch'>Get In Touch</h1>

                <div className='iconCollection'>
                    <a className='item' href="https://www.linkedin.com/in/prince-pandey-828869252/" target='_blank' rel='noreferrer'> 
                        <RiLinkedinBoxLine className='linkedin'/>
                        <div id='lin'>LinkedIn</div>
                    </a>
                    <a className='item' href="https://github.com/PrincePandey2002" target='_blank' rel='noreferrer'>
                        <SiGithub className='gitHub'/>
                        <div id='github'>GitHub</div>
                    </a>
                </div>
                
                <div className='mainIcon'>
                    <div className='mainList'>
                        <BsFillPersonFill className='person'/>
                        <div id='prince'>Prince Pandey</div>
                    </div>
                    <div className='mainList'>
                        <MdOutlineMailOutline className='email'/>
                        <div id='mail'>princepandey1008@gmail.com</div>
                    </div>
                    <div className='mainList'>
                        <IoLocationOutline className='location'></IoLocationOutline>
                        <div id='india'>India</div>
                    </div>
                </div>

            </div>
            <Form className='contactForm'></Form>
        </div>
    </div>
  )
});
export default Contact;
