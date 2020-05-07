// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'
import "bootstrap/dist/css/bootstrap.css"
import App from './components/App.js'
import "./global.css"

firebase.initializeApp({
        apiKey: "AIzaSyDWXlyOWNOO_szVgYOf-agdfrqHxrgh7dY",
        authDomain: "platzi-conf-1.firebaseapp.com",
        databaseURL: "https://platzi-conf-1.firebaseio.com",
        projectId: "platzi-conf-1",
        storageBucket: "platzi-conf-1.appspot.com",
        messagingSenderId: "697485795850",
        appId: "1:697485795850:web:1c90a549a71bdd158cf5f3",
        measurementId: "G-S55TE06DPR"
})

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<App/>, container);
