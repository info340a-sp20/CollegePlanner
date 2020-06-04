import React, { Component } from 'react';
import { NavigationBar } from './NavigationBar.js';
import { ChangeViewButton } from './ChangeViewButton.js';

import {Footer} from './Footer.js';
import {AllSchedule} from './AllSchedule.js';

import{Calander} from './Calander.js';
export class CalanderView extends Component {
    render() {
        return (
            <span>
                <NavigationBar handleSignOut={this.props.handleSignOut}/>
                <h3>Hello,  {this.props.userName}</h3>
                <h4>Plan your work and work your plan.</h4>
                <ChangeViewButton view='Memo View' path='MemoView' />

                <Calander state={this.props.state} searchCallback={this.props.searchCallback}/>
                <Footer />
            </span>
        );
    }
}
export class MemoView extends Component {
    render() {
        console.log(this.props.state);
        return (
            <span>
                <NavigationBar handleSignOut={this.props.handleSignOut}/>
                <h3>Hello, {this.props.userName} </h3>
                <h4>Plan your work and work your plan.</h4>

                <ChangeViewButton view='Calander View' path='CalanderView' state={this.props.state} searchCallback={this.props.searchCallback}/>
                <AllSchedule state={this.props.state} searchCallback={this.props.searchCallback}  />

                <Footer />
            </span>
        );
    }
} 