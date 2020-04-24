import React, { Fragment } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import NavBar from './NavBar'
import Landing from './Landing'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'

function App() {
  return (
    <Fragment>

        <NavBar/>

      

        <Switch>
        <Route path="/about" render= {() => {
            
            return (
              <Fragment>

                <About/>
              </Fragment>
            );
          }}
          />
          <Route path="/contact" render= {() => {
            
            return (
              <Fragment>

                <Contact/>
              </Fragment>
            );
          }}
          />
          
        <Route path="/projects" render= {() => {
            
            return (
              <Fragment>

                <Projects/>
              </Fragment>
            );
          }}
          />
       
          <Route path="/" render= {() => {
            
            return (
              <Fragment>

                <Landing/>
              </Fragment>
            );
          }}
          />
          

        </Switch>

      </Fragment>

  );
}

export default withRouter(App);
