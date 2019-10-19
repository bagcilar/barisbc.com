import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom"
import {HashRouter} from 'react-router-dom'
import './components/css/App.css';

import Footer from './components/footer.js';
import MainPage from './components/mainPage.js';
import Grader from './components/grader.js';
import DomainFinder from './components/domainFinder.js';
import Error from './components/error.js';
import Resume from './components/resume.js';

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

history.listen(_ => {
  window.scrollTo(0, 0)  
});


class App extends Component {
  render() {
    return (

      <HashRouter history={history}>

          <div className="content">

            <Switch>
              <Route path="/" component={MainPage} exact/> 
              <Route path="/resume" component={Resume} exact/> 
              <Route path="/grader" component={Grader} exact/>
              <Route path="/domainfinder" component={DomainFinder} exact/>
              <Route component={Error} /> 
            </Switch>

            <Footer />

          </div>

      </HashRouter>

    );
  }
}

export default App;
