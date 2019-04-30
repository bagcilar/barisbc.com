import React, { Component } from 'react';
import './css/Home.css';

class home extends Component {
  render() {
    return (

      <div>

        <div className="WelcomeMessage">
          <p>welcome to barisbc.com!</p>
        </div>

        <div className="Greeting">
          <p>on this website I host the projects I'm working on</p>
          <p>currently only the grader is up and running, will be adding more features</p>
          <p>stay tuned!</p>
        </div>

      </div>

);
  }
}

export default home;