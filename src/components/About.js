import React from 'react'
import User from './User'
import UserClass from './UserClass'

const About = () => {
  return (
    <div className='about-container'>
        <h1>About US</h1>
        <h2 className="about-title" style={{"fontStyle": "italic", "color": "orangered"}}>CEO</h2>
        
        <User firstname={"Function"}/>
        <UserClass first_name={"Class"}/>
    </div>
  )
}

export default About