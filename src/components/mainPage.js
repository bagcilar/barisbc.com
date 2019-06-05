import React, { Component } from 'react';
import './css/mainPage.css';
import { NavLink } from "react-router-dom";
import Particles from 'react-particles-js';

import AboutMe from './aboutme.js';
import Projects from './projects.js';
import Contact from './contact.js';

import {particlesOptions} from './homeFunctions';
import {greeter} from './homeFunctions';

//colouring of the nav bar according to the target value passed
function navColourAdjuster(target){
  document.getElementById("homeSectionButton").style.color = "grey";
  document.getElementById("projectsSectionButton").style.color = "grey";
  document.getElementById("aboutSectionButton").style.color = "grey";
  document.getElementById("contactSectionButton").style.color = "grey";
  document.getElementById(target).style.color = "brown";
}

class mainPage extends Component {

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

  //listens for scrolling events
  componentDidMount() {
    window.addEventListener('scroll', this.onWindowScroll);
  }
 
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onWindowScroll);
  }

  //checks the current viewport location when there is a scroll, adjusts colour of nav bar item accordingly
  onWindowScroll(){
    var homeBounding = document.getElementById("homeSection").getBoundingClientRect();
    var aboutBounding = document.getElementById("aboutMeSection").getBoundingClientRect();
    var projectsBounding = document.getElementById("projectsSection").getBoundingClientRect();
    var contactBounding = document.getElementById("contactSection").getBoundingClientRect();
    var threshold = 70;

    if (homeBounding.top > -threshold && homeBounding.top < threshold){
      navColourAdjuster("homeSectionButton")
    }
    else if (aboutBounding.top > -threshold && aboutBounding.top < threshold){
      navColourAdjuster("aboutSectionButton")
    }
    else if (projectsBounding.top > -threshold && projectsBounding.top < threshold){
      navColourAdjuster("projectsSectionButton")
    }
    else if (contactBounding.top > -threshold && contactBounding.top < threshold){
      navColourAdjuster("contactSectionButton")
    }
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

      <div className = "MainPage">

        <section id = "homeSection">

              <Particles className='particles' params={particlesOptions} />
              <div className="WelcomeMessageDiv">
                <p id="timeGreeting" align="center">{greeter()}</p>
                <p id="welcomeMessage" align="center"> welcome to <span align="center"id="welcomeMessagePart2">barisbc.com</span></p>
                <button id = "startButton" onClick={() => {this.scroll("about")}}>
                  <i class="angle double down icon"></i>  
                </button>
              </div>
          
        </section>


        <section className = "headerSection">

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

        </section>
        

        <section id = "aboutMeSection">
          <AboutMe />
        </section>

        <section id = "projectsSection">
          <Projects />
        </section>

        <section id = "contactSection">
          <Contact />
        </section>

      </div>

);
  }
}

export default mainPage;