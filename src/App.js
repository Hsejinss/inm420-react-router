import React from "react"
import Home from './pages/Home';
import About from './pages/About'
import Project from './pages/Project';
import Contact from './pages/Contact'
import {NavLink, Route, Switch} from 'react-router-dom'; 
import Logo from '../src/img/logo.png';

/*
Route는 url주소에 따라 어떤 component를 보여줄 지 결정해준다.
Navlink는 click이라는 action이 발생했을 때 url을 바꿔준다.
*/

const App = (props) => {
  
  <section ClassName="logo">
        <img src={Logo} />
  </section>
  // .map 설명 할 차례 !!!!
  const routeList = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/project", title: "Project" },
    { path: "/contact", title: "Contact" }
  ];

  return(
    <div> 
      <div style={{border: '2px solid red', width: '100%', height: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 25px'}}>
        <div>
          <img src="./img/logo.png" alt="logo" />
        </div>
        <div>
          {routeList.map((element, index) => {
            return(
              <NavLink key={index} style={{margin: '0 20px'}} exact to={element.path} activeStyle={{color: 'red'}} >
                {element.title}
              </NavLink>
            )
          })}
          {/*Route이전에 들어갈 contents: Logo, Nav*/}
          {/* <NavLink
            exact to="/"
            activeStyle={{color: 'red'}}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            activeStyle={{color: 'red'}}
          >
            About
          </NavLink>
          <NavLink
            to="/project"
            activeStyle={{color: 'red'}}
          >
            Project
          </NavLink>
          <NavLink
            to="/contact"
            activeStyle={{color: 'red'}}
          >
            Contact
          </NavLink> */}
        </div>


        {/* Add NavLink */}
      </div>
      <Switch>
        <Route exact path="/" component={() => { return <Home /> }} />
        <Route path="/about" component={() => {return <About />}} />
        <Route path="/project" component={() =>{return <Project />}}/>
        <Route path="/contact" component={() =>{return <Contact />}}/>
      </Switch>
    </div>
  )
}

export default App;


/* *************
   NOTE
************* */
/*
  - React SPA with pages for Home, About, Projects, Contact (O)
  - use NavLink to show active main nav item (O)
  - Nested Routing example for separate project pages to show individual project detail pages (X)
    -> /project/projectDetailA
    -> /project/projectDetailB
  - Design each page (X)
  - custom mobile first responsive web design (X)
  - consistent code style (X)  
  - organize project files (X)
*/