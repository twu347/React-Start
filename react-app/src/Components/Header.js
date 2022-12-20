import React from 'react';

// header component
function Header(){
    return(
        <header>
            <nav className="nav">
                <div className="img-box"></div>
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