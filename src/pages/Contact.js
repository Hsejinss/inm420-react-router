import React from 'react';
import '../css/Style.css';

const Contact = (props) => {

  return(
    <div style={{width: '100%', height: 'calc(100vh - 80px - 150px)'}}>
      
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
          <textarea className="form-control" id="message" placeholder="Leave your Message"></textarea>
          </div>
          <div className="send-container">
            <div className="send">Send</div>
          </div>
  
        </div>
      </div>

    </div>
    
  )
};


export default Contact;
