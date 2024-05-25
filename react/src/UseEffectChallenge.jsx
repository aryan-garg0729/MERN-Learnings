import React, { useEffect, useState } from 'react'

const UseEffectChallenge = ()=>{
    const [num,setNum] = useState(0);
    useEffect(()=>{
        const a = document.getElementById("title");
        a.innerHTML= `clicked ${num}`;
    })
    return<>
        <button onClick={()=>{setNum(num+1)}}>click me {num}</button>
    </>
}

export default UseEffectChallenge;