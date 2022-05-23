
import './App.css';
import GHDrawn from './svg/ghdrawn.svg'
import LI from './svg/linkedin.svg'
import pdf from './svg/pdf.svg'
import latexLogo from './svg/LaTeX_logo.svg'
import email from './svg/email.svg'
import me from './images/me.jpg'
import resume from './resume/ALD_Resume.pdf'
import latexResume from './resume/resume.zip'
import React, { useState, useEffect } from 'react';
function App() {
  const [isLoading, setLoading] = useState(true);
  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 1000));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove(); setLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }
  return (
    <div>
      <div className="container">
        <AboutMe />
        <Projects />
        <Resume />
      </div>
    </div>
  );
}
function Projects(){
  return (
    <div className="sectionContainer">
      <h1 className='Name'>Projects</h1>
        <SeniorDesign />
        <LargeProject />
        <Holobot />
    </div>
  );
}
function SeniorDesign() {
  return (
    <div>
      <h2 className='Project'>Senior Design Capstone</h2>
      <p className='projectDescription'>
        Production program for a company that tracks their manufacturing process.
        Designed with a microservices architecture.
      </p>
    </div>
  );
}

function LargeProject()
{
  return (
    <div>
      <a href="https://github.com/Group14-COP4331/large-project">
        <h2 className='Project'>Dungeon Run</h2>
      </a>
      <p className='projectDescription'>
        A runner-esque game (think jetpack joyride) where I handled a large portion of the backend using node.js . Implementing
        CRUD operations with MongoDB.
      </p>
    </div>
  );
}
function Holobot(){
  return(
    <div>
      <a href="https://github.com/Lukeisun/HoloBot">
        <h2 className='Project'>HoloBot</h2>
      </a>
      <p className='projectDescription'>
        Discord bot that scrapes YouTube pages that will send a message in a discord channel notifying
        users that a creator is live. Created in Python and deployed using Heroku .
      </p>
    </div>
  );
}
function Resume(){
  return (
  <div>
    <h1 className='Name'>My Resume</h1>
    <embed className="resume" src={resume} width="80%" height="900vh" ></embed>
    <br></br>
    <a href={resume} download>
      <img src={pdf} className="icon"></img>
    </a>
    <a href={latexResume} download>
      <img src={latexLogo} className="icon"></img>
    </a>
  </div>
  );
}
function AboutMe(){
  return (
    <div className="flex">
      <div>
        <h1 className="Name">
          Hi, I am Adin Lukas!
        </h1>
        <p className="description">
          You can call me Adin or Lukas, I like both  .
          <br></br>
          <br></br>
          I am currently a senior pursuing my Bachelor's in Computer Science at the University of Central Florida. I
          have an interest in the fields of Computer Vision, Mathematics, and Backend Engineering.
          <br></br>
          <br></br>
          I have been committed to my education, currently maintaining a 3.8 GPA.
          My favorite courses have been Matrix and Linear Algebra, Combinatorics, Discrete Mathematics,
          a Competitive Programming Course, Computer Vision, and my schools capstone course where we work as a group.
        </p>
      </div>
      <div>
        <img id="me" src={me}></img><Socials />
      </div>
    </div>
  );
}
function Socials(){
  return(
    <ul className="socials">
        <li>
        <a href="https://www.linkedin.com/in/adin-lukas-delacruz/">
            <img src={LI}></img>
          </a>
        </li>
        <li>
        <a href="https://github.com/Lukeisun">
            <img src={GHDrawn}></img>
          </a>
        </li>
        <li>
          <a href="mailto:adinlukas01@gmail.com">
            <img src={email}></img>
          </a>
        </li>
      </ul>
  );
}

export default App;
