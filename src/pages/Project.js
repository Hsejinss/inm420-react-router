import React from 'react';
// import './Project.css';
import './Style.css';
import project1 from '../img/Innisfree_brochure_1.jpg';
import project2 from '../img/W_magazine_cover.jpg';


const Project = (props) => {
  return(
    <div className="project-component">
      {/* project content */}
      <div className="project-content">
        <div className="content1">
          <h1 className="project-content-text">My Project</h1>
        </div>
      </div>
       {/*project1*/}
       <div className="project1-section">
        <section className="project1-image">
          <img src={project1} alt={"project1"}/>
        </section>
        <div className="project1-content">
          <h1>Innisfree Green festival Brochure</h1>
          <p>Description</p>
        </div>
      </div>
       {/*project2*/}
       <div className="project2-section">
        <section className="project2-image">
          <img src={project2} alt={"project2"}/>
        </section>
        <div className="project1-content">
          <h1>W magazine</h1>
          <p>Description :)</p>
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
