import React from "react"
import "./styles/Tutorial.css"
export default function Tutorial(){
    return (
        <div className="tutorial">
          <div className="tutorial-headline">
            <div className="tutorial-text">
              {/* <img src="" /> */}
              <hr></hr>
              <p className="text-tut-head">Tutorial</p>
              {/* <img src="" /> */}
              <hr></hr>
            </div>
            <p className="text-tut-subhead">How to use this site?</p>
          </div>
          {/* <div className="youtube-video"> */}
          <div className="img-youtube"/>
          <div className="topic-info">
            <div className="frame-tut-content">
              <p className="text-tut-job">JOB Title Text</p>
            </div>
            <p className="text-tut-content">Lorem ipsum dolor sit amet consectetur. Risus orci facilisis lorem velit dolor quis. Duis egestas risus semper pellentesque. Scelerisque lectus porta elit volutpat nibh viverra. Id sit ultricies nullam at magna in. Viverra viverra dolor congue vitae tempus elementum feugiat suspendisse. Sapien vitae tincidunt vulputate ac. Facilisis pellentesque et placerat morbi viverra fringilla consequat id ullamcorper.</p>
          </div>
        </div>
      )
}