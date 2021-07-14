import React from 'react';
import './Style.css';

const Contact = (props) => {

  return(
    <div>
      
      <div className= "contact-form">
        <h1 className="contact-form-text">KEEP IN TOUCH</h1>
        <div className="contact-form-content">
          <div className="col-md-2">
            <input type="text" className="form-control" id="name" placeholder="Your Name"></input>
          </div>
          <div className="col-md-2">
            <input type="text" className="form-control" id="email" placeholder="Your Email"></input>
          </div>
          <div className="col-md-4">
            <input type="text" className="form-control" id="message" placeholder="Leave your Message"></input>
          </div>
          <button className="signin">Send</button>
        </div>
      </div>

    </div>
    
  )
};


export default Contact;
