import React, { Component } from 'react';
import firebase from 'firebase/app';
import { BrowserRouter, Route } from 'react-router-dom';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Splash } from './Splash.js';
import App from './App';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {user: null}
    }
    uiConfig = {
        signInOptions: [
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.GoogleAuthProvider.PROVIDER_ID
          
        ],
        signInFlow: 'popup',
      };
    componentDidMount() {
        this.authUnSubFunction = firebase.auth().onAuthStateChanged((firebaseUser) => {
          if(firebaseUser) {
            this.setState({user: firebaseUser})
          } else {
            this.setState({user: null})
          }
        })
      }

    componentWillUnmount() {
        this.authUnSubFunction();
    }

    handleSignOut = () => {
        firebase.auth().signOut()
      }
    render() {
        let content = null;
        
        if (!this.state.user) { //signed out
            content = (
                <div>
                    <BrowserRouter>
                        <Route path='/' component={Splash} />
                    </BrowserRouter>
                    <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />

                </div>

            )
        }
        else { //signed in
            content = (
                <div>
                    <App user = {this.state.user} fbuserkey={(this.state.user.email).replace(/[^a-zA-Z0-9]/g, "")}/>
                </div>
            )
        }
        return (
            <div>
                {this.state.errorMessage &&
                    <p className="alert alert-danger">{this.state.errorMessage}</p>
                }
                {content}

            </div>
        );
    }
}