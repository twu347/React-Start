import React from 'react';
import ReactDOM from 'react-dom';

// the component that will return HTML user interface, the component must start with capital letter
function TemporaryName() {
    return(
        <div>
            <header>
                <nav>This is the Header</nav>
            </header>
            <h1>Skycore Software & Co.</h1>
            <h3>Our Goal: Produce High Quality Custom Software</h3>
            <ul>
                <li>Home</li>
                <li>Pricing</li>
                <li>About Us</li>
                <li>Current Projects</li>
                <li>Our Mission</li>
            </ul>
            <footer>
                2022 Skycore Software & Co. All Rights Reserved 
            </footer>
        </div>
    )
};

// <TemporaryName/> is the way to define component in React, where it is similar to an HTML tag
ReactDOM.render(<TemporaryName/>, document.getElementById("root"));

