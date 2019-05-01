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

          <div className="WelcomeMessage">
            <p align="center">{greeter()}</p>
            <p align="center">welcome to barisbc.com!</p>
          </div>

          <div className="GreetingMessage">
            <p id="firstLine" align="center">on this website, I host some projects that I am working on</p>
            <p id="secondLine" align="center">these projects are mostly for learning purposes and are not meant to reinvent the wheel</p>
            <p id="thirdLine" align="center">stay tuned for more to come...</p>    
          </div>

        </div>



);
  }
}

export default home;