import React from 'react';
import "./intro.scss";
import {init} from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {
   
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["SCARI METALICE", "GRILAJE"],
    });
  }, []);


  return (
    <div className="intro" id="acasa">
      <div className="left">
           <div className="itemContainer">
           <img src="assets/poartaintro.jpg" alt=""/>
           </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>NE OCUPAM CU PRODUCEREA DE</h2>
          <h1>GARDURI DIN FIER FORJAT</h1>
          <h3>BALUSTRADE SI <span ref={textRef}></span></h3>
        </div>
        
        <a href="#fotografii" >
          <img src="assets/down.png" alt=""/>
        </a>
      </div>
    </div>
  )
}
