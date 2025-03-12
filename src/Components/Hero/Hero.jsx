import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Samarth Chaudhary,</span> frontend developer from NST.</h1>
      <p>I am a Frontend Developer from NST. With a growth mindset, adaptability, and eagerness to learn, I embrace every challenge as an opportunity to evolve.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
        <div className="hero-resume">
          <a href="https://drive.google.com/file/d/1U9lXV5YebJdzeXFOck7S9_yk49diCMQl/view" target="_blank" rel="noopener noreferrer">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;