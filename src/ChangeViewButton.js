import React, { Component } from 'react';
import {NavLink } from 'react-router-dom';

export class ChangeViewButton extends Component {
    render() {
        return (
            <span className="button-container">
                
                <div className="searchBox" role="search">
                    <input type="text" placeholder="Search..." onChange={this.props.searchCallback}></input>
                </div>
                <NavLink className="btn btn-secondary btn-sm" to={'/' + this.props.path} role="button" >{this.props.view}</NavLink>
            </span>
        );
    }
}
