import React from 'react';
import {
    Link,
    NavLink,
  } from 'react-router-dom';
import './Header.css';
import DropDownIcon from "../../assets/HeaderIcons/dropDownMenu.js";
import MidICons from "../../assets/HeaderIcons/iconMid.js";
import UserIcon from "../../assets/HeaderIcons/userIcon.js";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open,
      };
    });
  };
    
  render() {
    return (
        <div className="header">
            <div className="container">
              <button type="button" class="button" onClick={this.handleButtonClick}>
                <DropDownIcon/>
              </button>
              {this.state.open && (
                <div id="myDropdown" class="dropdown-content">
                  <a >Go to GFR offical Website</a>
                  <a >Go to OSU offical Website</a>
                  <a >Import Data</a>
                  <a >Export Data</a>
                  <a >Sign out</a>
                </div>
              )}
            </div>
            <MidICons />
            <UserIcon />
        </div>
    )
  }
}

export default Header;