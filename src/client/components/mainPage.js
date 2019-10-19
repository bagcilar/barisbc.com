import React, { Component } from 'react';
import './css/mainPage.css';

import AboutMe from './aboutme.js';
import Projects from './projects.js';
import Contact from './contact.js';
import NavBar from './navBar.js';
import Home from './home.js';
import HelperFunctions from './helperFunctions.js';

class mainPage extends Component {

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

        <HelperFunctions />

      </div>

    );
  }

}

export default mainPage;