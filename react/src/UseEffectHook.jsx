import React, { useEffect, useState } from 'react'

const UseEffectHook = ()=>{
    const [num1,setNum1] = useState(0);
    const [num2,setNum2] = useState(0);
    const incNum1 = ()=>{
        setNum1(num1+1);
    }
    const incNum2 = ()=>{
        setNum2(num2+1);
    }

    //it gets called even after refresh or any useState variable is changed(i.e. every render)
    // useEffect(()=>{
    //     alert("clicked")
    // })

    //it gets called only on refreshing(i.e. first render)
    // useEffect(()=>{
    //     alert("clicked")
    // },[])

    //it gets called only refreshing and on changing useState variable num1
    useEffect(()=>{
        alert("clicked")
    },[num1])

    return <>
        <button onClick={incNum1}>clicked {num1}</button>
        <button onClick={incNum2}>clicked {num2}</button>
    </>
}

export default UseEffectHook;
