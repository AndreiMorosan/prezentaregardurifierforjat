import React from 'react';
import './aboutus.scss';


export default function AboutUs() {
  return (
    <div className="aboutus" id="desprenoi">
      

      <div className="wrapper">
      <h1>Despre Noi</h1>
        <h2>Ne ocupam cu producerea de garduri,</h2>
        <h2>Balustrade, grilaje etc</h2>
        <h3>Oferim:</h3>
      </div>


      <div className="left">
       
       <div className="hoverelements">
       <div className="icons">
      <img src="assets/welding.png" alt=""/>
       </div>
       <h1 className="visible">Cea mai buna calitate</h1>
       </div>
      

       
       
       <div className="hoverelements">
       <div className="icons transport">
           <img src="assets/transport.jpg" alt=""/>
       </div>
       <h1 className="visible">Transport</h1>
       </div>
       

       
        <div className="hoverelements">
        <div className="icons">
      <img src="assets/mounting.png" alt=""/>
       </div>
        <h1 className="visible">Montare</h1>
      </div>
        </div>
       
       
    </div>
  )
}
