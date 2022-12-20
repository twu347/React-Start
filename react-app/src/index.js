import React from 'react';
import ReactDOM from 'react-dom';

//import css file 
import "./style.css";

//import component classes 
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import NavBar from "./Components/NavBar.js";
import HomePage from './Components/Homepage';

// the component that will return HTML user interface, the component must start with capital letter
function AppComponent() {
    return(
        <div>
            <Header/>
            <h1>Skycore Software & Co.</h1>
            <HomePage/>
            <NavBar/>
            <Footer/>
        </div>
    )
};

// <ParentComponent/> is the way to define component in React, where it is similar to an HTML tag
ReactDOM.render(<AppComponent/>, document.getElementById("root"));
