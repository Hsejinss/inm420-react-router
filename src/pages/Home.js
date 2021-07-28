import React, {useEffect} from 'react';
import '../css/Style.css';
import ui from '../img/ui-design.png'
import css from '../img/css.png'
import wireframe from '../img/wireframe.png'
import { Row, Col } from 'react-bootstrap';
import { gsap } from 'gsap';

const Home = (props) => {

  useEffect(() => {
    //heroEffect
    gsap.fromTo(".hero-text", {opacity:0, y:10}, {opacity:1, y:-10, duration:2.5}); //className, {from effect}, {to effect}
    // gsap.to(".hero-text", {y:100, duration:3, ease:"elastic"}) 
    //contentEffect,
    gsap.fromTo(".hero-content-0", {opacity:0}, {opacity:1, duration:2, delay:1 });
    gsap.fromTo(".hero-content-1", {opacity:0}, {opacity:1, duration:2, delay:2 });
    gsap.fromTo(".hero-content-2", {opacity:0}, {opacity:1, duration:2, delay:3 });

  },[])
  const list = [
    { imgSrc: ui, contentA: 'UI/UX', contentB: 'From inital phrase of an idea to making it a reality, considering and taking care of every aspects of user experience.'},
    { imgSrc: css, contentA: 'Web Development', contentB: 'Converting the designs into a full fiedege working application using different web technologies.'},
    { imgSrc: wireframe, contentA: 'Branding', contentB: 'Got the business idea and set a branding identity and copywriting tone of voice.'},
  ];

  return(
    <div className="home-component">
      {/* hero */}
      <div className="hero-section" >
        <section className="hero-image">
          <h1 className="hero-text">
            I'm Sejin Han. Web Designer!
          </h1>
        </section>

      </div>
      {/* content */}
      <div className="home-content">
        <h2 className="content-text">
          What I do?
        </h2>
        <div>
            <Row>
              {list.map((element, index) => {
                return(
                  <Col key={index} xs={12} sm={12} md={4}>
                    <div className={`hero-content-${index}`}>
                      <img src={element.imgSrc} alt={element.contentA} className="HomeImage"/>
                      <div className="list1">{element.contentA}</div>
                      <div>{element.contentB}</div>
                    </div>
                  </Col>
                )
              })}
            </Row>
        </div>        
      </div>
    </div>
  )
};

export default Home;