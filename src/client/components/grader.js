import React, { Component } from 'react';
import { Form, Button, Divider, Modal, Icon, Progress, Checkbox } from 'semantic-ui-react'
import ankaraninbaglari from '../res/ankaraninbaglari.mp3'
import Sound from 'react-sound';
import './css/grader.css';

class grader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            components: [{ name: "", weight: "", mark: "" }],
            markingScheme: 'percentage',
            style: 'dark',
            showReport: false,
            showModal: false,
            music: false,
            easterEggFound: false
        };
    }


    //handles the addition of a component
    addClick() {
        this.setState(prevState => ({
            components: [...prevState.components, { name: "", weight: "", mark: "" }]
        }))
    }

    //handles the removal of a component
    removeClick(i) {
        let components = [...this.state.components];
        if (components.length !== 1) {
            components.splice(i, 1);
            this.setState({ components });
        }
    }

    //handles the changes in the state of components
    handleChange(i, e) {
        const { name, value } = e.target;
        let components = [...this.state.components];
        components[i] = { ...components[i], [name]: value };
        this.setState({ components });
    }

    //handles the dynamic UI creation that involves name, weight, mark fields and associated remove buttons
    createUI() {

        return this.state.components.map((el, i) => (
            <div class="ui form" key={i} >

                <div class="inline fields" className="UIComponents">

                    <div class="field" style={{backgroundColor: 'black'}}>
                        <input style={this.getStyleConfig("fields")} id="nameField" type="text" placeholder="name" name="name" value={el.name || ''} onChange={this.handleChange.bind(this, i)} />
                    </div>

                    <div className="WeightMarkInputs">

                        <div class="field">
                            <input style={this.getStyleConfig("fields")} id="weightField" className="weightField" type="number" placeholder="weight" name="weight" value={el.weight || ''} onChange={this.handleChange.bind(this, i)} />
                        </div>

                        <div class="field">
                            <input style={this.getStyleConfig("fields")} id="markField" type="number" placeholder={this.state.markingScheme} name="mark" value={el.mark || ''} onChange={this.handleChange.bind(this, i)} />
                        </div>

                    </div>

                    <button class="ui inverted red button" id="removeButton" onClick={this.removeClick.bind(this, i)}>remove</button>

                </div>
            </div>
        ))
    }

    //buttons that handle adding components and reseting grader
    addResetButtons() {
        return (
            <div className="AddResetButtons">
                <button className="AddButton" class="ui primary button" onClick={this.addClick.bind(this)}>add</button>
                <button className="ResetButton" class="ui grey button" onClick={this.reset.bind(this)}>reset</button>
            </div>
        )
    }

    //handles the output of feedback, final mark, and report
    output() {

        let reportArray = this.report();
        let showing = this.state.showReport;
        let reportButtonCaption;
        if (showing) {
            reportButtonCaption = "Hide Report"
        } else {
            reportButtonCaption = "Show Report"
        }

        return (


            <div id="outputFields" class="ui segment" style={this.getStyleConfig("fields")}>

                <div>
                    <p>Final Mark: {this.marker()}</p>
                </div>

                <div class="ui divider" id="homePageUpperDivider"></div>

                <div>
                    <p>Lost So Far: {this.lostFeedback()}</p>
                </div>

                <div>
                    <p>Accumulated: {this.accumulatedFeedback()}</p>
                </div>

                <div class="ui divider" id="homePageUpperDivider"></div>

                <button class={this.getStyleConfig("reportButton")} onClick={() => this.setState({ showReport: !showing })}>{reportButtonCaption}</button>
               
                {showing
                    ?
                    <div id="reportSection">
                        <p>95%: {reportArray[0]}</p>
                        <p>90%: {reportArray[1]}</p>
                        <p>85%: {reportArray[2]}</p>
                        <p>80%: {reportArray[3]}</p>
                        <p>75%: {reportArray[4]}</p>
                        <p>70%: {reportArray[5]}</p>
                        <p>65%: {reportArray[6]}</p>
                        <p>60%: {reportArray[7]}</p>
                        <p>55%: {reportArray[8]}</p>
                        <p>50%: {reportArray[9]}</p>
                    </div>
                    : null
                }

            </div>
        )
    }

    //contains the help modal, add/remove/reset, selectScheme, input fields
    input(){
        return(

            <div id="UI" class="ui segment" style={this.getStyleConfig("fields")}>

                <div className="UITop">
                    {this.modal()}
                    {this.selectScheme()}
                </div>

                <div className="UIMiddle">
                    {this.addResetButtons()}
                </div>

                <div className="UIBottom">
                    {this.createUI()}                   
                </div>

            </div>
        )
    }

    //obtains the selected performance option for calculation purposes
    changeScheme(e) {
        this.setState({ markingScheme: e.target.value });
    }

    //handles the toggling between 'percentage' and 'mark' performances
    selectScheme() {

        let perButtonStyle, markButtonStyle;

        if (this.state.markingScheme === "percentage") {
            perButtonStyle = "ui positive button active"
            markButtonStyle = "ui button"
        } else {
            markButtonStyle = "ui positive button active"
            perButtonStyle = "ui button"
        }

        return (
            <div id="schemeToggleDiv" class="ui buttons">
                <button id="percToggleButton" class={perButtonStyle} onClick={this.changeScheme.bind(this)} value="percentage">%</button>
                <button id="markToggleButton" class={markButtonStyle} onClick={this.changeScheme.bind(this)} value="mark">mark</button>
            </div>
        )
    }

    //resets the grader fields
    reset() {
        let components = [...this.state.components];
        if (components.length > 1) {
            components.splice(0, components.length - 1);
        }
        components[0].weight = "";
        components[0].name = "";
        components[0].mark = "";
        this.setState({ components });
    }

    //calculates final mark
    marker() {
        let components = [...this.state.components];
        let finalGrade = 0;

        for (let i = 0; i < components.length; i++) {

            if (this.state.markingScheme === 'percentage') {
                finalGrade += (components[i].weight / 100) * components[i].mark;
            } else {
                finalGrade += components[i].mark * 1;
            }
        }

        if (this.errorCheck() === "") {
            return Math.round(finalGrade * 100) / 100;
        } else {
            return null;
        }
    }

    //calculates lost marks
    lostFeedback() {
        let components = [...this.state.components];
        let lost = 0;
        for (let i = 0; i < components.length; i++) {
            if (components[i].weight !== "" && components[i].mark !== "") {

                if (this.state.markingScheme === 'percentage') {
                    lost += components[i].weight - (components[i].weight / 100) * components[i].mark;
                } else {
                    lost += components[i].weight - components[i].mark;
                }
            }
        }
        return Math.round(lost * 100) / 100;
    }

    //calculates accumulated marks
    accumulatedFeedback() {
        let components = [...this.state.components];
        let acc = 0;
        for (let i = 0; i < components.length; i++) {

            if (components[i].weight !== "" && components[i].mark !== "") {

                if (this.state.markingScheme === 'percentage') {
                    acc += components[i].weight / 100 * components[i].mark;
                } else {
                    acc += components[i].mark * 1;
                }
            }
        }
        return Math.round(acc * 100) / 100;
    }

    //provides report that shows the required performances for grade points
    report() {
        let components = [...this.state.components];
        let totalAccumulated = this.accumulatedFeedback();
        let totalEnteredWeight = 0;
        let totalUnmarkedWeight = 0;
        let unmarkedWeights = [];
        let report = ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]


        for (let i = 0; i < components.length; i++) {
            if (components[i].weight !== "" && components[i].mark === "") {
                unmarkedWeights.push(i);
            }
            totalEnteredWeight += components[i].weight * 1;
        }

        //calculate the report based on remaining weights
        if (totalEnteredWeight !== 100) {
            totalUnmarkedWeight = 100 - totalEnteredWeight;

            //calculate the report based on remaining unmarked weights
        } else if (unmarkedWeights.length > 0) {
            for (let i = 0; i < unmarkedWeights.length; i++) {
                totalUnmarkedWeight += components[unmarkedWeights[i]].weight * 1;
            }
        }

        if (totalEnteredWeight === 100 && this.errorCheck() !== "") {
            let index = 0;
            let cutoff;
            for (let i = 94.5; i > 49; i -= 5) {

                if (this.state.markingScheme === 'percentage') {
                    cutoff = (i - totalAccumulated) / (totalUnmarkedWeight / 100);
                } else {
                    cutoff = i - totalAccumulated;
                }
                report[index] = Math.round(cutoff * 100) / 100;
                index++;
            }
        }

        for (let i = 0; i < report.length; i++) {
            if (report[i] < 0) {
                report[i] = <Icon name='checkmark' />;
            }
        }

        return report;

    }

    //error is returned if weights do not total 100 or if all marks are not entered
    errorCheck() {
        let errorMessage = "";
        let components = this.state.components;
        let totalWeight = 0;

        for (let i = 0; i < components.length; i++) {
            totalWeight = totalWeight + parseFloat(components[i].weight);
        }
        if (totalWeight !== 100) {
            errorMessage = "totalWeight";
        }


        for (let i = 0; i < components.length; i++) {

            if (components[i].weight === "" || components[i].weight < 1 || components[i].weight > 100) {
                errorMessage = "weightError";
            } else if (components[i].mark === "" || components[i].mark < 0) {
                errorMessage = "markError";
            }
        }

        if (totalWeight > 100) {
            errorMessage = "exceededWeight";
        }

        return errorMessage;
    }

    //functions that handle the showing and hiding of help modal
    handleOpen = () => this.setState({ showModal: true })

    handleClose = () => this.setState({ showModal: false })

    //modal that shows instructions
    modal() {

        let button = <button id="modalTrigger" class={this.getStyleConfig("helpButton")} onClick={this.handleOpen}>help</button>

        return (
            <Modal
                trigger={button}
                open={this.state.showModal}
                onClose={this.handleClose}
                basic
                size='small'>
            
                <Modal.Content>
                    <p>● Enter weights as percentages /100. The weights in total should equal 100</p>
                    <p>● If you choose to add performances as marks, add mark/weight. e.g., if you've received 30/40 on a component, simply enter 30</p>
                    <p>● If you choose to add performances as percentages, add percentage/100. e.g., if you received 80% on an assignment, enter 80</p>
                    <p>● When a weight and mark is added for a given component, you will be presented with continuous feedback</p>
                    <p>● When all weights and marks are added, the final mark will appear automatically</p>
                    <p>● If you press 'show report', you  will be presented with the performance necessary to obtain the specified grade points</p>
                    <p>● This function is available only when all weights have been entered and there are unmarked components</p>
                    <p>● The necessary performance is displayed as the average performance needed for the unmarked components</p>
                </Modal.Content>

                <Modal.Actions>
                    <Button color='green' onClick={this.handleClose} inverted><Icon name='checkmark' />Got it</Button>
                </Modal.Actions>

            </Modal>

        )

    }

    //displays error when weights in total exceed 100
    weightErrorDisplay() {

    }

    //progress bar that shows the cumulated marks
    showProgress() {

        let progress = this.accumulatedFeedback().toString() + "%";

        return (

            <div id="bar" class="ui active indicating progress" data-percent={progress}>
                <div style={{ width: progress, maxWidth: "100%" }} class="bar">
                    <div class="progress">{progress}</div>
                </div>
            </div>

        )
    }

    //obtains the selected view mode and sets the state
    changeViewMode(e){
        this.setState({ style: e.target.value });
    }

    //handles the toggling between light and dark modes
    selectViewMode(){
 
        return (
            <div class="ui buttons">
                <button id="lightToggleButton" class={this.getStyleConfig("viewButtons")[0]} onClick={this.changeViewMode.bind(this)} value="light">light</button>
                <button id="darkToggleButton" class={this.getStyleConfig("viewButtons")[1]} onClick={this.changeViewMode.bind(this)} value="dark">dark</button>
            </div>
        )
    }

    //returns the style configuration based on state and based on the parameter
    getStyleConfig(specs){

        if (specs === "fields"){
            const darkStyle = {
                backgroundColor: 'rgb(24, 26, 27)',
                color: 'grey',
                borderColor: 'grey',
            }
    
            const lightStyle = {
                backgroundColor: 'white',
                color: 'black',
                boxShadow: '0 2px 2px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)'
            }
    
            if (this.state.style === "light"){
                return lightStyle;
            } else{
                return darkStyle;
            }

        } else if (specs === "viewButtons"){

            let darkButtonClass, lightButtonClass, orButtonStyle;
            if (this.state.style === "light") {
                lightButtonClass = "ui secondary button"
                darkButtonClass = "ui inverted secondary button"
            } else {
                darkButtonClass = "ui red button"
                lightButtonClass = "ui inverted secondary button"
            }

            return [lightButtonClass, darkButtonClass];

        } else if (specs === "helpButton") {
            let modalButtonClass = "ui inverted blue button";
            if (this.state.style === "light"){
                modalButtonClass = "ui blue button";
            }
            return modalButtonClass;
        } else if (specs === "reportButton") {
            let reportButtonClass = "ui inverted blue button";
            if (this.state.style === "light"){
                reportButtonClass = "ui blue button";
            }
            return reportButtonClass;
        }

    }

    music(){

        if (this.state.music === true){
            return(
                <div>
                    <audio src={ankaraninbaglari} loop autoPlay />
                </div>
            )
        }
    }

    togglePavyonMode(){

        let pavyonButtonStyle = {}
        let pavyonButtonClass = "";

        if (this.state.easterEggFound === false){
            if (this.state.style === 'dark'){
                pavyonButtonStyle = {
                    outline: '0',
                    color: 'rgb(24, 26, 27)',
                    background: 'transparent',
                    border: 'none'
                }
            } else{
                pavyonButtonStyle = {
                    outline: '0',
                    color: 'white',
                    background: 'transparent',
                    border: 'none'
                }
            }

        } else{
            pavyonButtonClass = "ui inverted purple button"
        }
        let playing = this.state.music;

        let pavyonModeCaption;
        if (playing){
            pavyonModeCaption = "uninitialize payvon mode"
        } else {
            pavyonModeCaption = "reinitialize payvon mode"
        }

        return (
            <div>
                <button style={pavyonButtonStyle} class={pavyonButtonClass} id="pavyonButton" onClick={() => this.setState({ music: !playing, easterEggFound: true})}>{pavyonModeCaption}</button>
            </div>
        )
    }

    // if (!this.state.easterEggFound){
    //     alert("HOŞ GELDİNİZ ELLER HAVAYA!")
    // }


    render() {

        return (

            <div className="GraderDiv" style={this.getStyleConfig("fields")}>

                <div className="InputOutputSections" >

                    <div className="InputSection">
                        {this.input()}
                    </div>

                    <div className="OutputSection">
                        {this.showProgress()}
                        {this.output()}
                    </div>

                </div>

                <div className="ViewToggleDiv">
                    {this.selectViewMode()}
                    {this.music()}
                    {this.togglePavyonMode()}
                </div>



            </div>
        );
    }

    

}

export default grader;