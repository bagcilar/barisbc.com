import React, { Component } from 'react';
import {NavLink} from "react-router-dom"
import './css/projects.css';
import graderPicture from '../res/grader.png'


var graderDescription = "Enter your marks for components of a course, receive continuous feedback, dynamically calculate your final grade!";


class Projects extends Component {

  
  render() {

    return (
        <div className="ProjectsDiv">



            
        <div class="ui slow move reveal" className ="graderSection">

          <div class="ui visible content">
              <img src={graderPicture} className = "graderPicture"/>
          </div>

          <div class="ui hidden content" className = "explanationReveal">
              <NavLink to="/grader" className="graderNav">Try it!</NavLink>
          </div>

        </div>



        </div>
    );
  }
}

export default Projects;