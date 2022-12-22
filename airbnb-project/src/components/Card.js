import React from "react";

// import statements
import cxk from "../images/cxk168235.png";
import star from "../images/star.png";

function Card(props){
    return(
        <div className="card">
            <img className="cxk" src={cxk}/>
            <div className="card--stats">
                <img className="star" src={star}/>
                <span>5.0</span>
                <span className="gray">(6) - </span>
                <span className="gray">USA</span>
            </div>
            <p>{props.name}</p>
            <p><span className="bold">From $136 / person</span> </p>
        </div>
    )
};

export default Card;