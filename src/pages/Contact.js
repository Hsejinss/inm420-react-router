import React from 'react';
import '../css/Style.css';
import { Transition } from "react-transition-group";
import { gsap } from "gsap"; // no longer support 'TweenMax'

const Contact = ({ animation }) => {

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
      <div className="ContactContent">
        <div className= "contact-form container">
          <h1 className="contact-form-text">Keep In Touch</h1>
          <div className="contact-form-content container">
            <div className="col-md-2">
              <label htmlFor="fname">Full Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name"></input>
            </div>
            <div className="col-md-2">
            <label htmlFor="fname">Email</label>
              <input type="text" className="form-control" id="email" placeholder="Your Email"></input>
            </div>
            <div className="col-md-4">
            <label htmlFor="fname">Message</label>
            <textarea className="form-control" id="message" placeholder="Leave your Message"></textarea>
            </div>
            <div className="send-container">
              <div className="send">Send</div>
            </div>
    
          </div>
        </div>

      </div>
    </Transition>
  )
};


export default Contact;
