import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import './css/projects.css';
import graderPicture from '../res/grader.png'
import domainFinderPicture from '../res/domainFinder.png'
import sleepClockPicture from '../res/sleepClock.png'

var graderDescription = "Enter your marks for components of a course, receive continuous feedback, dynamically calculate your final grade";

class Projects extends Component {


    render() {

        return (

            <div className="ProjectsDiv">

                <div>
                    <p id="projectsHeader">projects</p>
                    <div class="ui divider" ></div>
                </div>


                <div className="projectList">

                    <NavLink to="/grader" id="graderNav">
                        <div className="navSection">
                            <img src={graderPicture} className="graderImage" />
                            <div className="textSection">
                                <h1>Grader</h1>
                                <div class="ui divider" ></div>
                                {graderDescription}
                            </div>
                        </div>
                    </NavLink>


                    <NavLink to="" id="domainFinderNav">
                        <div className="navSection">
                            <img src={domainFinderPicture} className="domainFinderImage" />
                            <div className="textSection">
                                <h1>Domain Finder</h1>
                                <div class="ui divider" ></div>
                                <p>This app is currently under construction</p>
                                <p>Please try again later...</p>
                            </div>
                        </div>
                    </NavLink>


                    <NavLink to="" id="sleepClockNav">
                        <div className="navSection">
                            <img src={sleepClockPicture} className="sleepClockImage" />
                            <div className="textSection">
                                <h1>Sleep Clock</h1>
                                <div class="ui divider" ></div>
                                <p>This app is currently under construction</p>
                                <p>Please try again later...</p>
                            </div>
                        </div>
                    </NavLink>


                </div>

            </div>
        );
    }
}

export default Projects;