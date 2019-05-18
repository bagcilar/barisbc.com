import React, { Component } from 'react';
import './css/Home.css';
import Particles from 'react-particles-js';
import {Button, Icon} from 'semantic-ui-react'

import Footer from './footer.js';
import Home from './home.js';
import Projects from './projects.js';
import Info from './info.js';
import Grader from './grader.js';
import Error from './error.js';
import Test from './test.js';

function greeter(){
  var greetMessage="";
  var date = new Date();
  var hour = date.getHours();
  if (hour >= 12 && hour <= 17){
    greetMessage = "Good Afternoon!"
  }else if (hour >= 17 && hour <= 24){
    greetMessage = "Good Evening!"
  }else if (hour <= 12){
    greetMessage = "Good Morning!"
  }
  return greetMessage;
}

const particlesOptions = {
      particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 1000
        }
      },
      size: {
        value: 2,
        random: true,
        anim: {
          speed: 5,
          size_min: 0.3
        }
      },
      line_linked: {
        enable: true
      },
      move: {
        random: true,
        speed: 1,
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 100,
          line_linked:{
            opacity: 1
          }
        }
      }
    }
  
}

class home extends Component {

  constructor(props) {
    super(props)
    this.greetingRef = React.createRef()
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

      <div className = "HomePage">

        <section ref={this.homeRef} className = "homeSection">

          <Particles className='particles' params={particlesOptions} />
            <div className="WelcomeMessageDiv">
              <p id="timeGreeting" align="center">{greeter()}</p>
              <p id="welcomeMessage" align="center"> welcome to <span align="center"id="welcomeMessagePart2">barisbc.com</span></p>

              <button id = "startButton" onClick={() => {this.scroll(this.greetingRef)}}>
                <i class="angle double down icon"></i>  
              </button>
            </div>
            
        </section>


                
        <section className = "headerSection">
          <div className = "headerDiv">
            <button id = "homeSectionButton" ref="homeSectionButton" onClick={() => {this.scroll(this.homeRef)}}> barisbc </button>
            <button id = "projectsSectionButton" ref="projectsSectionButton" onClick={() => {this.scroll(this.projectsRef)}}> projects </button>
            <button id = "aboutMeSectionButton" ref="aboutMeSectionButton" onClick={() => {this.scroll(this.aboutMeRef)}}> about me </button>
            <button id = "contactSectionButton" ref="contactSectionButton" onClick={() => {this.scroll(this.contactRef)}}> contact </button>
          </div>
        </section>


        <section ref={this.greetingRef} className = "greetingSection">
          <p>This is the greeting section!</p>
        </section>


        <section ref={this.projectsRef} className = "projectsSection">
          <Projects />
        </section>


        <section ref={this.aboutMeRef} className = "aboutMeSection">
          <p>This is the about me section!</p>
        </section>


        <section ref={this.contactRef} className = "contactSection">
          <p>This is the contact me section!</p>
        </section>


        <section className = "footerSection">
          <p>This is the footer section!</p>
        </section>


      </div>


);
  }
}

export default home;