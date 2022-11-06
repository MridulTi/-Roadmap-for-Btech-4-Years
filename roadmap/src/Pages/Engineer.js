import React from "react"
import { Link } from "react-router-dom";
import ReactDOM from "react-dom"
import ChatbotE from "../Chatbotreact/chatbotEng.js";
import joblist from "./Components/List/joblist.js";
import Stats from "./Components/stats.js";
import Card from "./Components/Card.js";
import "./Components/styles/Engineer.css"
import studylist from "./Components/List/studylist.js";
import { HashLink } from "react-router-hash-link";
export default function Engineer(){
    const[job,changejob]=React.useState(false);
    const[study,changestudy]=React.useState(false);
    const[BE,changeBE]=React.useState(false);
    const[FE,changeFE]=React.useState(false);
    const[DO,changeDO]=React.useState(false);
    const[DR,changeDR]=React.useState(false);
    const[FS,changeFS]=React.useState(false);
    const[UX,changeUX]=React.useState(false);

    const jobb=joblist.map(data=>{
        return(
            <Card 
            funct={eval(data.func)}
            {...data}/>
        )
    })
    const studdy=studylist.map(data=>{
        return(
            <Card 
            funct={eval(data.func)}
            {...data}/>
        )
    })
    function handlejob(){
        if(job==true){
            changejob(false);
        }else{
            changejob(true);
            window.scrollTo(0,100);
        }
    }
    function handlestudy(){
        if(study==true){
            changestudy(false);
        }else{
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
            <div className="head-flex">
                <div>
                <h1>Find Your Dream Engineering Carrer with</h1><h1>CG</h1>
                {/* <Stats/> */}
                <img src="Images/Group_15.png"/>
                </div>
                <div className="head-img"><img src="Images/head-img.svg"/></div>
            </div>
            <div className="head-info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div>
                <HashLink to="#job-specific"><button onClick={handlejob} className="bttn">Job Specific</button></HashLink>
                <HashLink to="#study-specific"><button onClick={handlestudy} className="bttn">Study Specific</button></HashLink>

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
                {BE&&job&&<div id="BE" className="branch">
                    <h1>CS-IT</h1>
                </div>}
                {FE&& job&&<div id="FE" className="branch">
                    <h1>ECE</h1>
                </div>}
                {DO&&job&&<div id="DO" className="branch">
                    <h1>ME</h1>
                </div>}
                {DR&&job&&<div id="DR" className="branch">
                    <h1>CL</h1>
                </div>}
                {FS&&job&&<div id="FS" className="branch">
                    <h1>CL</h1>
                </div>}
                {UX&&job&&<div id="UX" className="branch">
                    <h1>CL</h1>
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
                {BE&&study&&<div id="CS-IT" className="branch">
                    <h1>CS-IT</h1>
                </div>}
                {FE&& study&&<div id="ECE" className="branch">
                    <h1>ECE</h1>
                </div>}
                {DO&&job&&<div id="ME" className="branch">
                    <h1>ME</h1>
                </div>}
                {DR&&study&&<div id="CL" className="branch">
                    <h1>CL</h1>
                </div>}
                {FS&&study&&<div id="CL" className="branch">
                    <h1>CL</h1>
                </div>}
                {UX&&study&&<div id="CL" className="branch">
                    <h1>CL</h1>
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
            

        </div>
    )
}
