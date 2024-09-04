import React from 'react';
import './Skills.css';

export default function Skills ({scrollToAbout}) {
  return (
    <div className='skills'>
         
        <div className='skillHeading'>
            <h1>My Skills</h1>
        </div>
        <div className='skillHeadingUnderline'>Hello</div>

        <div className='skillDetail'>
        {/* C++ */}
        <div className='skillContainer'>
            <div className='skillLine'>
                <div className='per'>
                <h3>C++</h3>
                <p className='percentage'>95%</p>
                </div>
                <div className='shower'></div>
                <div id='cpp'></div>
            </div>
            
            {/* HTML5 and CSS */}
            <div className='skillLine'>
                <div className='per'>
                <h3>HTML5 and CSS</h3>
                <p className='percentage'>85%</p>
                </div>
                <div className='shower'></div>
                <div id='dev'></div>
            </div>

            {/* JavaScript */}
            <div className='skillLine'>
                <div className='per'>
                <h3>JavaScript</h3>
                <p className='percentage'>70%</p>
                </div>
                <div className='shower'></div>
                <div id='javascript'></div>
            </div>

            {/* C, Python and Java */}
            <div className='skillLine'>
                <div className='per'>
                <h3>C, Python and Java</h3>
                <p className='percentage'>70%</p>
                </div>
                <div className='shower'></div>
                <div id='cpj'></div>
            </div>
            
            {/* Tailwind and React.JS */}
            <div className='skillLine'>
                <div className='per'>
                <h3>Bootstrap and React.JS</h3>
                <p className='percentage'>60%</p>
                </div>
                <div className='shower'></div>
                <div id='tr'></div>
            </div>
        </div>
        

        <div className='skillsDescription'>
            <div className='skillHead'>
                <h1>My Creative Skills and Experience</h1>
            </div>
           <div className='skillsandexperience'>
           <p className='skillPara'>
            My skills include C++ , C , HTML5 , CSS, JavaScript , React.js , Python , and Java. I enjoy problem solving and I have good knowledge of Data Structures and Algorithms. I have also explored the domain of web Development and built some projects in the same. I also do Compititive Programming and I am a Knight at Leetcode and a 4 star coder at Codechef.
            </p>
            <button className='knowMore' onClick={scrollToAbout}> Know More</button>
           </div>
            
        </div>
    </div>
    </div>
  );
}
