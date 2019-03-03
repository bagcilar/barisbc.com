import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './css/App.css';

class header extends Component {
  
  
    render() {

    

        
    return (



      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/info">Info</NavLink>
      </div>




);
  }
}

export default header;