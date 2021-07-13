import React from 'react';

const Contact = (props) => {

  return(
    <div>
      This is Contact component.

      <div className= "contact-form">
        <p className= "contact-form-text">KEEP IN TOUCH</p>
        <div className="row">
          <div className= "col-md-6">
          <input type="text" className="form-control" id="name" placeholder="Your name"></input>
          </div>
          <div className= "col-md-6">
            <input type="text" className="form control" id="email" placeholder="Your email"></input>
          </div>
          <div class="row">
            <div className="col-md">
              <div className="col-md 6">
                <input type= "text" class="form-control" id="message" placeholder="Leave your message">
                  <button className="signin">Send</button>
                </input>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
};

export default Contact;