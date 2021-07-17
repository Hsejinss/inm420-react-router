import React from "react"
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import {NavLink, Route, Switch} from 'react-router-dom'; 
import Logo from '../src/img/logo.png';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';

/*
Route는 url주소에 따라 어떤 component를 보여줄 지 결정해준다.
Navlink는 click이라는 action이 발생했을 때 url을 바꿔준다.
*/

//component (App) 안에 html은 return안에 있어야 한다!
//logic은 component와 return사이에서 사용가능!

const App = (props) => {
  
  // .map 설명 할 차례 !!!!
  /*nav*/
  const routeList = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/project", title: "Project" },
    { path: "/contact", title: "Contact" }
  ];



  return(
    <div> 
      <div style={{width: '100%'}}>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <section className="logo">
          <img src={Logo} />
        </section>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {routeList.map((element, index) => {
              return(
                <NavLink key={index} style={{margin: '0 20px', textDecoration: 'none', color: '#333'}} exact to={element.path} activeStyle={{color: '#f47981'}} >
                  {element.title}
                </NavLink>
              )
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* 
      <Navbar expand="lg" style={{border: '2px solid red', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Container >

         
        </Container>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar> */}

      {/* <Navbar expand="lg" style={{border: '2px solid blue', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <section className="logo">
          <img src={Logo} />
        </section>
        <div style={{border: '2px solid green'}}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div>
                {routeList.map((element, index) => {
                  return(
                    <NavLink key={index} style={{margin: '0 20px'}} exact to={element.path} activeStyle={{color: 'red'}} >
                      {element.title}
                    </NavLink>
                  )
                })}
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar> */}


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


        {/* Add NavLink */}
      </div>
      <div style={{width: '100%'}}>
        <Switch>
          <Route exact path="/" component={() => { return <Home /> }} />
          <Route path="/about" component={() => {return <About />}} />
          <Route path="/project" component={() =>{return <Project />}}/>
          <Route path="/contact" component={() =>{return <Contact />}}/>
        </Switch>
      </div>

      {/*footer*/}
      <footer>
        <div className="icon-container">
          <div>
            <i class="fa fa-instagram icon-margin" aria-hidden="true"></i>
          </div>
          <div>
            <i class="fa fa-facebook-official icon-margin" aria-hidden="true"></i>
          </div>
          <div>
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>  
          </div>
        </div>

        
        <h1 className="footer-info"> Info  │ Support │ FAQs  <br/>
        Terms of Use ㆍ Privacy Policy
        </h1>
        <p>ⓒ2021</p>
      </footer>

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

/* Help me!!! */
/*
App.js -> footer는 어디에 넣어야 하는지? O
Home.js -> 로고 불러오기 안 됨 O
Project.js -> 사진 불러오기가 안 됨 O
Bootstrap, Bootstrap icon 어떻게 쓰는지?? O

*/