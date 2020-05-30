import React, { Component } from 'react'; //import React Component
import { NavigationBar } from './NavigationBar.js';
import { Footer } from './Footer.js';

export class Splash extends Component {
    render() {
        return (
            
            <body>
                <NavigationBar />
                
                <main className="splash">
                    <h1>PLAN AND SCHEDULE</h1>
                    <h2>easy online planner for all college students</h2>
                </main>
                <Footer />
                
            </body>

        );
    }
}
