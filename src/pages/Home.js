import React from 'react';
import '../css/Style.css';
import ui from '../img/ui-design.png'
import css from '../img/css.png'
import wireframe from '../img/wireframe.png'
import { Row, Col } from 'react-bootstrap';
import { Transition } from "react-transition-group";
import { gsap } from "gsap"; // no longer support 'TweenMax'

const Home = ({ animation }) => {

  let initialPosition = {
    autoAlpha: 0,
    y: -50
  };

  const list = [
    { imgSrc: ui, contentA: 'UI/UX', contentB: 'From inital phrase of an idea to making it a reality, considering and taking care of every aspects of user experience.'},
    { imgSrc: css, contentA: 'Web Development', contentB: 'Converting the designs into a full fiedege working application using different web technologies.'},
    { imgSrc: wireframe, contentA: 'Branding', contentB: 'Got the business idea and set a branding identity and copywriting tone of voice.'},
  ];

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
                      <div>
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
    </Transition>
  )
};

export default Home;