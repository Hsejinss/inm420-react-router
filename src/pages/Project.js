import React from 'react';
// import './Project.css';
import './Style.css';

// import project1 from '../img/innisfree_brochure_1';


const Project = (props) => {
  return(
    <div className="project-component">
      This is Project Component.
      
      {/*project1*/}
      {/* <div className="project1-section">
        <section className="project1-image">
          <img src={project1} />
        </section>
      </div> */}

      {/* project content */}
      <div className="project-content">
        <div className="content1">
          <h1 className="project-content-text">My Project</h1>
        </div>
      </div>
      {/* project content grid */}
      <div className="row grid-container-1">
        <div className="col col-6 col-md-6 project-design-container">
          <section ClassName="project-content-1">
          </section>
        </div>
      </div>
    </div>
  )
};

export default Project;
