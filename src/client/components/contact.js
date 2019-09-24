import React, { Component } from 'react';
import { Form, Button, Divider, Modal, Icon } from 'semantic-ui-react'
import axios from 'axios';

import './css/contact.css';

class ContactMe extends Component {

    handleSubmit(e){
        //e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        

        if (!this.errorCheck(name, email, message)){
            axios({
                method: "POST", 
                url:"http://localhost:3001/send", 
                data: {
                    name: name,
                    email: email,
                    message: message
                }
            }).then((response)=>{
                if (response.data.msg === 'success'){
                    alert("Message Sent."); 
                    this.resetForm()
                }else if(response.data.msg === 'fail'){
                    alert("Message failed to send.")
                }
            })
        }
    }

    //error checking for form fields
    errorCheck(name, email, message){

        if (name == "" || email == "" || message == ""){

            if (name == ""){
                alert("Please enter your name");
            }else if (email == ""){
                alert("Please enter your email");
            }else{
                alert("Please enter a message");
            }
            return true;
        }else{
            return false;
        }
    }

    resetForm() {
        document.getElementById("contactForm").reset();
    }

    render() {

        return (

            <div className="contactSegment">

                <div>
                    <p id="contactHeader">contact</p>
                    <div class="ui divider" id="contactTray"></div>
                </div>

                <form class="ui form" id="contactForm">

                    <div class="field">
                        <label id="nameLabel">Name</label>
                        <input placeholder="name" type="text" id="name"></input>
                    </div>

                    <div class="field">
                        <label id="emailLabel">E-mail</label>
                        <input placeholder="email" type="email" id="email"></input>
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