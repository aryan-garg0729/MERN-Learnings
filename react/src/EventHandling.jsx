import React, { useState } from "react";
import './EventHandling.css'

const EventHandling = ()=>{
    let [bg,setbg] = useState("#8e44ad")
    let [name,setname] = useState("Click me")

    const bgchange = ()=>{
        setbg("#34495e")
        setname("Ouch!!")
    }
    const bgBack = ()=>{
        setbg("#1e78ad")
        setname("AYYIO!!!")
    }
    
    return(
        <div style={{backgroundColor:bg}}>
            <button onMouseEnter={bgchange} onMouseLeave={bgBack}>{name}</button>
        </div>);
}

export default EventHandling ;
