import React, { Component } from 'react';

export function greeter(){
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
  
  export const particlesOptions = {
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

class homeFunctions extends Component {
  render() {
    return (

      <div>
      </div>

);
  }
}

export default homeFunctions;