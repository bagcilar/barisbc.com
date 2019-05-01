import React, { Component } from 'react';
import {NavLink} from "react-router-dom"
import { Button, Modal, Image, Icon, Divider} from 'semantic-ui-react';
import './css/projects.css';

var graderDescription = "This is a simple application that allows users to enter their marks on components of a course. The application provides continuous feedback, calculates final grade, and lets users adjust their marks dynamically in order to determine the grades needed for a given final mark.";


class Projects extends Component {

  
  render() {

    return (
        <div className="ProjectsDiv">

          <div clasName="ProjectList">

            <div style={{marginTop: "200px"}}className="graderSection">
              <NavLink to="/grader" className="graderNav">Grader</NavLink>
              <p style={{marginTop: "20px"}}>{graderDescription}</p>
            </div>

          <div class="ui divider"></div>

          </div>

        </div>
    );
  }
}

export default Projects;