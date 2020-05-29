import React, { Component } from 'react';
import { NavigationBar } from './NavigationBar.js';
import { ChangeViewButton } from './ChangeViewButton.js';

import {Footer} from './Footer.js';
import {Schedule} from './Schedule.js';

import{Calander} from './Calander.js';
export class CalanderView extends Component {
    render() {
        return (
            <body>
                <NavigationBar />
                <ChangeViewButton view='Memo View' path='MemoView' />
                <Calander />
                <Footer />
            </body>
        );
    }
}
export class MemoView extends Component {
    render() {
        return (
            <body>
                <NavigationBar />
                <ChangeViewButton view='Calander View' path='CalanderView' />
                <Schedule />

                <Footer />
            </body>
        );
    }
}