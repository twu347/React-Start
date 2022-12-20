import React from 'react';

//import image from Images folder 
import companyLogo from "../Images/logo.png";

// header component
function Header(){
    return(
        <header>
            <nav className="nav">
                <img className="img-box" src={companyLogo}/>
                <ul className="nav-items">
                    <li>Home Page</li>
                    <li>Pricing</li>
                    <li>About Us</li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;