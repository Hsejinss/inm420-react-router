import React from 'react';
// import { useParams, useHistory } from 'react-router-dom';
import { useParams, NavLink } from 'react-router-dom';
import { projectDataList } from '../mockdata/projectData';

const ProjectDetail = (props) => {

  const { projectId } = useParams();
  // const history = useHistory();

  // const onClickBack = () => {
  //   history.goBack();
  // }

  return(
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
      <NavLink exact to={`/project`} style={{textDecoration: 'none', cursor: 'pointer', backgroundColor: '#333', padding: '10px 15px', color: '#fff', borderRadius: '20px'}}>
        View Detail
      </NavLink>
      {/* <div onClick={onClickBack} style={{cursor: 'pointer', backgroundColor: '#333', padding: '10px 15px', color: '#fff', borderRadius: '20px'}}>
        Back
      </div> */}
      <div style={{color: '#333', fontSize: '20px', fontWeight: 'bold', margin: '15px 0'}}>
        Title : {projectDataList[projectId].title}
      </div>
      <div>
        Description : {projectDataList[projectId].desc}
      </div>
    </div>
  )
};

export default ProjectDetail;