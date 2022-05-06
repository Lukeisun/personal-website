
import './App.css';
import GHDrawn from './svg/ghdrawn.svg'
import LI from './svg/linkedin.svg'
import email from './svg/email.svg'
import me from './images/me.jpg'
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
      <div class="container">
        <AboutMe />
        <div>
          HJIOPDF 
        </div>
      </div>
    </div>
  );
}
function AboutMe(){
  return (
    <div class="flex">
      <div>
        <h1 class="Name">
          Hi, I am Adin Lukas!
        </h1>
        <p class="description">
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
      <ul class="socials">
        <li>
          <a href="https://www.linkedin.com/in/adin-lukas-delacruz/" class="social">
            <img src={LI}></img>
          </a>
        </li>
        <li>
          <a href="https://github.com/Lukeisun" class="social">
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
