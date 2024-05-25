import React, { useState } from "react";
import './Hook.css'

const GetTime = ()=>{
    let a = new Date().toLocaleTimeString();
    const [time,updateTime] = useState(a);
    const update = ()=>{
        a = new Date().toLocaleTimeString();
        updateTime(a);
    }
    return (
        <div>
            <h1>{time}</h1>
            <button onClick={update}>Click me</button>
        </div>)
}
export default GetTime