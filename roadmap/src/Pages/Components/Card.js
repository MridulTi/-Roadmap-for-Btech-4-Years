import React from "react";
import { HashLink } from "react-router-hash-link";
import "./styles/card.css"

export default function Card(props){

    return(
        <div className="card">
            <div></div>
            <h2>{props.Name}</h2>
            <p>{props.para}</p>
            <HashLink to={props.hash}><button onClick={props.funct} className="btn">Click Here!</button></HashLink>
        </div>
    )
}