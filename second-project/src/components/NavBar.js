import React from "react";

// import img statement
import reactLogo from "../images/react.png";

function NavBarHeader(){
    return(
        <nav className="nav-box">
            <img className="nav--icon" src={reactLogo}></img>
            <h3 className="nav--logo_text">Skycore Software & Co.</h3>
            <h4 className="nav--title">Company's First Project</h4>
        </nav>
        
    )
};

export default NavBarHeader;