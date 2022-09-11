import React from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Home.js"
export default function App(){
  return(
    <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route  path="/" element={<Home/>}/>
            </Routes>
    </AnimatePresence>
  )
}
