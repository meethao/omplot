import React from 'react';
import Icon from "./iconImages/dropMenu.png";

function HomeIcon (
    function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
      }
  
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
  
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
    return{
      <img src={Icon} onclick="myFunction()"/>
    }
  
  )

export default HomeIcon;