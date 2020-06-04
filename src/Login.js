import React, { Component } from 'react'; //import React Component
import { NavMenus } from './NavigationBar.js';

export class Login extends Component {
    render() {
        return (
            <header>
                <nav className="menu">
                    <h1>Simple Online Planner</h1>
                    <NavMenus />
                    <button className="btn btn-warning float-right" onClick={this.props.handleSignOut}>
                        Sign Out
              </button>
                </nav>

            </header>


        );
    }
}
