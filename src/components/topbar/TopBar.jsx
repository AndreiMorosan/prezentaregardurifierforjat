import React from 'react';
import "./topbar.scss";
import {Person,Mail} from '@material-ui/icons';

export default function TopBar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar " +(menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
           {/* <a href="#intro" className="logo">
             <img src="assets/fenceicon.png" alt=""/>
           </a> */}

           <div className="itemContainer mobileLeft">
              <Person className="icon"/>
              <span>0757833894</span>
           </div>

           <div className="itemContainer mobileRight">
              <Mail className="icon"/>
              <span>morosan_andrei20@yahoo.com</span>
           </div>

        </div>
         <div className="right">
           <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
             <span className="line1"></span>
             <span className="line2"></span>
             <span className="line3"></span>
           </div>
        </div>
        
      </div>
    </div>
  )
}
