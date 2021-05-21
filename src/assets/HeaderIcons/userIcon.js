import React from 'react';
import {
    NavLink,
  } from 'react-router-dom';
import UserIcon3 from "./iconImages/userIcon.jpg";
import Bell from "./iconImages/bell.png";
import "./userIcon.css";

const UserIcon = () => (
    <div className="userContainer">
        <NavLink  to="/info"><img src={UserIcon3} alt="" className="avatar"/></NavLink>
        <NavLink to="/message"><img src={Bell} alt="" className="bellIcon"/></NavLink> 
    </div>
)

export default UserIcon;