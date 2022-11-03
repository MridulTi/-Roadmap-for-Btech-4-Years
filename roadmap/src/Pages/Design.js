import React from "react"
import ReactDOM from "react-dom"
import ChatbotE from "../Chatbotreact/chatbotEng.js";
import "./Components/styles/Engineer.css"
export default function Engineer(){
    
    return(
        <div>
            <h1>HELOhndgjhndgjhndjkhnOOW!</h1>
            <h1>ENGINER</h1>
            <ChatbotE/>
            {/* branch */}
            <div id="CS-IT" className="branch">
                <h1>CS-IT</h1>
            </div>
            <div id="ECE" className="branch">
                <h1>ECE</h1>
            </div>
            <div id="ME" className="branch">
                <h1>ME</h1>
            </div>
            <div id="CL" className="branch">
                <h1>CL</h1>
            </div>

        </div>
    )
}
