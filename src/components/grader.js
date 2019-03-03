import React, { Component } from 'react';
import {Buttons} from 'semantic-ui-react'

class grader extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          components: [{ name: "", weight: "", mark: "" }]
      };
    }
    
    addClick(){
      this.setState(prevState => ({ 
        components: [...prevState.components, { name: "", weight: "", mark: "" }]
      }))
    }
    
    createUI(){
        return this.state.components.map((el, i) => (
            <div>
                <div key={i}>
                    <input type= "text" placeholder="name" name="name" value={el.name ||''} onChange={this.handleChange.bind(this, i)} />
                    <input type= "number" placeholder="weight" name="weight" value={el.weight ||''} onChange={this.handleChange.bind(this, i)} />
                    <input type = "number" placeholder="mark" name="mark" value={el.mark ||''} onChange={this.handleChange.bind(this, i)} />
                    <input type='button' value='remove' onClick={this.removeClick.bind(this, i)}/>
                </div>
            </div>         
       ))
    }

    output(){
        return(
            <div className = "output">
                {this.marker()}
            </div>  
        )
    }
    
    handleChange(i, e) {
         const { name, value } = e.target;
       let components = [...this.state.components];
       components[i] = {...components[i], [name]: value};
       this.setState({ components });
    }
    
    removeClick(i){
       let components = [...this.state.components];
       if (components.length != 1){
        components.splice(i, 1);
        this.setState({ components });
       }
       
    }
    

    //calculates final mark
    marker(){
        let components = [...this.state.components];
        var finalGrade = 0;
        for (let i = 0; i < components.length; i++){
            finalGrade += (components[i].weight / 100) * components[i].mark
        }
        
        if (this.errorCheck() == ""){
            return finalGrade;
        }else{
            return null;
        }
    }

    errorCheck(){
        var errorMessage = "";
        var components = this.state.components;
        for (let i = 0; i < components.length; i++){
            if (components[i]. weight == "" || components[i].weight < 0){
                errorMessage = "weightError";
            }else if (components[i]. mark == "" || components[i].mark < 0 || components[i].mark > 100 ){
                errorMessage = "markError";
            }
        }

        var totalWeight = 0;
        for (let i = 0; i < components.length; i++){
            totalWeight = totalWeight + parseFloat(components[i].weight);
        }
        if (totalWeight != 100){
            errorMessage = "totalWeight";
        }

        return errorMessage;
    }

    
    
    render() {
      return (
        <div>
            <button class="ui inverted black button" onClick={this.addClick.bind(this)}>add</button>
            {this.createUI()}
            {this.output()}
        </div>
      );
    }
  }
  
export default grader;