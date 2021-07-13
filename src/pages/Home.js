import React from 'react';
import './Style.css';
import Hero from '../img/hero-image.jpg';

const Home = (props) => {

  return(
    <div className="home-component">
      {/* hero */}
      <div className="hero-section">
        <section ClassName="hero-image">
          <img src={Hero} />
        </section>
        <h1 className="hero-text">
          I'm Sejin Han. Web Designer!
        </h1>
      </div>
      {/* content */}
      


      
    </div>
  )
};

export default Home;