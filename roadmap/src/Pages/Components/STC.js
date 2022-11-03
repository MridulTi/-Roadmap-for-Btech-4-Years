import React from "react"
export default function STC(props){
    function Handlescroll(){
        const id=props.id
        const ele=document.getElementById(id);
        ele.scrollIntoView(true);
    }
    
}