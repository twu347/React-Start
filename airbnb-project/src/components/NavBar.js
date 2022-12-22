import React from "react";

// import statements
import logo from "../images/logo.png";

function NavBar(){
    return(
        <nav>
            <img className="logo-img" src={logo}></img>
        </nav>
    )
};

export default NavBar;