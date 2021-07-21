import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projectData } from './projectData';
import { Row, Col } from 'react-bootstrap';

import '../css/Style.css';

const ProjectDetail = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const params = useParams();

  return(
    <div className="projectDetail">
      <h1 className="project-content-text">My Project</h1>
      <Row>
        {projectData[params.id].imageList.map((element, index) => {
          return(
            <Col key={index} xs={12} sm={12} md={6}>
              <img className="projectDetailImage" src={element} alt={index} />
            </Col>
          )
        })}
      </Row>
      <div className="detailTitle">
        {projectData[params.id].title}
      </div>
      <div className="detailDesc1">
        {projectData[params.id].smallDesc}
      </div>
      <div className="detailDesc2">
      
        {projectData[params.id].bigDesc}
      </div>
    </div>
  )
};

export default ProjectDetail;