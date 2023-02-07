import React from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Engineer from "./Pages/Engineer.js";
import Frontend from "./Pages/Frontend.js";
import Home from "./Pages/Home.js"
import NotFound from "./Pages/NotFound.js";
export default function App(){
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/engineer" element={<Engineer/>}/>
      <Route path="/FE" element={<Frontend/>}/>
      <Route path="/NF" element={<NotFound/>}/>
    </Routes>
  </Router>
  )
}
