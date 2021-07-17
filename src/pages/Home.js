import React from 'react';
import '../css/Style.css';
import Hero from '../img/hero-image.jpg';
import ui from '../img/ui-design.png'
import css from '../img/css.png'
import wireframe from '../img/wireframe.png'

// import Ps from '../img/PS icon.png'
// import Ai from '../img/AI icon.png'
// import Id from '../img/ID icon.png'
// import Vs from '../img/VS icon.png'
// import Ae from '../img/AE icon.png'
// import Xd from '../img/XD icon.png'


import { Row, Col } from 'react-bootstrap';

const Home = (props) => {

  const list = [
    { imgSrc: ui, contentA: 'UI/UX', contentB: 'Image 1 Description'},
    { imgSrc: css, contentA: 'Web Development', contentB: 'Image 2 Desc'},
    { imgSrc: wireframe, contentA: 'Wireframe', contentB: 'Image 3 Desc'},

  ];

  return(
    <div className="home-component">
      {/* hero */}
      <div className="hero-section" >
        <section className="hero-image">
          {/* <img src={Hero} style={{border: '2px solid blue'}}/> */}
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
        <div style={{border: '2px solid red', width: '100%'}}>
            <Row>
              {list.map((element, index) => {
                return(
                  <Col key={index} xs={12} sm={12} md={4}>
                    <div style={{border: '2px solid blue', width: '100%'}}>
                      <img src={element.imgSrc} style={{width: 'auto', height: '100px'}}/>
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