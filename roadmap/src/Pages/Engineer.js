import React from "react"
import ReactDOM from "react-dom"
import ChatbotE from "../Chatbotreact/chatbotEng.js";
import "./Components/styles/Engineer.css"
export default function Engineer(){
    const[job,changejob]=React.useState(false);
    const[study,changestudy]=React.useState(false);
    const[BE,changeBE]=React.useState(false);
    const[FE,changeFE]=React.useState(false);
    const[DO,changeDO]=React.useState(false);
    const[DR,changeDR]=React.useState(false);
    const[FS,changeFS]=React.useState(false);
    const[UX,changeUX]=React.useState(false);

    function handlejob(){
        if(job==true){
            changejob(false);
        }else{
            changejob(true);
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
            <h1>HELOhndgjhndgjhndjkhnOOW!</h1>
            <h1>ENGINER</h1>
            <p>gjnfjdgnjdfngjf</p>
            <div>
                <button onClick={handlejob}>Job Specific</button>
                <button onClick={handlestudy}>Study Specific</button>

            </div>
            <ChatbotE/>
            {/* branch */}
            {job&& <div>
                <div>
                    <button onClick={handleBE}>Backend</button>
                    <button onClick={handleFE}>FrontEnd</button>
                    <button onClick={handleDO}>Devops</button>
                    <button onClick={handleDR}>Devrel</button>
                    <button onClick={handleFS}>FullStack</button>
                    <button onClick={handleUX}>UI/UX Design</button>
                    
                </div>
            </div>}
                {BE&&<div id="CS-IT" className="branch">
                    <h1>CS-IT</h1>
                </div>}
                {FE&&<div id="ECE" className="branch">
                    <h1>ECE</h1>
                </div>}
                {DO&&<div id="ME" className="branch">
                    <h1>ME</h1>
                </div>}
                {DR&&<div id="CL" className="branch">
                    <h1>CL</h1>
                </div>}
                {FS&&<div id="CL" className="branch">
                    <h1>CL</h1>
                </div>}
                {UX&&<div id="CL" className="branch">
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
            {study&& <div>
                
                <div id="CS-IT" className="branch">
                    <h1>1st Sem</h1>
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
                <div>
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
                </div>
            </div>}
            

        </div>
    )
}
