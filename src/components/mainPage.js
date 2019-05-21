import React, { Component } from 'react';
import './css/mainPage.css';
import { NavLink } from "react-router-dom";
import Particles from 'react-particles-js';

import AboutMe from './aboutme.js';
import Projects from './projects.js';
import Contact from './contactMe.js';

import {particlesOptions} from './homeFunctions';
import {greeter} from './homeFunctions';

class mainPage extends Component {

  constructor(props) {
    super(props)
    this.homeRef = React.createRef()
    this.projectsRef = React.createRef()
    this.aboutMeRef = React.createRef()
    this.contactRef = React.createRef()
  }


  scroll(ref) {

    var element;

    if (ref === this.homeRef){
      this.refs.homeSectionButton.style.color = "brown";
      this.refs.projectsSectionButton.style.color = "grey";
      this.refs.aboutMeSectionButton.style.color = "grey";
      this.refs.contactSectionButton.style.color = "grey";
    } 
    else if (ref === this.projectsRef){
      this.refs.homeSectionButton.style.color = "grey";
      this.refs.projectsSectionButton.style.color = "brown";
      this.refs.aboutMeSectionButton.style.color = "grey";
      this.refs.contactSectionButton.style.color = "grey";
    }else if (ref === this.aboutMeRef){
      this.refs.homeSectionButton.style.color = "grey";
      this.refs.projectsSectionButton.style.color = "grey";
      this.refs.aboutMeSectionButton.style.color = "brown";
      this.refs.contactSectionButton.style.color = "grey";
    }else if (ref === this.contactRef){
      this.refs.homeSectionButton.style.color = "grey";
      this.refs.projectsSectionButton.style.color = "grey";
      this.refs.aboutMeSectionButton.style.color = "grey";
      this.refs.contactSectionButton.style.color = "brown";
    } else if (ref === this.greetingRef){
      element = document.getElementById('greetingSection');
    }

    ref.current.scrollIntoView({behavior: 'smooth'})

  }



  render() {

    return (

      <div className = "MainPage">



        <section ref={this.homeRef} className = "homeSection">

          <div>
              <Particles className='particles' params={particlesOptions} />
              <div className="WelcomeMessageDiv">
                <p id="timeGreeting" align="center">{greeter()}</p>
                <p id="welcomeMessage" align="center"> welcome to <span align="center"id="welcomeMessagePart2">barisbc.com</span></p>
                <button id = "startButton" onClick={() => {this.scroll(this.aboutMeRef)}}>
                  <i class="angle double down icon"></i>  
                </button>
              </div>
          </div>
          
        </section>


        <section className = "headerSection">
          <div className = "headerDiv">
            <button id = "homeSectionButton" ref="homeSectionButton" onClick={() => {this.scroll(this.homeRef)}}> barisbc </button>
            <button id = "aboutMeSectionButton" ref="aboutMeSectionButton" onClick={() => {this.scroll(this.aboutMeRef)}}> about me </button>
            <button id = "projectsSectionButton" ref="projectsSectionButton" onClick={() => {this.scroll(this.projectsRef)}}> projects </button>
            <button id = "contactSectionButton" ref="contactSectionButton" onClick={() => {this.scroll(this.contactRef)}}> contact </button>           
            <NavLink to="/resume" target="_blank" id="resumeButton">resume</NavLink>
          </div>
        </section>


        <section ref={this.aboutMeRef} className = "aboutMeSection">
          <AboutMe />
          <div class="ui divider" ></div>
        </section>


        <section ref={this.projectsRef} className = "projectsSection">
          <Projects />
        </section>


        <section ref={this.contactRef} className = "contactSection">
          <Contact />
        </section>

        <section className = "footerUpperSection">
          <button id = "footerStartButton" onClick={() => {this.scroll(this.homeRef)}}>
              <i id = "footerStartIcon" class="angle double up icon"></i>  
          </button>
        </section>

      </div>

);
  }
}

export default mainPage;