import React, { Component } from 'react';
import {NavLink} from "react-router-dom"
import './css/projects.css';
import graderPicture from '../res/grader.png'


var graderDescription = "Enter your marks for components of a course, receive continuous feedback, dynamically calculate your final grade!";


class Projects extends Component {

  
  render() {

    return (
        <div className="ProjectsDiv">


        <div className = "graderProjectDiv">

          <img src= {graderPicture} className="graderImage"/>
          <div class="graderExplanation">
              {graderDescription}
              <p>
              <NavLink to="/grader" id="graderNav">Try it!</NavLink>
              </p>
          </div>

        </div>




        </div>
    );
  }
}

export default Projects;