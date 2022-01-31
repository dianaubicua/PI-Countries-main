import React from "react";
import "./minicard.css";

function Minicard({flags, name, continents}) {
return (
        <div className="minicard">
            <img className="flagcountry" src={flags} alt="flag not found" width="250px" height="125px" />
            <br/>
            <h3 className="textname">{name}</h3>
            <br/>
            <h5 className="textCon">{continents}</h5>
        </div>
    );
}
export default Minicard;