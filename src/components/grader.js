import React, { Component } from 'react';
import { Form, Button, Divider, Modal, Icon, Progress, Checkbox } from 'semantic-ui-react'
import './css/grader.css';

class grader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            components: [{ name: "", weight: "", mark: "" }],
            markingScheme: 'percentage',
            showReport: false,
            showModal: false
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
            <div class="ui form" key={i}>

                <div class="inline fields" className="UIComponents">

                    <div class="field">
                        <input id="nameField" type="text" placeholder="name" name="name" value={el.name || ''} onChange={this.handleChange.bind(this, i)} />
                    </div>

                    <div className="WeightMarkInputs">

                        <div class="field">
                            <input id="weightField" className="weightField" type="number" placeholder="weight" name="weight" value={el.weight || ''} onChange={this.handleChange.bind(this, i)} />
                        </div>

                        <div class="field">
                            <input id="markField" type="number" placeholder={this.state.markingScheme} name="mark" value={el.mark || ''} onChange={this.handleChange.bind(this, i)} />
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

        var reportArray = this.report();
        var showing = this.state.showReport;
        var buttonCaption;
        if (showing) {
            buttonCaption = "Hide Report"
        } else {
            buttonCaption = "Show Report"
        }

        return (

            <div id="outputFields" class="ui segment">

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

                <button id="showReportButton" onClick={() => this.setState({ showReport: !showing })}>{buttonCaption}</button>

                {showing
                    ?
                    <div id="reportSection">
                        <p>95%: {reportArray[0]}</p>
                        <p>90%: {reportArray[1]}</p>
                        <p>85%: {reportArray[2]}</p>
                        <p>90%: {reportArray[3]}</p>
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

    //obtains the selected performance option for calculation purposes
    changeScheme(e) {
        this.setState({ markingScheme: e.target.value });
    }

    //handles the toggling between 'percentage' and 'mark' performances
    selectScheme() {

        var perButtonStyle, markButtonStyle;

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
                <div class="or"></div>
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
        var finalGrade = 0;

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
        var lost = 0;
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
        var acc = 0;
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
        var totalAccumulated = this.accumulatedFeedback();
        var totalEnteredWeight = 0;
        var totalUnmarkedWeight = 0;
        var unmarkedWeights = [];
        var report = ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]


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
            var index = 0;
            var cutoff;
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
        var errorMessage = "";
        var components = this.state.components;
        var totalWeight = 0;

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

        var button = <button id="modalTrigger" class="ui inverted blue button" onClick={this.handleOpen}>help</button>

        return (
            <Modal
                trigger={button}
                open={this.state.showModal}
                onClose={this.handleClose}
                basic
                size='small'
            >
                <Modal.Content>
                    <p>● Enter weights as percentages /100. The weights in total should equal 100</p>
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

        var progress = this.accumulatedFeedback().toString() + "%";

        return (

            <div id="bar" class="ui active indicating progress" data-percent={progress}>
                <div style={{ width: progress, maxWidth: "100%" }} class="bar">
                    <div class="progress">{progress}</div>
                </div>
            </div>

        )
    }


    render() {

        return (

            <div className="graderDiv">

                <div className="container">


                    <div id="UI" class="ui segment">

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

                </div>

                <div className="OutputSection">
                    {this.showProgress()}
                    {this.output()}
                </div>


            </div>
        );
    }
}

export default grader;
