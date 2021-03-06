import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import './css/footer.css';
import githubIcon from '../res/github.png'
import linkedinIcon from '../res/linkedin.png'
import instaIcon from '../res/instagram.png'

class Footer extends Component {

  //handles scrolling to the top of the page
  scroll() {

    window.scroll({
      top: 0,
      behavior: 'smooth'
    });

  }

  //displays a double arrow icon when on mainPage
  //or 'home' when on other pages for navigation to the top of page
  navigation() {

    if (window.location.hash === "#/") {

      return (
        <button id="footerStartButton" onClick={() => { this.scroll() }}>
          <i id="doubleUpIcon" class="angle double up icon"></i>
        </button>
      )

    } else {
      return (
        <NavLink to="/" id="homeNav">home</NavLink>
      )

    }

  }

  render() {

    if (window.location.hash !== "#/resume") {

      return (
        <div className="FooterDiv">

          {this.navigation()}
          <div className="FooterInnerDiv">
            <a href="https://github.com/bagcilar" id="gitNav" target="_blank" rel="noopener noreferrer"><img src={githubIcon} id="gitIcon" alt="GitHub"></img></a>
            <a href="https://ca.linkedin.com/in/baris-bagcilar-361b42108" id="linkNav" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} id="linkIcon" alt="Linkedin"></img></a>
            <a href="https://www.instagram.com/barisbc22/" id="instaNav" target="_blank" rel="noopener noreferrer"><img src={instaIcon} id="instaIcon" alt="Instagram"></img></a>
          </div>
          <div id="footerTray" class="ui divider" ></div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default Footer;