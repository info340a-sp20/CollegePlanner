import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Login } from './Login.js';

import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
var firebaseConfig = {
  apiKey: "AIzaSyCRxyHz8WSGhtZt2rqz3FqkeP2Z6l4KS6A",
  authDomain: "sunnys-project-240021.firebaseapp.com",
  databaseURL: "https://sunnys-project-240021.firebaseio.com",
  projectId: "sunnys-project-240021",
  storageBucket: "sunnys-project-240021.appspot.com",
  messagingSenderId: "1001324056941",
  appId: "1:1001324056941:web:ba3a969388cf12916cca64",
  measurementId: "G-VZ9WLN1L5Q"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <Login />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
