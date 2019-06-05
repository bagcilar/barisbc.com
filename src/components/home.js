import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { navColourAdjuster } from './mainPage.js';


function greeter() {
    var greetMessage = "";
    var date = new Date();
    var hour = date.getHours();
    if (hour >= 12 && hour <= 17) {
        greetMessage = "Good Afternoon!"
    } else if (hour >= 17 && hour <= 24) {
        greetMessage = "Good Evening!"
    } else if (hour <= 12) {
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
                line_linked: {
                    opacity: 1
                }
            }
        }
    }

}

class home extends Component {

    //scrolls to the aboutme section
    scroll(location) {

        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });

        navColourAdjuster("aboutMeSection");

    }

    render() {
        return (

            <div>

                <Particles className='particles' params={particlesOptions} />
                <div className="WelcomeMessageDiv">
                    <p id="timeGreeting" align="center">{greeter()}</p>
                    <p id="welcomeMessage" align="center"> welcome to <span align="center" id="welcomeMessagePart2">barisbc.com</span></p>
                    <button id="startButton" onClick={() => { this.scroll("about") }}>
                        <i class="angle double down icon"></i>
                    </button>
                </div>

            </div>

        );
    }
}

export default home;