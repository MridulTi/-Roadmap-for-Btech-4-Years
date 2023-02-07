import React from "react"
import {AiOutlineHome,AiOutlineLogin} from "react-icons/ai"
import {Link} from "react-router-dom"
import "./styles/Navbar.css"
export default function Navbar(){
    return (
        <div className="navbar">
          <div className="hero">
            <Link to="/"><p className="text-name">Carrer Guidance</p></Link>
          </div>
          <div className="nav-bar-link">
            <div className="frame">
              <p className="text-nav">Home</p>
            </div>
            <div className="frame">
              <p className="text-nav">About</p>
            </div>
            <div className="frame">
              <p className="text-nav">Service</p>
            </div>
            <div className="frame">
              <p className="text-nav">Tutorial</p>
            </div>
          </div>
        </div>
      )
}