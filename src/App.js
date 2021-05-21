import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';

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

function App() {
  return (
    <React.StrictMode>

    <Router>
    <Header className = "tmp"/>
    <Sidebar />
    <Switch>
      <Route exact path="/" > 
        <Home/>
      </Route>
      <Route path="/search" >
        <DataPage />
      </Route>
      <Route path="/info" >
        <Info />
      </Route>
      <Route path="/message" >
        <Message />
      </Route>
      <Route path="/support" >
        <Contact />
      </Route>
      <Route path="/logout" > 
        <Logout />
      </Route>
    </Switch>
    {/* <Login /> */}
    </Router>
  </React.StrictMode>
  );
}

export default withAuthenticator(App);
