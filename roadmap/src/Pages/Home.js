import React from "react"
import {Link}from "react-router-dom"
import ReactDOM from "react-dom"
import ChatBot from "../Chatbotreact/chatbot";
import Stats from "./Components/stats";
import "./Components/styles/Home.css"
export default function Home(){
    return(
        <div className="bg">
            {/* <Stats/> */}
            <h1>CARRER GUIDANCE</h1>
            <div className="main-head">
                <img src="Images/Group_13.png" className="head-img"/>
                <div className="mid-m">
                    <h2>WELCOME!</h2>
                    <div>
                        <img src="Images/gift.svg"/>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <div>
                                <Link to="/engineer"><button className="btn">Engineering</button></Link>
                                <Link to="/NF"><button className="btn">Doctorate</button></Link>
                                <Link to="/NF"><button className="btn">Lawyer</button></Link>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <img src="Images/Group_14.png" className="head-img"/>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

            
            <ChatBot/>
        </div>
    )
}
