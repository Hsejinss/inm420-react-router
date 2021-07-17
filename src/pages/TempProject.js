import React from 'react';
// import { useRouteMatch, useHistory, Switch, Route } from 'react-router-dom';
import { useRouteMatch, NavLink, Switch, Route } from 'react-router-dom';
import { projectDataList } from '../mockdata/projectData';
import ProjectDetail from './projectDetail';

const Project = (props) => {

  const { path, url } = useRouteMatch();
  // const history = useHistory();

  console.log(path); // /project
  console.log(url); // /project

  // const onClickProjectDetail = (projectId) => {
  //   history.push(`${url}/${projectId}`);
  // };

  return(
    <div>
      <h2>Project</h2>

      <Switch>
        <Route exact path={path} component={() => { return(
          <div>
            <h3>Please select a project to view detail.</h3>
            {projectDataList.map((element, index) => {
              return(
                <div key={index} style={{display: 'flex', alignItems: 'center', margin: '15px 0'}}>
                  <div>
                    {element.title}
                  </div>
                  <div style={{margin: '0 20px'}}>
                    {element.desc}
                  </div>
                  <NavLink exact to={`${url}/${element.id}`} style={{textDecoration: 'none', cursor: 'pointer', backgroundColor: '#333', padding: '10px 15px', color: '#fff', borderRadius: '20px'}}>
                    View Detail
                  </NavLink>
                  {/* <div onClick={() => onClickProjectDetail(element.id)} style={{cursor: 'pointer', backgroundColor: '#333', padding: '10px 15px', color: '#fff', borderRadius: '20px'}}>
                    View Detail
                  </div> */}
                </div>
              )
            })}
          </div>
        ); }}>
        </Route>
        <Route path={`${path}/:projectId`}>
          <ProjectDetail />
        </Route>
      </Switch>
    </div>
  )
};

export default Project;