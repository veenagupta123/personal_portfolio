import React from 'react'
import Nits from '../../assets/nitss.jpg'
import './About.css'
import { Element } from 'react-scroll'
import Veena from '../../assets/veena.jpg'

const About = () => {
  return (
    <Element name='AboutME'>
      <div className="introduction-container">
        <div className='introduction'>
            <br/><br/><br/><br/>
            <p className="hello-">Hello,</p>
            <h1 className="name_ro">I am <span className="intro-name">Veena Gupta</span><br/></h1><br/>
            <h3 className="edu">I am Currently a Third Year student at <span className="col">NIT Raipur</span>.</h3>
            <h3 className="branch">I am pursuing Bachelor of Technology in <span className="bran">Electrical Engineering</span>.</h3><br/><br/>
            <p className="do">I am passionate about Competitive Coding and Web Development<br/>and looking forward to make a wonderful carrier ahead in these fields.</p>
            <br/>
        </div>
        <img src={Veena} alt="Veena Gupta" className="Veena_image"/>
      </div>
    </Element>
  )
}

export default About