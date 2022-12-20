import React from 'react';
import ReactDOM from 'react-dom'

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

// one class attribute is only able to render one object 
ReactDOM.render(<h1>something</h1>, document.getElementById("root1"));

export default Header;