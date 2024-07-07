import { NavLink } from "react-router-dom";




function NavMenu() {
    return (
      <div className="nav-container">
        <nav>
        <NavLink to="/main"  className="nav-item">Home</NavLink>
          <NavLink to="/register"  className="nav-item">Register</NavLink>
          <NavLink to="/game" className="nav-item">Game</NavLink>
          <NavLink to="/calculator" className="nav-item">Calculator</NavLink>
          <NavLink to="/login"  className="nav-item">Login</NavLink>

          
        </nav>
  
      </div>
    );
  }
  


export default NavMenu;
