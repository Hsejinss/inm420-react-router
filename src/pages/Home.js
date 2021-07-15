import React from 'react';
import '../css/Style.css';
import Hero from '../img/hero-image.jpg';
import project1 from '../img/Innisfree_brochure_1.jpg';
import project2 from '../img/W_magazine_cover.jpg';
import { Row, Col } from 'react-bootstrap';

const Home = (props) => {

  const list = [
    { imgSrc: Hero, contentA: 'Image 1', contentB: 'Image 1 Description', contentC: 'Image 1 Tag' },
    { imgSrc: project1, contentA: 'Image 2', contentB: 'Image 2 Desc', contentC: 'Image 2 Tag' },
    { imgSrc: project2, contentA: 'Image 3', contentB: 'Image 3 Desc', contentC: 'Image 3 Tag' },
  ];

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
                      <div>{element.contentC}</div>
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