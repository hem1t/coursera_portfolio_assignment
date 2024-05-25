import React from 'react'
import { Button } from '../components/Button';
import "./intro_styles.css";
import drogon from '../assests/drogon.png';

const Header = () => {
  return (
    <header>
    <div className='links'>
        <a className='link' href="https://www.linkedin.com/in/hem1t/">LinkedIn</a>
        <a className='link' href="https://github.com/hem1t">Github</a>
        <a className='link' href="https://leetcode.com/u/hem1t/">Leetcode</a>
    </div>
    <div className='info'>
        i
    </div>
    </header>
  );
}

 const AboutHead = () => {
  return (
    <h1 className='hide-in-mobile about-hem1t-head'>About hem1t</h1>
  )
}

const ProfileBox = () => {
  return (
    <div className='profile-box'>
        <img alt='AwesomeProfilePic' src={drogon} />
        <div className='profile-desc-box'>
            <h2 className='hi'>Hi</h2>
            <p className='profile-desc'>
                I’m ReactJS developer <br className="appear-in-mobile"/>and this is a portfolio assignment. Excited to share my design with everyone.
            </p>
        </div>
    </div>
  )
}  

/* const projectButtonBoxStyle = {
    
}

const projectButtonTextStyle = {
    
} */

const IntroPage = () => {
  return (
    <section className='intro-page-root'>
        <Header />
        <div>
          <AboutHead />
          <ProfileBox />
        </div>
        <Button text="Projects" onclick={ () => { console.log("Will go to projects!"); }} />
    </section>
  );
}

export default IntroPage;