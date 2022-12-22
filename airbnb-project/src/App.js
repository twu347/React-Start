import React from 'react';

// import components
import NavBar from './components/NavBar';
import Experience from './components/Experience';
import Card from './components/Card';

function App(){
    return(
        <div>
            <NavBar/>
            <Experience/>
            <Card img="../images/star.png" name="Name 1"/>
            <Card img="../images/logo.png" name="Name 2"/>
            <Card img="../images/cxk158235.png" name="Name 3"/>
        </div>
    )
};

export default App;
