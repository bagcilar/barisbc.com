import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import './css/header.css';

class header extends Component {


  
  render() {

    


  
    if (window.location.pathname === "/"){
      return (
        <div className="HeaderDiv">
          <div className="HeaderInnerDiv">
            <NavLink to="/" className="HomeNav" style={{color: "brown"}}>Home</NavLink>
            <NavLink to="/projects" className="ProjectsNav">Projects</NavLink>
            <NavLink to="/info" className="InfoNav">About</NavLink>
          </div>
        </div>

      );

      }else if (window.location.pathname === "/info"){
        return (
          <div className="HeaderDiv">
            <div className="HeaderInnerDiv">
              <NavLink to="/" className="HomeNav">Home</NavLink>
              <NavLink to="/projects" className="ProjectsNav">Projects</NavLink>
              <NavLink to="/info" className="InfoNav"style={{color: "brown"}}>About</NavLink>
            </div>
          </div>
        );
        
      }else if (window.location.pathname === "/projects" || window.location.pathname === "/grader"){
        return (
          <div className="HeaderDiv">
            <div className="HeaderInnerDiv">
              <NavLink to="/" className="HomeNav">Home</NavLink>
              <NavLink to="/projects" className="ProjectsNav"style={{color: "brown"}}>Projects</NavLink>
              <NavLink to="/info" className="InfoNav">About</NavLink>
            </div>
          </div>

        );
      }



}
}

export default header;