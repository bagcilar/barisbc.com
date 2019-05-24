import React, { Component} from 'react';
import {Form, Button, Divider, Modal, Icon} from 'semantic-ui-react'
import axios from 'axios'

import './css/contact.css';



class ContactMe extends Component {
    constructor (){
        super()

        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }





    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST", 
            url:"http://localhost:3002/send", 
            data: {
                name: name,   
                email: email,  
                messsage: message
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

    resetForm(){
        document.getElementById('contact-form').reset();
    }

  render() {
    return (


        <div className = "contactSegment">

            <form class="ui form" id="contactForm" onSubmit={this.handleSubmit.bind(this)} method="POST">

                <div class="field">
                    <label id="nameLabel">Name</label>
                    <input placeholder="name" type="text" id="name"></input>
                </div>

                <div class="field">
                    <label id="emailLabel">E-mail</label>
                    <input placeholder="email" type="text" id="email"></input>
                </div>
                
                <div class="field">
                    <textarea rows="4" placeholder="enter your message..." id="message"></textarea>
                </div>

                <button>Submit</button>

            </form>
        </div>



);
  }
}

export default ContactMe;