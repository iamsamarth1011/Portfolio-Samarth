import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am a passionate Frontend Developer and a CS & AI student at Newton School of Technology, dedicated to building engaging and user-friendly web experiences. My strong foundation in development, combined with a growth mindset and adaptability, allows me to continuously improve and refine my skills.</p>
                <p>Beyond just writing code, I believe in crafting intuitive, efficient, and impactful solutions. My eagerness to learn and positive attitude drive me to stay updated with emerging technologies, ensuring that I bring innovation and value to every project I work on.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Python</p><hr style={{width:"70%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>7+</h1>
            <p>TECHNOLOGIES LEARNED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>5+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>100+</h1>
            <p>HOURS OF CODING</p>
        </div>
      </div>
    </div>
  )
}

export default About
