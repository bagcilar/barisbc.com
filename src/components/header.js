import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import './css/header.css';

class header extends Component {
  
  render() {


    if (window.location.pathname == "/"){
      return (
        <div className="headerDiv">
          <NavLink to="/" className="homeNav" style={{borderBottom: "1px solid", borderBottomColor: "red"}}>Home</NavLink>
          <NavLink to="/projects" className="projectsNav">Projects</NavLink>
          <NavLink to="/info" className="infoNav">Info</NavLink>
        </div>
      );

      }else if (window.location.pathname == "/info"){
        return (
          <div className="headerDiv">
            <NavLink to="/" className="homeNav">Home</NavLink>
            <NavLink to="/projects" className="projectsNav">Projects</NavLink>
            <NavLink to="/info" className="infoNav"style={{borderBottom: "1px solid", borderBottomColor: "red"}}>Info</NavLink>
          </div>
        );
        
      }else if (window.location.pathname == "/projects" || window.location.pathname == "/grader"){
        return (
          <div className="headerDiv">
            <NavLink to="/" className="homeNav">Home</NavLink>
            <NavLink to="/projects" className="projectsNav"style={{borderBottom: "1px solid", borderBottomColor: "red"}}>Projects</NavLink>
            <NavLink to="/info" className="infoNav">Info</NavLink>
          </div>
        );
      }



}
}

export default header;