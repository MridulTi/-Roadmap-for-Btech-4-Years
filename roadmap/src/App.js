import React from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Engineer from "./Pages/Engineer.js";
import Home from "./Pages/Home.js"
import NotFound from "./Pages/NotFound.js";
export default function App(){
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/engineer" element={<Engineer/>}/>
      <Route path="/NF" element={<NotFound/>}/>
    </Routes>
  </Router>
  )
}
