import React from "react"
import {AiOutlineHome,AiOutlineLogin} from "react-icons/ai"
import {Link} from "react-router-dom"
export default function Navbar(){
    return(
        <div>
            <Link><AiOutlineHome/></Link>
            <Link><AiOutlineLogin/></Link>
        </div>
    )
}