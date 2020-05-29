import React, { Component } from 'react';
export class ChangeViewButton extends Component {
    render() {
        return (
            <div class="button-container">
                <div class="searchBox" role="search">
                    <input type="text" placeholder="Search..."></input>
                </div>
                <a class="btn btn-secondary btn-sm" href={'/' + this.props.path} role="button">{this.props.view}</a>
            </div>
        );
    }
}
