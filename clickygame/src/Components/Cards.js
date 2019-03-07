import React from "react";

var Cards = props => (
    <div>
        <div className="card" style={{width: 18 + "rem"}}>
        <img onClick={props.onClick} className="card-img-top" src={props.img} alt={props.name} />
        </div>
    </div>
);

export default Cards