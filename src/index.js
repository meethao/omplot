import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Info from './components/Info/Info.js';
import Message from './components/Message/Message.js';
import Login from './components/Login/Login.js';
import Contact from './components/Contact/Contact.js';
import reportWebVitals from './reportWebVitals';
import Sidebar from './components/sidebar/sidebarTest.js';
import Home from './components/home/Home.js';
import DataPage from './components/datapage/Datapage.js';
import Logout from './components/Logout/Logout.js';
import Header from './components/header/Header.js';

import { withAuthenticator } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

/*
import Amplify, { Auth } from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);
Auth.configure(awsExports);
*/
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
    //<Login />
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
