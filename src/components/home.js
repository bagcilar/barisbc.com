import React, { Component } from 'react';
import './css/home.css';


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


class home extends Component {
  render() {
    return (


      <div className = "HomePage">

        <div className="HomeUpperSection">
          <div className="WelcomeMessageDiv">
            <p id="timeGreeting" align="center">{greeter()}</p>
            <p id="welcomeMessage" align="center">welcome to barisbc.com</p>
            <div class="ui divider" id="homePageUpperDivider"></div>
          </div>
        </div>

        <div className="HomeLowerSection">
          <div className="GreetingMessageDiv">
            <p id="firstLine" align="center">on this website, I host some projects created for learning purposes</p>
            <p id="thirdLine" align="center">stay tuned for more to come...</p>    
          </div>
        </div>

      </div>


);
  }
}

export default home;