import React from "react";
import "./styles/cg-hero.css"
export default function CG_Hero(){
    return (
        <div className="carrer-guidance-hero">
          <div className="title-text">
            <p className="text-cg-C">C</p>
            <div className="title-tagline">
              <p className="text-cg-name">arrer Guidance</p>
              <p className="text-cg-subtitle">hoose Your Own Future</p>
            </div>
          </div>
          <div className="contentand-button">
            <div className="content">
              {/* <img src="" /> */}
              <p className="text-cg-info">A One Stop Space to for students to get Correct, precise and Complete information to help them shape their own futures.A place where student can go to in order to get the Guidance they want and require.A place which provide concrete goals for students to get to your desired JobsA place where student can look for not just job specific Goals but for Study specific Goals as well.</p>
            </div>
            <button className="common-cg-button">
              <p className="text-cg-btn">Read More</p>
            </button>
          </div>
        </div>
      )
}