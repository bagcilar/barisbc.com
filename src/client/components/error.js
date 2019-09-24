import React, { Component } from 'react';
import './css/error.css';
import errorPicture from '../res/error.png'

class error extends Component {
  render() {
    return (

      <div className="errorSection">

        <img className="errorPicture" src={errorPicture} />

        <div className="errorMessage">
          <p>oops! page not found...</p>
        </div>

      </div>

    );
  }
}

export default error;