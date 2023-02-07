import React from "react"
import { Link } from "react-router-dom";
import ReactDOM from "react-dom"
import ChatbotE from "../Chatbotreact/chatbotEng.js";
import {Joblist} from "./Components/List/joblist.js";
import Stats from "./Components/stats.js";
import Job_Card from "./Components/Job-card.js";
import "./Components/styles/Engineer.css"
import studylist from "./Components/List/studylist.js";
import { HashLink } from "react-router-hash-link";
import Footer from "./Components/Footer.js";
import Navbar from "./Components/Navbar.js";
export default function Engineer(){
    const[job,changejob]=React.useState(true);
    const[study,changestudy]=React.useState(false);
    const[BE,changeBE]=React.useState(false);
    const[FE,changeFE]=React.useState(false);
    const[DO,changeDO]=React.useState(false);
    const[DR,changeDR]=React.useState(false);
    const[FS,changeFS]=React.useState(false);
    const[UX,changeUX]=React.useState(false);

    const jobb=Joblist.map(data=>{
        return(
            <Job_Card 
            funct={eval(data.func)}
            {...data}/>
        )
    })
    const studdy=studylist.map(data=>{
        return(
            <Job_Card 
            funct={eval(data.func)}
            {...data}/>
        )
    })
    function handlejob(){
        if(job==true){
            changestudy(true);
            changejob(false);
        }else{
            changestudy(false);
            changejob(true);
            // window.scrollTo(0,100);
        }
    }
    function handlestudy(){
        if(study==true){
            changestudy(false);
            changejob(true)
        }else{
            changejob(false);
            changestudy(true);
        }
    }
    function handleBE(){
        
        console.log("Hel")
        if(BE==true){
            changeBE(false);
        }else{
            changeBE(true);
            
        }
    }
    function handleFE(){
        if(FE==true){
            changeFE(false);
        }else{
            changeFE(true);
        }
    }
    function handleDO(){
        if(DO==true){
            changeDO(false);
        }else{
            changeDO(true);
        }
    }
    function handleDR(){
        if(DR==true){
            changeDR(false);
        }else{
            changeDR(true);
        }
    }
    function handleFS(){
        if(FS==true){
            changeFS(false);
        }else{
            changeFS(true);
        }
    }
    function handleUX(){
        if(UX==true){
            changeUX(false);
        }else{
            changeUX(true);
        }
    }

    return(
        <div>
            <Navbar/>
            <div className="head-flex">
                <div className="head-header">
                    <div>
                        <h1>CS</h1>
                        <h2>Engineer</h2>
                    </div>
                    <p className="header-para">Computer Science is a vast field with a range of clusters of possible careers. Although with so many possibilities comes the confusion to choose a specific track to study and work on. Even if it’s true to consider mastering only one specific subject of interest in Computer Science, it’s essential to learn all the basics related to other subjects to actually implement and use that subject of interest. For example, to write Server-side scripts, we don’t just deal with the Frontend elements and deliver accordingly but also should know how to access the data from databases and/or use HTTP requests to fetch information/outputs from APIs. So, to use the databases and to fetch data from APIs, we need to know the basic concepts and applications of both. Starting with such an ideology comes the question every student has during the end of his/her undergraduate studies: “What should I pursue as a career ahead?”</p>
                    {/* <Stats/> */}
                    <img src="Images/Group_15.png"/>
                </div>
                {/* <div className="head-img"><img src="Images/head-img.svg"/></div> */}
            </div>
            {/* <div className="head-info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div> */}
            <div className="eng-button">
                <button onClick={handlejob} className="common-button">Job Specific</button>
                <button onClick={handlestudy} className="common-button">Study Specific</button>

            </div>
            <ChatbotE/>
            {/* branch */}
            {job&& <div className="job-head" id="job-specific">
                <h2>Explore Jobs by category</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia</p>
                <div className="job">
                    {jobb}
                    
                </div>
            </div>}

                {/* <div>
                    <h1>Internships</h1>
                    <div id="CS-intern" className="intern">
                        <h2>CS-IT</h2>
                        <div></div>
                        <div></div>
                    </div>
                    <div id="ECE-intern" className="intern">
                        <h2>ECE</h2>
                        <div></div>
                        <div></div>
                    </div>
                    <div id="ME-intern" className="intern">
                        <h2>ME</h2>
                        <div></div>
                        <div></div>
                    </div>
                    <div id="CL-intern" className="intern">
                        <h2>CL</h2>
                        <div></div>
                        <div></div>
                    </div>
            </div> */}
            {study&& <div className="job-head" id="study-specific">
                <h2>Explore Study Info by category</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia</p>
                <div className="job">
                    {studdy}
                    
                </div>
            </div>}
                
                {/* <div>
                    <h1>Internships</h1>
                    <div id="CS-intern" className="intern">
                        <h2>CS-IT</h2>
                        <div></div>
                        <div></div>
                    </div>
                    <div id="ECE-intern" className="intern">
                        <h2>ECE</h2>
                        <div></div>
                        <div></div>
                    </div>
                    <div id="ME-intern" className="intern">
                        <h2>ME</h2>
                        <div></div>
                        <div></div>
                    </div>
                    <div id="CL-intern" className="intern">
                        <h2>CL</h2>
                        <div></div>
                        <div></div>
                    </div>
                </div> */}
            <div className="Footer">
                <Footer/>

            </div>
        </div>
    )
}
