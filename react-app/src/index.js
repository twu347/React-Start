import React from 'react';
import ReactDOM from 'react-dom';

// use ReactDOM.render() to create a header line
const element = <h1>Hello World -- React</h1>;
ReactDOM.render(element, document.getElementById('root'));

// recreate the above line of code in vanilla JS - dynamic programming 
const h1 = document.createElement("h1");
h1.textContent = "Dynamic Programming Header"; 
h1.className = "header"; 
document.getElementById("root").append(h1);

// JSX 
const page = <div><h1> Inside DIV </h1></div>
ReactDOM.render(page,document.getElementById("root"));

