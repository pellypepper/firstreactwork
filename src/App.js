

import { Outlet, Link } from "react-router-dom";
import './App.css';
import FooterMenu from './footer';

import NavMenu from "./nav"






function App() {
  return (
   
   
        <div className="App">
          <NavMenu />
           <div>
           <Outlet />
           </div>
         
          <FooterMenu />
        </div>


  );
}

export default App;
