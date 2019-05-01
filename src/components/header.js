import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import './css/header.css';

class header extends Component {
  
  render() {

  
  
    if (window.location.pathname == "/"){
      return (
        <div className="HeaderDiv">
          <div className="HeaderInnerDiv">
            <NavLink to="/" className="HomeNav" style={{borderBottom: "1px solid", borderBottomColor: "red", paddingBottom: "1%"}}>Home</NavLink>
            <NavLink to="/projects" className="ProjectsNav">Projects</NavLink>
            <NavLink to="/info" className="InfoNav">Info</NavLink>
          </div>
        </div>

      );

      }else if (window.location.pathname == "/info"){
        return (
          <div className="HeaderDiv">
            <div className="HeaderInnerDiv">
              <NavLink to="/" className="HomeNav">Home</NavLink>
              <NavLink to="/projects" className="ProjectsNav">Projects</NavLink>
              <NavLink to="/info" className="InfoNav"style={{borderBottom: "1px solid", borderBottomColor: "red", paddingBottom: "1%"}}>Info</NavLink>
            </div>
          </div>
        );
        
      }else if (window.location.pathname == "/projects" || window.location.pathname == "/grader"){
        return (
          <div className="HeaderDiv">
            <div className="HeaderInnerDiv">
              <NavLink to="/" className="HomeNav">Home</NavLink>
              <NavLink to="/projects" className="ProjectsNav"style={{borderBottom: "1px solid", borderBottomColor: "red", paddingBottom: "1%"}}>Projects</NavLink>
              <NavLink to="/info" className="InfoNav">Info</NavLink>
            </div>
          </div>

        );
      }



}
}

export default header;