import React from 'react';


const Navbar = props => (
            
            <nav className="navbar navbar-light bg-light"to="/">
            
  
    
<div>
<ul className="navbar-nav">
        <li className="nav-item">
        <a href="/clicky-game/">{props.title}</a>  
        </li>
        <li className="nav-item"> 
     Score- Top: {props.topScore}
        </li>
        <li className="nav-item"> 
     Current: {props.newScore}
        </li>
        <li className="nav-item" >{props.correctIncorrect}</li>
        </ul>
            </div>
            </nav>
          );

 
export default Navbar;