import React,{useRef} from 'react';
import './About.css';
import aboutpic from '../assets/aboutpic.png'
import { ReactTyped } from "react-typed";

const About = React.forwardRef((props, ref) => {
  const downloanCV=()=>{
    window.open("https://drive.google.com/file/d/1vkPQ3hFo4iwkUpnfTo2YgYV08HLz51aQ/view?usp=sharing");
  }
  return (
    <div className='about' ref={ref}>
       
       {/* containerLeft contains the image */}
        <div className='containerLeft'></div>

        <div className='containerRight'>
          {/* About me */}
          <div className='inRight'>
          <h1>About Me</h1>
          </div>
          {/* The underline down the About me */}
          <div className='underline'></div>
          <div className='info'>
            <div className='animationIntro'>
                <h1>I'm Prince Pandey a</h1>
                <ReactTyped className='animatedAboutText' strings={[" Frontend Developer"," Competetive Programmer"," Coder", " Fast Learner"]} typeSpeed={50} backSpeed={60} loop={true}/>
            </div>
            <h3 className='aboutDesc'>I am a fourth year Undergrad Student at National Institute of Technology Patna pursuing B.Tech in Electronics and Communication engineering. I am a Self-driven, quick starter, passionate programmer with a curious mind who enjoys solving a complex and challenging real-world problems. Always strive to bring 100% to the work I do. I have worked on technologies like C++, C, HTML5, CSS, JavaScript and React.js</h3>
            </div>
            <button className='resume' onClick={downloanCV}> Download CV

              {/* <a target='_blank' href='https://drive.google.com/file/d/1vkPQ3hFo4iwkUpnfTo2YgYV08HLz51aQ/view?usp=sharing'>Download CV</a> */}
            </button>
        </div>
    </div>
  )
});

export default About;