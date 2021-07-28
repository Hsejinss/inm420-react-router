import React, {useEffect} from 'react';
import '../css/Style.css';
import { useRouteMatch, NavLink, Switch, Route } from 'react-router-dom';
import ProjectDetail from './ProjectDetail';
import { projectData } from './projectData';
import { gsap } from 'gsap';

const Project = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0);
    //profileEffect
    gsap.fromTo(".project-content-0", { duration:1, x: -150}, {duration:1, x: 0});
    gsap.fromTo(".project-content-1", { duration:1, x: -150}, {duration:1, x: 0});

  },[])


  const { path } = useRouteMatch();
  return(
    <Switch>
      <Route exact path={path}>
        <div className="project-component">
          {/* project content */}
          <div className="project-content">
            <div className="content1">
              <h1 className="project-content-text">My Project</h1>
            </div>
          </div>
          {projectData.map((element, index) => {
            return(
              <div className={`project-content-${index}`}key={index}>
                <section className="project-image">
                  <img src={element.imageList[0]} alt={element.title}/>
                </section>
                <div className="project-content">
                  <h1 className="project-name">{element.title}</h1>
                  <p className="project-description">{element.smallDesc}</p>
                </div>
                <div className="learnMore-container">
                  <NavLink className="learnMore" exact to={`${path}/${element.id}`}> 
                    Learn More
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </Route>
      {/* changed link with path / id */}
      <Route exact path={`${path}/:id`}>
        <ProjectDetail />
      </Route>

    </Switch>
  )
};

export default Project;
