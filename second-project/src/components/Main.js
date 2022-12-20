import React from "react";

function MainHeader(){
    return(
        <main>
            <h1 className="main-header">Technologies We Used</h1>
            <ul className="main-ul">
                <li>Front End: Angular, React</li>
                <li>Back End: Node.js, Express.js</li>
                <li>Database: MySQL, MongoDB</li>
                <li>Operating System: MacOS, Linux, Windows</li>
                <li>Web Server: Amazon Web Services, Digital Ocean</li>
            </ul>
        </main>
    )
};

export default MainHeader;