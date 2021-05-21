import React from 'react';
import {
    NavLink,
  } from 'react-router-dom';

// icons
import HomeIcon from "../../assets/SidebarIcons/HomeIcon.js";
import SearchIcon from "../../assets/SidebarIcons/SearchIcon.js";
import SupportIcon from "../../assets/SidebarIcons/SupportIcon.js";
import LogoutIcon from "../../assets/SidebarIcons/LogoutIcon.js";
import { Auth } from 'aws-amplify';

import './sidebarTest.css';

const sidebarTest = (props) => {

  async function signOut(){
    console.log("signout");
    await Auth.signOut();
    window.location.reload();
  }
  
  return (
    <div className="sidebar">
      <ul>
        <li>
            <NavLink activeClassName="active" className="col" to="/"><HomeIcon /> Home</NavLink>
        </li>
        <li>
            <NavLink activeClassName="active" className="col" to="/search"><SearchIcon /> Data</NavLink>
        </li>
        <li>
            <NavLink activeClassName="active" className="col" to="/support"><SupportIcon /> Support</NavLink>
        </li>
        <li>
            <NavLink activeClassName="active" className="col" to="/" onClick={signOut}>
              <LogoutIcon />Log out
              </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default sidebarTest;