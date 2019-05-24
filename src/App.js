import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom"
import { HashRouter } from 'react-router-dom'

import './components/css/App.css';


import Footer from './components/footer.js';
import MainPage from './components/mainPage.js';
import Grader from './components/grader.js';
import Error from './components/error.js';
import Test from './components/test.js';
import Resume from './components/resume.js';


class App extends Component {
  render() {
    return (

      <HashRouter >

          <div className="content">

            <Switch>
              <Route path="/" component={MainPage} exact/> 
              <Route path="/resume" component={Resume} exact/> 
              <Route path="/grader" component={Grader} exact/> 
              <Route component={Error} /> 
            </Switch>

            <Footer />

          </div>

      </HashRouter>


);
  }
}

export default App;
