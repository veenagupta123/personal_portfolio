import React from 'react'
import "./Skills.css"
import cpp from "../../assets/cpp.png"
import html from "../../assets/html.png"
import python from "../../assets/python.jpeg"
import torch from "../../assets/torch.jpeg"
import { Element } from 'react-scroll'

const Skills = () => {
  return (
    <Element name='Skills'>
    <div className='main'>
        <h1 className="intro">What do I do?</h1><br/><br/>
        <h3 className="para">I'm a third-year Electrical student passionate about Coding, Competitive Programming and Web Development. Currently, I'm exploring web development to create innovative projects that blend technology and creativity, showcasing my skills and interests.</h3>
        <div className="sections">
            <div className="cpp">
                <img src={cpp} alt="C++" />
                <p>C++ is one of the important and famous coding languages. I am currently practicing Competitive Programming on the Codeforces.</p>
            </div>
            {/* <div className="python">
                <img src={python} alt="PYTHON" />
                <p>I have also done python including some famous libraries like NumPy, pandas, matplotlib.</p>
                
            </div> */}
            <div className="torch">
                <img src="data:image/png;base64,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" alt="Java" />
                <p>Java is one of the important coding languages which I am practicing from last 4 years. I have also completed object oriented Programming in java.</p>
            </div>
            <div className="html">
                <img src={html} alt="HTML" />
                <p>HTML is the foundation language of Web Developmet. Apart from HTML, CSS and JS is also frequently used.</p>
            </div>
        </div>
    </div>
    </Element>
  )
}

export default Skills
