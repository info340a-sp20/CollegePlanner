import React, { Component } from 'react'; //import React Component
import { Footer } from './Footer.js';

export class Splash extends Component {
    render() {
        return (

            <div className='splash-body'>
                <header>
                    <nav className="menu">
                        <h1>Simple Online Planner</h1>


                    </nav>

                </header>

                <main className="splash">
                    <h1>PLAN AND SCHEDULE</h1>
                    <h2>easy online planner for all college students</h2>
                </main>
                <Footer />

            </div>

        );
    }
}
