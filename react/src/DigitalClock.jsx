import React, { useState } from "react";
import './Hook.css'

const DigitalClock = ()=>{
    let a = new Date().toLocaleTimeString();
    const [time,setTime] = useState(a);

    /* setInterval(callback function, time interval(ms));*/
    setInterval(() => {
        a = new Date().toLocaleTimeString()
        setTime(a); 
    }, 1000);

    return(
        <div>
            <h1>{time}</h1>
        </div>
    )
}
export default DigitalClock;