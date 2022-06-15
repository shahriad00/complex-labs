import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/icons/full-logo.svg";

const NavBar = () => {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    
    return (
      <div>
       <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
        <nav className="navbar" onClick={e => e.stopPropagation()}>
          <div className="nav-container container">
            <NavLink to="/" className="nav-logo">
              <img src={logo} alt=""/>
            </NavLink>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-links"
                 onClick={click ? handleClick : null}
                >
                  Documentation
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-links"
                 onClick={click ? handleClick : null}
                >
                  Contact
                </NavLink>
              </li>
                <div className="nav-auth-wrapper">
                    <span className='nav-login'>Log In</span>
                    <span className='nav-signup'>Sign Up</span>
                </div>
            </ul>
            
            <div className="nav-icon" onClick={handleClick}>
            {
                 
                <div className={click ? "menu-icon change" : "menu-icon "}>
                    <div className="bar1"/>
                    <div className="bar2"/>
                    <div className="bar3"/>
                </div>
            }
            </div>
          </div>
        </nav>
      </ div>
    );
  }
export default NavBar;