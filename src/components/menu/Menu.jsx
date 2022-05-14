import React from 'react';
import './Menu.scss';


export default function Menu({menuOpen,setMenuOpen,setMenu}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
         <ul>
             <li onClick={()=>setMenuOpen(false)}>
                 <a href="#acasa">Acasa</a>
             </li>

             <li onClick={()=>setMenuOpen(false)}>
                 <a href="#fotografii">Fotografii</a>
             </li>
             
             <li onClick={()=>setMenuOpen(false)}>
                 <a href="#desprenoi">Despre Noi</a>
             </li>

             <li onClick={()=>setMenuOpen(false)}>
                 <a href="#contact">Contact</a>
             </li>
         </ul>
    </div>
  )
}
