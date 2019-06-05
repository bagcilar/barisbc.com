import React, { Component } from 'react';
import './css/mainPage.css';

import AboutMe from './aboutme.js';
import Projects from './projects.js';
import Contact from './contact.js';
import NavBar from './navBar.js';
import Home from './home.js';


//colouring of the nav bar according to the target value passed
export function navColourAdjuster(target) {
  document.getElementById("homeSectionButton").style.color = "grey";
  document.getElementById("projectsSectionButton").style.color = "grey";
  document.getElementById("aboutSectionButton").style.color = "grey";
  document.getElementById("contactSectionButton").style.color = "grey";
  document.getElementById(target).style.color = "brown";
}

class mainPage extends Component {

  constructor(props) {
    super(props);
  }

  //listens for scrolling events
  componentDidMount() {
    window.addEventListener('scroll', this.onWindowScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onWindowScroll);
  }

  //checks the current viewport location when there is a scroll, adjusts colour of nav bar item accordingly
  onWindowScroll() {
    var homeBounding = document.getElementById("homeSection").getBoundingClientRect();
    var aboutBounding = document.getElementById("aboutMeSection").getBoundingClientRect();
    var projectsBounding = document.getElementById("projectsSection").getBoundingClientRect();
    var contactBounding = document.getElementById("contactSection").getBoundingClientRect();
    var threshold = 70;

    if (homeBounding.top > -threshold && homeBounding.top < threshold) {
      navColourAdjuster("homeSectionButton")
    }
    else if (aboutBounding.top > -threshold && aboutBounding.top < threshold) {
      navColourAdjuster("aboutSectionButton")
    }
    else if (projectsBounding.top > -threshold && projectsBounding.top < threshold) {
      navColourAdjuster("projectsSectionButton")
    }
    else if (contactBounding.top > -threshold && contactBounding.top < threshold) {
      navColourAdjuster("contactSectionButton")
    }
  }

  render() {

    return (

      <div className="MainPage">

        <section id="homeSection">
          <Home />
        </section>

        <section id="headerSection">
          <NavBar />
        </section>

        <section id="aboutMeSection">
          <AboutMe />
        </section>

        <section id="projectsSection">
          <Projects />
        </section>

        <section id="contactSection">
          <Contact />
        </section>

      </div>

    );
  }

}

export default mainPage;