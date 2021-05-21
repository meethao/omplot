import React from 'react';
import IconRace from "./iconImages/raceIcon.jpg";
import IconFrag from "./iconImages/F1Icon.png";
import IconGRF from "./iconImages/GFRLogo.png";
import "./iconMid.css";

const DropDownIcon = () => (
    <div className="midIconContainer">
        <img src={IconRace} alt="" className="img1"/>
        <img src={IconGRF} alt="" className="img2"/>
        <img src={IconFrag} alt="" className="img1"/>
    </div>
)

export default DropDownIcon;