import React from 'react';
import ReactDOM from 'react-dom';

// the component that will return HTML user interface, the component must start with capital letter
function ParentComponent() {
    return(
        <div>
            <Header/>
            <h1>Skycore Software & Co.</h1>
            <h3>Our Goal: Produce High Quality Custom Software</h3>
            <NavBar/>
            <Footer/>
        </div>
    )
};

// header component
function Header(){
    return(
        <header>
            <nav>This is the header </nav>
        </header>
    )
};

// footer component
function Footer(){
    return(
        <footer>
            2022 Skycore Software & Co. All Rights Reserved 
        </footer>
    )
};

// navigation bar component 
function NavBar(){
    return(
        <ul>
            <li>Home</li>
            <li>Pricing</li>
            <li>About Us</li>
            <li>Current Projects</li>
            <li>Our Mission</li>
        </ul>
    )
};

// <ParentComponent/> is the way to define component in React, where it is similar to an HTML tag
ReactDOM.render(<ParentComponent/>, document.getElementById("root"));
