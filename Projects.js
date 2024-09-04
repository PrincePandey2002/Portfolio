import React from 'react'
import './Projects.css';

function Projects() {
  return (
    <div className='Projects'>
        <h1 className='portfolioHead'>My Projects</h1>
        <div className='projectsUnderline'></div>
        <div className='ProjectsContainer'>

          {/* Project 1 */}
            <div className='Project1'>
              <div className='personalporfolio'>
                <div className='portfolioImage' id='pimage'></div>
                  <h1>Personal Portfolio</h1>
                  <div className='pdescrip'>
                    <ul className='ProjectList'>
                      <li>Developed a porfolio Website</li>
                      <li>This project is build with HTML,CCS,JavaScript and React.js</li>
                    </ul>
                  </div>
                  <button className='porfolioLink alter projectButton'  >View Project</button>
                </div>
            </div>

            {/* Project2 */}
            <div className='Project1'>
              <div className='personalporfolio'>
                <div className='portfolioImage' id='simage'></div>
                  <h1>Supermarket Billing System</h1>
                  <div className='pdescrip'>
                    <ul className='ProjectList'>
                      <li>Developed a Supermarket billing System</li>
                      <li>This project is build with C++ and OPPs</li>
                    </ul>
                  </div>
                  <button className='porfolioLink projectButton'>View Project</button>
                </div>
            </div>

            {/* Project 3 */}
            <div className='Project1'>
              <div className='personalporfolio'>
                <div className='portfolioImage' id='vimage'></div>
                  <h1>Sorting Visualizer</h1>
                  <div className='pdescrip'>
                    <ul className='ProjectList'>
                      <li>Developed a sorting visualizer</li>
                      <li>This project is built with HTML,CSS,Javascript</li>
                    </ul>
                  </div>
                  <button className='porfolioLink alter projectButton'>View Project</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Projects