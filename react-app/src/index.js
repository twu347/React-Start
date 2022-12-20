import React from 'react';
import ReactDOM from 'react-dom';

//import component classes 
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import NavBar from "./Components/NavBar.js";

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

// <ParentComponent/> is the way to define component in React, where it is similar to an HTML tag
ReactDOM.render(<ParentComponent/>, document.getElementById("root"));
