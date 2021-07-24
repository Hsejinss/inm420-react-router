import React from 'react';
import '../css/Style.css';
import myProfile from '../img/profile.png'
import { Transition } from "react-transition-group";
import { gsap } from "gsap"; // no longer support 'TweenMax'

const About = ({ animation }) => {

  let initialPosition = {
    autoAlpha: 0,
    y: -50
  };

  return(
    <Transition
      unmountOnExit
      in={animation}
      timeout={2000}
      onEnter={node => { gsap.set(node, initialPosition)}}
      addEndListener={(node, done) => {
        gsap.to(node, 0.5, {
          autoAlpha: animation ? 1 : 0,
          y: animation ? 0 : 50,
          onComplete: done,
        });
      }}
    >
      <div className="about-component">
        <div className="aboutProfile">
          <section className="aboutMe-image">
            <img src={myProfile} alt={'My Profile'} />
          </section>
        </div>
        <h1 className="aboutMe">Sejin Han</h1>
        <p className="aboutMe-designer">
          Graphic Designer │ Web Designer
        </p>
        <p className="aboutMe-description">
          As a Creative Web Designer with talent for developing unique custom artwork. <br />
          My An Innovative approach to idea and developing concepts comes from “understand”. <br />
          This is my most basic design element and the basis of being inspired.</p>
      </div>
    </Transition>
  )
};

export default About;