import React, { useState } from "react";
import './Forms.css'
const SubmitNoRefresh = ()=>{
    const [name ,setName] = useState("");
    const [myName ,setmyName] = useState("");

    const [lastname ,setlastName] = useState("");
    const [mylastName ,setmylastName] = useState("");

    const InputEvent = (event)=>{
        setName(event.target.value);
    }
    const InputEvent2 = (event)=>{
        setlastName(event.target.value);
    }
    const updateName = (e)=>{
        e.preventDefault(); //prevents pg refresh
        setmyName(name);
        setmylastName(lastname);
    }

    return(
        <>
            <form onSubmit={updateName}>
                <div>
                    <h1>Hello {myName} {mylastName}</h1>
                    <input 
                        type="text" 
                        onChange={InputEvent} 
                        value={name} 
                        placeholder="Enter Your Name"
                    />
                    <input 
                        type="text" 
                        onChange={InputEvent2} 
                        value={lastname} 
                        placeholder="Enter Your Name"
                    />
                    <button type="submit" >Click Me</button>
                </div>
            </form>
        </>
    )
}
export default SubmitNoRefresh