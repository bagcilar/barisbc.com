import React, { Component } from 'react';
import Button from 'semantic-ui-react'
import axios from 'axios';
import isValidDomain from 'is-valid-domain';
import './css/domainFinder.css';
import creds from '../../server/config/config';


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
          url: creds.DOMAIN_FINDER_URL,
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
      if (!domainInput) {         
        alert("Please enter a domain");
        return true;
      } else if (!isValidDomain(domainInput)){
        alert("Please enter a valid domain");
        return true;
      } else {
        return false;
      }
  }

  output(){

    let availability = this.state.availability;

    if (availability === false) {

      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      let dName = this.state.domainName;
      let registrar = this.state.registrar;
      let rCountry = this.state.rCountry;
  
      let cDateRaw = this.state.cDate;  
      let cYear = cDateRaw.substring(15, 19);
      let cMonthNumber = parseInt(cDateRaw.substring(20, 22));
      let cDay = cDateRaw.substring(23, 25);
      let cMonth = months[cMonthNumber - 1];
      let cDate = "Creation date: " + cDay + " " + cMonth + ", " + cYear;
  
      let eDate;
      let eDateRaw = this.state.eDate;
  
      if (eDateRaw != null) {
        eDateRaw = this.state.eDate.substring(23, this.state.eDate.length);
        let eYear = eDateRaw.substring(17, 21);
        let eMonthNumber = parseInt(eDateRaw.substring(22, 24));
        let eDay = eDateRaw.substring(25, 27);
        let eMonth = months[eMonthNumber - 1];
        eDate = "Expiration date: " + eDay + " " + eMonth + ", " + eYear;
      }

      return(
        <div className="outputTextDiv">
          <p>{availability}</p>
          <p>{dName}</p>
          <p>{registrar}</p>
          <p>{rCountry}</p>
          <p>{cDate}</p>
          <p>{eDate}</p>
        </div>
      )

    } else if (availability === true){

      return(
        <div className="outputTextDiv">
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