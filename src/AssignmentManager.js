import React, { Component } from 'react'; //import React Component
import {NavigationBar} from './NavigationBar.js';
import {InteractionFeatures} from './InteractionFeatures.js';
import {Footer} from './Footer.js';
import {Schedule} from './Schedule.js'
export class AssignmentManager extends Component {
    render() {
        return (
            <body>
                <NavigationBar handleSignOut={this.props.handleSignOut}/>
                <h1 className="lecture-font">Assignment Manager</h1>
                <InteractionFeatures task='Assignments'/>
                <Schedule task='Assignments'/>
                <Footer />
            </body>
        );
    }

}