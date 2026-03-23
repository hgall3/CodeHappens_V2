import React from "react";
import "./Navbar.scss";
import Button from "../Button/Button";
import logoImg from "../../Assets/logo copy.png" ;
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-logo">
            <img src= {logoImg}alt="logo image Codehappens" />
        </div>
         <div className="navbar-right">
            <ul className="navbar-links">
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Events</Link></li>
            </ul>
            <div className="cta">
                <Button 
                    text="Sign Up" 
                />
            </div>
        </div>  
         </nav>
    );
}
export default Navbar;

