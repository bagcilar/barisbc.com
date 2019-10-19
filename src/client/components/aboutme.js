import React, { Component } from 'react';
import './css/aboutme.css';
import profilePicture from '../res/profilePic.png'


class AboutMe extends Component {

  scroll() {

    window.scroll({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });

  }

  render() {

    return (

      <div className="aboutMeDiv">

        <div>
          <p id="aboutHeader">about me</p>
          <div class="ui divider" ></div>
        </div>

        <img className="profilePicture" src={profilePicture} alt="Profile"/>

        <div className="aboutMeTextDiv">
          <div className="aboutMePart1">
            <p align="center">Hi!</p>
            <p align="center">My name is Baris, I'm an undergraduate CS student at York University in Toronto, ON</p>
          </div>
          <div className="aboutMePart2">
            <p align="center">I am currently looking for a co-op position for Winter 2020. On this website, you can see some minor projects I'm working on</p>
            <p align="center">Go <span> <button id="contactTextButton" onClick={() => { this.scroll() }} >here</button> </span> if you'd like to contact me!</p>
          </div>
          <div class="ui divider" ></div>

        </div>

      </div>

    );
  }
}

export default AboutMe;