import React, { Component } from 'react';
import './css/home.css';

class home extends Component {
  render() {
    return (

      <div className = "HomePage">

        <div className="WelcomeMessage">
          <p>welcome to barisbc.com!</p>
        </div>

        <div className="GreetingMessage">
          <p align="center">on this website, I host some projects that I am working on</p>
          <p align="center">these projects are mostly for learning purposes and are not meant to reinvent the wheel</p>
          <p align="center">stay tuned for more to come...</p>
        </div>



              
      </div>
      

);
  }
}

export default home;