
import TopBar from "./components/topbar/TopBar";
import Intro from "./components/intro/Intro";
import Portofolio from "./components/portofolio/Portofolio";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import AboutUs from "./components/AboutUs/AboutUs";

import "./app.scss";
import {useState} from 'react';



function App() {
  
  const[menuOpen,setMenuOpen]=useState(false);

  return (
    <div className="app">
     <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Portofolio/>
       {/* <Works/> */}
       <AboutUs/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;
