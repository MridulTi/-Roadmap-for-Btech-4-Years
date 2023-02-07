import React from "react";
import { Link } from "react-router-dom";
import "./styles/CG-card.css"
export default function CG_card(props){
    return (
        <div className="c-g-card" id={props.class}>
          <img src={props.img} className="img-container"/>
          <div className="container-content">
            <div className="text-title">
              <p className="title-head">{props.head}</p>
              <p className="title-subhead">{props.subhead}</p>
            </div>
            <div className="frame-filler">
              <div className="card-filler">
                <p className="text-filler-content">{props.info}</p>
              </div>
              <Link to={props.page}><button className="text-button">
                <p className="Click-here">Click Here</p>
              </button></Link>
            </div>
          </div>
        </div>
    )
}