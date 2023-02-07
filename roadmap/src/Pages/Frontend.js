import React from "react";
import Topic_Info from "./Components/Topic_Info";
import "./Components/styles/FE.css"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
export default function Frontend(){
    return(
        <div className="FE">
            <Navbar/>
            <div className="Topic-infor">
               <Topic_Info/>
            </div>
            <div className="FD">
                <img src="Images/FD.svg"/>
            </div>
            <div className="Footer">
                <Footer/>
            </div>
        </div>
    )
}