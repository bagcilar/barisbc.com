import React, { Component } from 'react';
import {NavLink} from "react-router-dom"
import './css/projects.css';
import resumeFile from '../res/resume.pdf'

var graderDescription = "This is a simple application that allows users to enter their marks on components of a course. The application provides continuous feedback, calculates final grade, and lets users adjust their marks dynamically in order to determine the grades needed for a given final mark.";


class Resume extends Component {

  
  render() {

    return (

<iframe src={resumeFile}
        width="100%" height="1000" frameborder="0" allowfullscreen sandbox>
</iframe>    );
  }
}

export default Resume;