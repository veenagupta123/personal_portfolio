import React from 'react'
import "./Projects.css"
import { Element } from 'react-scroll'
import codeforces from "../../assets/codeforces.png"
import codechef from "../../assets/codechef.jpeg"
import atcoder from "../../assets/atcoder.png"

const Projects = () => {
  return (
    <Element name='Projects'>
    <div className='ML_main_project'>
        <h3 className="machinelr">Web Development Project</h3><br/>
        <p className="short-desc">This is a WebD project designed by me which is a weather forecasting website.</p>
        <p className="desc-project-ml">I developed a dynamic and responsive product catalog website using HTML, CSS, and JavaScript and implemented a user-friendly interface for browsing and searching products with real-time updates.</p>
        <p className="link-ml">The code for the project can be accessed from <a href="https://github.com/veenagupta123/weatherForecast.git" target="_blank" className='ProjectML'> Here</a></p><br/><br/>
        <p className="code-pract">Apart from this I regularly practice Competitive Programming.</p>
        {/* <div className="platforms">
          <div className="codeforces-link">
            <a href="https://codeforces.com/profile/nitisha01" className="codeforce" target='_blank'><img src={codeforces} alt="CodeForces" /></a>
            <p className="codeftext">CodeForces</p> 
          </div>
        </div> */}
    </div>
    </Element>
  )
}

export default Projects