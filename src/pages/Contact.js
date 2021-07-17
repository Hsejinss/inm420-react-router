import React from 'react';
import '../css/Style.css';

const Contact = (props) => {

  return(
    <div>
      
      <div className= "contact-form container">
        <h1 className="contact-form-text">Keep In Touch</h1>
        <div className="contact-form-content container">
          <div className="col-md-2">
            <label for="fname">Full Name</label>
            <input type="text" className="form-control" id="name" placeholder="Your Name"></input>
          </div>
          <div className="col-md-2">
          <label for="fname">Email</label>
            <input type="text" className="form-control" id="email" placeholder="Your Email"></input>
          </div>
          <div className="col-md-4">
          <label for="fname">Message</label>
          <input type="text" className="form-control" id="message" placeholder="Leave your Message"></input>
          </div>
          <div className="container">
            <button className="signin">Sign in</button>
          </div>
  
        </div>
      </div>

    </div>
    
  )
};


export default Contact;
