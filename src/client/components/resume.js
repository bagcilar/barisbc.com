import React, { Component } from 'react';
import './css/projects.css';
import resumeFile from '../res/resume.pdf'

class Resume extends Component {

  render() {

    return (

      <iframe src={resumeFile}
        title="Resume" width="100%" height="1300" frameborder="0" allowfullscreen sandbox>
      </iframe>
    );
  }
}

export default Resume;