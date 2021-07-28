import React from 'react';
import '../css/Style.css';
import { gsap } from 'gsap';

const Contact = (props) => {

  const onClickSend = () => {
    gsap.fromTo('.send', {x: -100, duration: 1}, {x: 100, duration: 1, delay: 1});
  }

  return(
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
            <div className="send" onClick={onClickSend}>Send</div>
          </div>
  
        </div>
      </div>

    </div>
  )
};


export default Contact;
