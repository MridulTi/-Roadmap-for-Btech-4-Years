import React from "react";
import "./styles/Job-Card.css"
import { Link } from "react-router-dom";
export default function Job_Card(props){
    return (
        <div className="jobcard" id={props.class}>
          <div className="frame-job-card">
            <div className="card-content">
              <div className="card-title">
                <p className="text-job-title">{props.Name}</p>
              </div>
              <div className="card-info">
                <p className="text-job-subhead">{props.para}</p>
              </div>
            </div>
            <div className="rectangle-job" />
          </div>
          <Link to={props.page}><button onClick={props.funct} className="text-button">Click Here!</button></Link>
        </div>
      )
}