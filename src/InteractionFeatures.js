import React, { Component } from 'react';
import { AddButton, DeleteButton } from './Buttons.js';

export class InteractionFeatures extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            newDescription: '',
            day: '',
            taskKind: ''
         }; //what is typed in
      } 
      handleChange = (event) => {
        let value = event.target.value;
        this.setState({ newDescription: value })
      }
      handleSelect = (event) => {
        let value = event.target.value;
        this.setState({ day: value })
      }
      handleClick = (event) => {
        event.preventDefault();
        this.props.addTaskCallback(this.state.newDescription, this.state.day, 'Lectures');
      }
    render() {
        return (
            <section className="lecture-manager">
                <div className="form">
                    <AddTasks  task={this.props.task} addTaskCallback={this.props.addTaskCallback} 
                    handleChange={this.handleChange} state={this.state}
                    handleSelect={this.handleSelect} handleClick={this.handleClick}/>
                    
                    <DeleteButton task={this.props.task}/>
                    <SearchBar />
                </div>
            </section>
        );
    }
}

export class AddTasks extends Component {
    
    render() {
        let placeholder = 'Add ' + this.props.task;
        return (
            <div className="input-group mb-3">
                <SelectDays handleSelect={this.props.handleSelect}/>
                <input type="text" className="form-control" aria-label="Text input with dropdown button"
                    placeholder={placeholder}
                    onChange={this.props.handleChange}>

                </input>
                <AddButton task={this.props.task} addTask={this.props.addTask} state={this.props.state} handleClick={this.props.handleClick}/>
            </div>
        );
    }
}

export class SelectDays extends Component {
    
    render() {

        return (
            <select className="selectpicker" placeholder="Select the day" onChange={this.props.handleSelect}>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
                <option>Sunday</option>
            </select>
        );
    }
}

export class SearchBar extends Component {
    render() {
        return (
            <span>
                <input id="searchbar" type="text"  name="search" placeholder="Search..."></input>
            </span>
        );
    }
}