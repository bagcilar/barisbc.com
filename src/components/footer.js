import React, { Component } from 'react';
import './css/footer.css';


class Footer extends Component {
  render() {
    return (


          <div className="FooterDiv">
            <div className="FooterInnerDiv">
              <a href="https://github.com/bagcilar" className="GitNav" target="_blank">GitHub</a>
              <a href="https://ca.linkedin.com/in/baris-bagcilar-361b42108" className="LinkNav" target="_blank">Linkedin</a>
            </div>
          </div>

    );
  }
}

export default Footer;
