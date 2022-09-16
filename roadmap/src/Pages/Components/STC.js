import React from "react"
export default function STC(props){
    function handlescroll(id){
        const ele=document.getElementById(id);
        ele.scrollIntoView(true);
    }
    return(
        <div>
            <button onClick={()=>{handlescroll(props.id)}}>{props.Name}</button>
        </div>
    )
}