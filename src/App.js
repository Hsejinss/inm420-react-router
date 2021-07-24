import React from "react"
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import {NavLink, Route} from 'react-router-dom'; 
import Logo from '../src/img/logo.png';
import {Navbar, Nav } from 'react-bootstrap';
import './App.css';

const App = (props) => {
  /*nav*/
  const routeList = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/project", title: "Project" },
    { path: "/contact", title: "Contact" }
  ];

  return(
    <div> 
      <div>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <section className="logo">
          <img src={Logo} alt={'Logo'} />
        </section>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {routeList.map((element, index) => {
              return(
                <NavLink key={index} className="Navstyle" exact to={element.path} activeStyle={{color: '#f47981'}} >
                  {element.title}
                </NavLink>
              )
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Add NavLink */}
      </div>
      <div style={{width: '100%'}}>
        <Route exact path="/">
          {/* match -> Indicate where the user is */}
          {({ match }) => <Home animation={match !== null} />}
        </Route>
        <Route path="/about">
          {({ match }) => <About animation={match !== null} />}
        </Route>
        <Route path="/project">
          <Project />
        </Route>
        <Route path="/contact">
          {({ match }) => <Contact animation={match !== null} />}
        </Route>
      </div>

      {/*footer*/}
      <footer>
        <div className="icon-container">
          <div>
            <i className="fa fa-instagram icon-margin" aria-hidden="true"></i>
          </div>
          <div>
            <i className="fa fa-facebook-official icon-margin" aria-hidden="true"></i>
          </div>
          <div>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>  
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
