import React, { Component } from 'react';
import {Form, Button, Divider} from 'semantic-ui-react'
import './css/grader.css';

class grader extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          components: [{ name: "", weight: "", mark: "" }],
          markingScheme: 'percentage'
      };
    }
    
    addClick(){
      this.setState(prevState => ({ 
        components: [...prevState.components, { name: "", weight: "", mark: "" }]
      }))
    }

    removeClick(i){
        let components = [...this.state.components];
        if (components.length != 1){
         components.splice(i, 1);
         this.setState({ components });
        }
    }

    handleChange(i, e){
        const { name, value } = e.target;
        let components = [...this.state.components];
        components[i] = {...components[i], [name]: value};
        this.setState({ components });
   }

    setScheme (e){
        this.setState({ markingScheme: e.target.value});
    }
    
    createUI(){
        return this.state.components.map((el, i) => (
            <div class="ui form" key={i}>
                
                <div class="inline fields" className="UIComponents">
                    
                    <div class="field">
                        <input id="nameField" type= "text" placeholder="name" name="name" value={el.name ||''} onChange={this.handleChange.bind(this, i)} />
                    </div>
                    
                    <div className="WeightMarkInputs">
                        <div class="field">
                            <input id="weightField" className = "weightField" type= "number" placeholder="weight" name="weight" value={el.weight ||''} onChange={this.handleChange.bind(this, i)} />
                        </div>
                        <div class="field">
                            <input id="markField" type = "number" placeholder="mark" name="mark" value={el.mark ||''} onChange={this.handleChange.bind(this, i)} />
                        </div>
                    </div>

                    <button class="ui inverted red button" id="removeButton" onClick={this.removeClick.bind(this, i)}>remove</button>
               
                </div>
            </div>         
       ))
    }

    output(){
        return(

            <div className = "Output">
                <div>
                    <p>Final Mark: {this.marker()}</p>
                </div>
                <div>
                    <p>Lost So Far: {this.lostFeedback()}</p>
                </div>
            </div>  
        )
    }

    selectScheme(){
        return (

            <div className="schemeSelectors" onChange={this.setScheme.bind(this)}>
              <input type="radio" name="schemeRadioButton" value="percentage" checked={this.state.markingScheme == 'percentage'}/>Percentage
              <input type="radio" name="schemeRadioButton" value="mark" checked={this.state.markingScheme == 'mark'}/>Mark
            </div>
           )
    }

    reset(){
        let components = [...this.state.components];
        if (components.length > 1){
          components.splice(0, components.length - 1);
        }
        components[0].weight = "";
        components[0].name = "";
        components[0].mark = "";
        this.setState({ components });     
      }
    

    //calculates final mark
    marker(){
        let components = [...this.state.components];
        var finalGrade = 0;

        for (let i = 0; i < components.length; i++){

            if (this.state.markingScheme == 'percentage'){
                finalGrade += (components[i].weight / 100) * components[i].mark;
            }else{
                finalGrade += components[i].mark * 1;
            }
        }
        
        if (this.errorCheck() == ""){
            return Math.round(finalGrade * 100) / 100;
        }else{
            return null;
        }
    }

    //calculates lost marks
    lostFeedback(){
        let components = [...this.state.components];
        var lost = 0;
        for (let i = 0; i < components.length; i++){
            if (components[i].weight != "" && components[i].mark != ""){

                if (this.state.markingScheme == 'percentage'){
                    lost += components[i].weight - (components[i].weight / 100) * components[i].mark;
                }else{
                    lost += components[i].weight - components[i].mark;
                }
            }
        }
        return lost;
    }

    errorCheck(){
        var errorMessage = "";
        var components = this.state.components;
        var totalWeight = 0;

        for (let i = 0; i < components.length; i++){
          totalWeight = totalWeight + parseFloat(components[i].weight);
        }
        if (totalWeight != 100){
          errorMessage = "totalWeight";
        }
       
        for (let i = 0; i < components.length; i++){
 
            if (components[i]. weight == "" || components[i].weight < 1 || components[i].weight > 100){
                errorMessage = "weightError";
            }else if (components[i]. mark == "" || components[i].mark < 0){
                errorMessage = "markError";
            }
        }

        return errorMessage;
    }
    

    render() {

      return (

        <div className="graderDiv">

            <div class="ui segment">
            

                {this.output()}

                {this.selectScheme()}

                <div className = "AddResetButtons">
                    <button className="AddButton" class="ui primary button" onClick={this.addClick.bind(this)}>add</button>
                    <button className="ResetButton" class="ui grey button" onClick={this.reset.bind(this)}>reset</button>
                </div>

                {this.createUI()}


            </div>

        </div>
      );
    }
}
  
export default grader;
