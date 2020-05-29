import React, { Component } from 'react'; //import React Component
import {NavigationBar} from './NavigationBar.js';
import {InteractionFeatures} from './InteractionFeatures.js';
import {Footer} from './Footer.js';
import {Schedule} from './Schedule.js'
export class LectureManager extends Component {
    render() {
        return (
            <body>
                <NavigationBar />
                <h1 className="lecture-font">Lecture Manager</h1>
                <InteractionFeatures task='Lectures and sections'/>
                <Schedule task='Lectures'/>
                <Footer />
            </body>
        );
    }

}
