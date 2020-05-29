import React, { Component } from 'react';



export class AddButton extends Component {
    
    
    render() {
        return (
            <button type="button" id="add-lecture" className="btn btn-primary" onClick={this.props.handleClick}>Add {this.props.task}</button>
        );
    }
}

export class DeleteButton extends Component {
    render() {
        return (
            <button type="button" id="delete-lecture" className="btn btn-secondary">Delete All {this.props.task}</button>
        );
    }
}