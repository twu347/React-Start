import React from "react";

// import components
import NavBarHeader from "./components/NavBar";
import MainHeader from "./components/Main";

function App(){
    return(
        <div className="container">
            <NavBarHeader/>
            <MainHeader/>
        </div>
    )
};

export default App;