import React from "react"
import "./styles/Topic_Info.css"
export default function Topic_Info(props){
    return (
        <div className="topic-info">
          <div className="rectangle-topic" />
          <div className="frame-topic">
            <p className="text-topic-title">{props.title}</p>
          </div>
          <p className="text-topic-ingo">{props.info}</p>
        </div>
      )
}