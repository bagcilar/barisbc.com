import React, { Component } from 'react';
import Button from 'semantic-ui-react'

import axios from 'axios';
import './css/domainFinder.css';

class DomainFinder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      availability: null,
      domainName: '',
      registrar: '',
      rCountry: '',
      cDate: '',
      eDate: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const domainName = document.getElementById('domainName').value;

    if (!this.errorCheck(domainName)) {
      axios({
          method: "POST",
          url: "http://localhost:3001/domainFinder",
          data: {
            domain: domainName
          }
      }).then((response) => {
          let availability = response.data.availability;
          if (availability == "no") {
            let dName = response.data.dName;
            let registrar = response.data.registrar;
            let rCountry = response.data.registrantCountry;
            let cDate = response.data.creationDate;
            let eDate = response.data.expirationDate;
            this.setState({ domainName: dName});
            this.setState({ availability: false});
            this.setState({ registrar: registrar});
            this.setState({ rCountry: rCountry});
            this.setState({ cDate: cDate});
            this.setState({ eDate: eDate});
          } else {
            this.setState({ availability: true});
          }
      })
    }
  }
  
  //error checking for form fields
  errorCheck(domainInput) {
      if (domainInput === "") {         
        alert("Please enter a domain name");
        return true;
      } else {
          return false;
      }
  }

  output(){

    let availability = this.state.availability;
    let dName = this.state.domainName;
    let registrar = this.state.registrar;
    let rCountry = this.state.rCountry;
    let cDate = this.state.cDate;
    let eDate = this.state.eDate;

    if (!availability) {
      return(
        <div>
          <p>{availability}</p>
          <p>{dName}</p>
          <p>{registrar}</p>
          <p>{rCountry}</p>
          <p>{cDate}</p>
          <p>{eDate}</p>
        </div>
      )
    } else {
      return(
        <div>
          <p>This domain is available!</p>
        </div>
      )
    }
  }

  componentDidMount(){
    document.getElementById("domainName").focus(); 
  }

  render() {

    return (

        <div className="domainFinderDiv">

          <div className="inputDiv">

            <form class="ui form">

              <div class="field" className="inputField">
                <input type="text" id="domainName" placeholder="enter a domain name..."></input>
              </div>

              <button id="searchButton" class="ui inverted primary button" type="submit" onClick={this.handleSubmit.bind(this)}>search</button>
            
            </form>

          </div>

          <div className="outputDiv">
            {this.output()}
          </div>

        </div>
    );

  }
  
}

export default DomainFinder;