import React from "react"
import {Link}from "react-router-dom"
// import ReactDOM from "react-dom"
import ChatBot from "../Chatbotreact/chatbot";
import About from "./Components/About";
import CG_card from "./Components/CG_card";
import CG_Hero from "./Components/CG_Hero";
import Footer from "./Components/Footer";
import { JobName } from "./Components/List/joblist";
import Navbar from "./Components/Navbar";
// import Stats from "./Components/stats";
import "./Components/styles/Home.css"
import Tutorial from "./Components/Tutorial";
export default function Home(){
    const information=JobName.map(data=>{
        return(
        <CG_card
            {...data}
        />
        )
        
    })
    return(
        <div className="bg">
            <Navbar/>
            {/* <Stats/> */}
            {/* <h1>CARRER GUIDANCE</h1>
            <div className="main-head">
                <img src="Images/Group 13.svg" className="head-img"/>
                <div className="mid-m">
                    <h2>WELCOME!</h2>
                    <div className="hero">
                        <img src="Images/gift.svg"/>
                        <div className="side-hero">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <div>
                                <Link to="/engineer"><button className="btn">Engineering</button></Link>
                                <Link to="/NF"><button className="btn">Doctorate</button></Link>
                                <Link to="/NF"><button className="btn">Lawyer</button></Link>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <img src="Images/Group 14.svg"/>
            </div>
            <img src="Images/bg.svg" className="curves"/>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    */}
            
            <ChatBot/>
            <div className="background-hero">
                {/* <div className="background-clr"> */}
                    <CG_Hero/>
                {/* </div> */}
            </div>
            <div className="About" id="#about">
                <About/>
            </div>
            <div className="cards-container">
                <h1>CAREERS</h1>
                <div className="Cards">
                    {information}
                </div>
            </div>
            
            <div className="Tutorial">
                <Tutorial/>
            </div>
            <div className="Footer">
                <Footer/>
            </div>
            
        </div>
    )
}
