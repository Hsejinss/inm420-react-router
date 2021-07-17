import React from 'react';
import '../css/Style.css';
import Hero from '../img/hero-image.jpg';
import project1 from '../img/Innisfree_brochure_1.jpg';
import project2 from '../img/W_magazine_cover.jpg';

import Ps from '../img/PS icon.png'
import Ai from '../img/AI icon.png'
import Id from '../img/ID icon.png'
import Vs from '../img/VS icon.png'
import Ae from '../img/AE icon.png'
import Xd from '../img/XD icon.png'


import { Row, Col } from 'react-bootstrap';

const Home = (props) => {

  const list = [
    { imgSrc: Ps, contentA: 'Adobe Photoshop', contentB: 'Image 1 Description', contentC: 'Image 1 Tag' },
    { imgSrc: Ai, contentA: 'Adobe illustration', contentB: 'Image 2 Desc', contentC: 'Image 2 Tag' },
    { imgSrc: Id, contentA: 'Adobe Indesign', contentB: 'Image 3 Desc', contentC: 'Image 3 Tag' },
    { imgSrc: Vs, contentA: 'Visual Studio Code', contentB: 'Image 3 Desc', contentC: 'Image 3 Tag' },
    { imgSrc: Ae, contentA: 'Adobe AfterEffect', contentB: 'Image 3 Desc', contentC: 'Image 3 Tag' },
    { imgSrc: Xd, contentA: 'Adobe XD', contentB: 'Image 3 Desc', contentC: 'Image 3 Tag' },
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