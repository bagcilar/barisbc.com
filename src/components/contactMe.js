import React, { Component} from 'react';
import {Form, Button, Divider, Modal, Icon} from 'semantic-ui-react'
import './css/contact.css';

class ContactMe extends Component {
  render() {
    return (


        <div id="contactSegment" class="ui form">

            <div class="field">
                <label>Name</label>
                <input placeholder="name" type="text"></input>
            </div>

            <div class="field">
                <label>E-mail</label>
                <input placeholder="email" type="text"></input>
            </div>
            
            <div class="field">
                <textarea rows="4" placeholder="enter your message..."></textarea>
            </div>

        </div>




);
  }
}

export default ContactMe;