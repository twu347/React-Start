import React from "react";

// import statements
import experience from '../images/experience.png';

function Experience(){
    return(
        <section className="container">
            <img className="experience-img" src={experience}/>
            <h1 className="exp-header">Online Experiences</h1>
            <p className="exp-text">Join unique interactive activites led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
};

export default Experience;