import React, { useState } from "react";
import './Hook.css'
/*useState must be called inside a functional component
  It returns an array of a variable and a function to change its value dynamically
*/
const Hook = ()=>{
    
    let [count,changeCount] = useState(0);  //array destructuring
    const IncNum = () => {
        changeCount(count+1);
    }
    const DecNum = () => {
        let a = count-1;
        if(a<0){
            a=0
        }
        changeCount(a);
    }

    return (
    <div className="main_div">
        <div className="center_div">
            <h1>{count}</h1>
            <button className="btn" onClick={DecNum}>-</button>
            <button className="btn" onClick={IncNum}>+</button>
        </div>
    </div>)

}
export default Hook;