import React, { Component} from 'react';
import {Form, Button, Divider, Modal, Icon} from 'semantic-ui-react'
import axios from 'axios'

import './css/contact.css';



class ContactMe extends Component {


    handleSubmit(){
        alert("thank you for your email!");
        this.resetForm();
    }

    resetForm(){
        document.getElementById("contactForm").reset();
    }

  render() {
    return (


        <div className = "contactSegment">

            <form class="ui form" id="contactForm"> 

                <div class="field">
                    <label id="nameLabel">Name</label>
                    <input placeholder="name" type="text" id="name"></input>
                </div>

                <div class="field">
                    <label id="emailLabel">E-mail</label>
                    <input placeholder="email" type="text" id="email"></input>
                </div>
                
                <div class="field">
                    <textarea minRows="1" placeholder="enter your message..." id="message"></textarea>
                </div>

                <button class="ui inverted red button" type="submit" onClick={this.handleSubmit.bind(this)}>submit</button>

            </form>
            
        </div>



);
  }
}

export default ContactMe;