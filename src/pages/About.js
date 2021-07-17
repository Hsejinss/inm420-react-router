import React from 'react';
import '../css/Style.css';
import myProfile from '../img/selfie.png'


const About = (props) => {

  return(
    <div className="about-component">
      <div className="aboutProfile">
        <section className="aboutMe-image">
          <img src={myProfile} />
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
  )
};

export default About;