import React from 'react';

// import components
import NavBar from './components/NavBar';
import Experience from './components/Experience';
import Card from './components/Card';

function App(){

    const firstName = "Joe";
    const lastName = "Wang";
    const date = new Date();

    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12){
        timeOfDay = "morning";
    }
    else if (hours >=12 && hours < 17) {
        timeOfDay = "afternoon"
    }
    else{
        timeOfDay = "night"
    }

    return(
        <div>
            <NavBar/>
            <Experience/>
            <Card/>

            {/* prop: use curly brace to get value outside JSX */}
            <h1>Hello {firstName} {lastName}!</h1>
            {/* prop: insdie curly brace, it enable to embed javascript code */}
            <h1>It is currently about {date.getHours() % 12} o'clock </h1>
            <h1>Good {timeOfDay}!</h1>

        </div>
    )
};

export default App;
