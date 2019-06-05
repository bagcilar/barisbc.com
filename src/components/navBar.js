import React, { Component } from 'react';
import './css/App.css';
import { NavLink } from "react-router-dom";
import {navColourAdjuster} from './mainPage.js';


class navBar extends Component {


  constructor(props) {
    super(props);
    
  this.state = {
    lastHovered: 'homeSectionButton'
  };
  }

  //scrolls to the appropriate section and adjusts nav bar colour on nav bar clicks
  scroll(location) {

    var position = window.innerHeight;

    var target = location + "SectionButton";

    if (location === "home"){
      position = 0;
    }
    else if (location === "projects"){
      position *= 2;
    }else if (location == "contact"){
      position = document.body.scrollHeight;
    }

    window.scrollTo({
      top: position,
      behavior: 'smooth'
    });

    navColourAdjuster(target);
  }


    //changes the colour of nav element to brown on hover
  handleHover(target){
    var element = document.getElementById(target);
    
    //checks if hovered item is in view, if so sets the state
    if (element.style.color=="brown"){
      this.setState({ lastHovered: target })
    }

    element.style.color="brown"

  }

  //changes the colour of nav item to grey on mouseleave unless it signifies the section in view
  handleLeave(target){
    var element = document.getElementById(target);

    //checks if the item the mouse leaves signifies the section in view
    //if it doesn't, color is changed to grey
    if (this.state.lastHovered !== target){
      element.style.color="grey";
    }
  }
  
  render() {
    return (

        <div className = "headerDiv">
            <button
            id = "homeSectionButton"
            onMouseEnter={() => {this.handleHover("homeSectionButton")}}
            onMouseLeave={() => {this.handleLeave("homeSectionButton")}}
            onClick={() => {this.scroll("home")}}>
            home
            </button>
            <button
            id = "aboutSectionButton"
            onMouseEnter={() => {this.handleHover("aboutSectionButton")}}
            onMouseLeave={() => {this.handleLeave("aboutSectionButton")}}
            onClick={() => {this.scroll("about")}}>
            about me
            </button>
            <button
            id = "projectsSectionButton"
            onMouseEnter={() => {this.handleHover("projectsSectionButton")}}
            onMouseLeave={() => {this.handleLeave("projectsSectionButton")}}
            onClick={() => {this.scroll("projects")}}>
            projects
            </button>
            <button
            id = "contactSectionButton"
            onMouseEnter={() => {this.handleHover("contactSectionButton")}}
            onMouseLeave={() => {this.handleLeave("contactSectionButton")}}
            onClick={() => {this.scroll("contact")}}>
            contact
            </button>

            <NavLink to="/resume" target="_blank" id="resumeNav">resume</NavLink>

      </div>

);
  }
}

export default navBar;