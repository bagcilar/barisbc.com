import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
 

import './components/css/App.css';


import Header from './components/header.js';
import Footer from './components/footer.js';
import Home from './components/home.js';
import Projects from './components/projects.js';
import Info from './components/info.js';
import Grader from './components/grader.js';
import Error from './components/error.js';




class App extends Component {
  render() {
    return (

      <BrowserRouter>

        <div className="App">

          <div>
            <Header />
          </div>

          <div className="content">
            <Switch>
              <Route path="/" component={Home} exact/> 
              <Route path="/projects" component={Projects} /> 
              <Route path="/grader" component={Grader} /> 
              <Route path="/info" component={Info} />
              <Route component={Error} /> 
            </Switch>
          </div>

          <div>
           <Footer />
          </div>

        </div>

        
      </BrowserRouter>


  




);
  }
}

export default App;
