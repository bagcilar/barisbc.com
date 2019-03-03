import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './css/header.css';



function getPath{

    return this.props.location.pathname;

}


class header extends Component {
  
  
    render() {

    


    return (



      <div>
        <NavLink to="/" id="homeNav">Home</NavLink>
        <NavLink to="/projects" id="projectsNav">Projects</NavLink>
        <NavLink to="/info" id="infoNav">Info</NavLink>
      </div>




);
  }
}

export default header;