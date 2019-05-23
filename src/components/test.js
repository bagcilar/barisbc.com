import React, { Component } from 'react';
import './css/test.css';
import githubIcon from '../res/github.png'
import linkedinIcon from '../res/linkedin.png'
import instaIcon from '../res/instagram.png'
import { Popup, Card, Image, Rating, Segment, Reveal, Visibility} from 'semantic-ui-react'
import graderPicture from '../res/grader.png'

import {NavLink} from "react-router-dom"

var graderDescription = "Enter your marks for components of a course, receive continuous feedback, dynamically calculate your final grade!";

  
  class testapp extends Component {





  render() {
    return (


            <div className = "testApp">

                <div class="ui slow move reveal">
                    <div class="ui visible content">
                        <img src={graderPicture} className = "graderPicture"/>
                    </div>
                    <div class="ui hidden content">
                        <div className = "explanationPicture">{graderDescription}</div>
                    </div>
                </div>

            </div>
        

    );
  }
}

export default testapp;