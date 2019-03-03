import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import './css/App.css';


var graderMessage = "This is a simple application that allows users to enter their marks on components of a course. The application provides continuous feedback, calculates final grade, and lets users adjust their marks dynamically in order to determine the grades needed for a given final mark."


class projects extends Component {
  render() {
    return (



      <div>
        <NavLink to="/grader">Grader</NavLink>
        <p>{graderMessage}</p>
      </div>




);
  }
}

export default projects;