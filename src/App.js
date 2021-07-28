import React from "react"
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import {NavLink, Route, Switch, useLocation} from 'react-router-dom'; 
import Logo from '../src/img/logo.png';
import {Navbar, Nav } from 'react-bootstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';

const App = (props) => {
  /*nav*/
  const routeList = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/project", title: "Project" },
    { path: "/contact", title: "Contact" }
  ];

  const location = useLocation();

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
                  <NavLink key={index} className="navstyle" exact to={element.path} activeStyle={{color: '#f47981'}} >
                    {element.title}
                  </NavLink>
                )
              })}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      {/* Add NavLink */}
      <div className="eachPageContainer">
        <TransitionGroup>
          <CSSTransition
              key={location.key}
              classNames="page"
              unmountOnExit
              timeout={300}
            >
              <Switch location={location}>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />  
                </Route>
                <Route path="/project">
                  <Project />
                </Route>
                <Route path="/contact">
                  <Contact />  
                </Route>
              </Switch>
            </CSSTransition>
        </TransitionGroup>
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
