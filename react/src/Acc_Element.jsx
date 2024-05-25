import React, { useState } from "react";

const Acc_Element = (props) => {
    const [show,setShow] = useState(false);

    return <>
        <div className="main-heading">
            <p onClick={()=>{setShow(!show)}}>{show?"➖":"➕"}</p>
            <h2>{props.value.ques}</h2>
        </div>

        {/* *****MOST IMPORTANT PART(using js to show or not)**** */}
        {show?<p>Method 1 {props.value.answer}</p>:<></>}
        {show&&<p>Method 2 {props.value.answer}</p>}
        
    </>
}

export default Acc_Element;