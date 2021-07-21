import React from 'react';
import '../css/Style.css';
import ui from '../img/ui-design.png'
import css from '../img/css.png'
import wireframe from '../img/wireframe.png'
import { Row, Col } from 'react-bootstrap';

const Home = (props) => {

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
  )
};

export default Home;