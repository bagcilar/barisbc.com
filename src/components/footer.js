import React, { Component } from 'react';
import './css/footer.css';
import githubIcon from '../res/github.png'
import linkedinIcon from '../res/linkedin.png'
import instaIcon from '../res/instagram.png'

class Footer extends Component {
  render() {
    return (


          <div className="FooterDiv">
            <div className="FooterInnerDiv">
              <a href="https://github.com/bagcilar" id="gitNav" target="_blank" rel="noopener noreferrer"><img src={githubIcon} id="gitIcon" ></img></a>
              <a href="https://www.instagram.com/barisbc22/" id="instaNav" target="_blank" rel="noopener noreferrer"><img src={instaIcon} id="instaIcon"></img></a>
              <a href="https://ca.linkedin.com/in/baris-bagcilar-361b42108" id="linkNav" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} id="linkIcon"></img></a>
            </div>
            <div id="footerTray" class="ui divider" ></div>
          </div>

    );
  }
}

export default Footer;
