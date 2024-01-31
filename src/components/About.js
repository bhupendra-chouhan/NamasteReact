import React from 'react'
import User from './User'

const About = () => {
  return (
    <div className='about-container'>
        <h1>About US</h1>
        <h2 className="about-title" style={{"font-style": "italic", "color": "orangered"}}>CEO</h2>
        <User />
    </div>
  )
}

export default About