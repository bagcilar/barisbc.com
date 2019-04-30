import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
 

import './components/css/App.css';


import Header from './components/header.js';
import Footer from './components/footer.js';
import Home from './components/home.js';
import Projects from './components/projects.js';
import Info from './components/info.js';
import Grader from './components/grader.js';
import PageError from './components/error.js';




class App extends Component {
  render() {
    return (

      <BrowserRouter>

        <div className="App">

          <Header />


          <Switch>
            <Route exact path="/" component={Home}/> 
            <Route exact path="/projects" component={Projects}/> 
            <Route exact path="/grader" component={Grader}/> 
            <Route exact path="/info" component={Info} />
            <Route component={PageError} /> 
          </Switch>
        

          <Footer />

        </div>

        
      </BrowserRouter>


  




);
  }
}

export default App;
