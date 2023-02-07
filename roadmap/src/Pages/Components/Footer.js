import React from "react"
import "./styles/Footer.css"
export default function Footer(){
    return (
        <div className="footer">
          <div className="footer-socialsand-links">
            <div className="footer-links">
              <div className="frame-footer">
                <p className="text-name">Home</p>
              </div>
              <div className="frame-footer">
                <p className="text-name">About</p>
              </div>
              <div className="frame-footer">
                <p className="text-name">Our Team</p>
              </div>
              <div className="frame-footer">
                <p className="text-name">Services</p>
              </div>
              <div className="frame-footer">
                <p className="text-name">Contact</p>
              </div>
            </div>
            <div className="frame-footer-link">
              <img src="" />
              <img src="" />
              <img src="" />
              <img src="" />
            </div>
            <p className="text-email">carrerguidance@gmail.com</p>
          </div>
          <div className="frame-footer-copyright">
            <img src="" />
            <p className="text-copyright">Copyright@2022CarrerGuidanceTeam. All rights are reserved</p>
          </div>
        </div>
      )
}