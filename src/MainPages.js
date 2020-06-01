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
                <NavigationBar />
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
                <NavigationBar />
                <ChangeViewButton view='Calander View' path='CalanderView' state={this.props.state} searchCallback={this.props.searchCallback}/>
                <AllSchedule state={this.props.state} searchCallback={this.props.searchCallback}  />

                <Footer />
            </span>
        );
    }
} 