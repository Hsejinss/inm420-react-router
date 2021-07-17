import React from 'react';
// import './Project.css';
import '../css/Style.css';
// import project1 from '../img/Innisfree_brochure_1.jpg';
// import project2 from '../img/W_magazine_cover.jpg';


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
       <div className="project-section">
        <section className="project1-image">
          {/* <img src={project1} alt={"project1"}/> */}
        </section>
        <div className="project1-content">
          <h1 className="project-name">Innisfree Green festival Brochure</h1>
          <p className="project-description">Practicing Green Life with Enjoyment, <br />
          Created a brochure with Innisfree's Play Green Festival.</p>
        </div>
        <div className="learnMore-container">
          <button className="learnMore">Learn More</button>
        </div>
      </div>
       {/*project2*/}
       <div className="project-section">
        <section className="project2-image">
          {/* <img src={project2} alt={"project2"}/> */}
        </section>
        <div className="project1-content">
          <h1 className="project-name">W magazine</h1>
          <p className="project-description">Girl Power Magazine <br />
          A day in the extraordinary life of girl</p>
        </div>
        <div className="learnMore-container">
          <div className="learnMore">Learn More</div>
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
