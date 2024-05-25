import React, { useState } from "react";
import './Forms.css'
const Forms = ()=>{
    const [name ,setName] = useState('Aryan');
    const [myName ,setmyName] = useState("");

    const InputEvent = (event)=>{
        setName(event.target.value);
    }
    const updateName = ()=>{
        setmyName(name);
    }

    return(
        <>
            <div>
                <h1>Hello {myName}</h1>
                <input 
                    type="text" 
                    onChange={InputEvent} 
                    value={name} 
                    placeholder="Enter Your Name"
                />
                <button onClick={updateName}>Click Me</button>
            </div>
        </>
    )
}
export default Forms