import React from 'react'
import "./Achievements.css"
import { Element } from 'react-scroll'

const Achievements = () => {
  return (
    <Element name='Achievements'>
    <div className='main-achieve'>
        <h1 className="ach">Achievements</h1><br/>
        <div className="list-ach">
            <div className="twe">I got 95.0% marks in ISC Class 12th Board Examination. </div>
            <div className="ten"> Recognized as the top Java coder at the school level for consistently demonstrating exceptional
 programming skills and problem-solving abilities.</div>
            <div className="jee">Secured an AIR within top 1% out of 1.5M applicants in JEE Mains 2023.</div>
            <div className="codecon">Consistently performed in the top 20% of my Electrical Engineering cohort.</div>
        </div>
    </div>
    </Element>
  )
}

export default Achievements