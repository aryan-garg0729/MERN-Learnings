import React, { useState } from "react";
import ques from "./Accordian_data";
import Acc_Element from "./Acc_Element";
import "./Accordian.css"

const Accordian = () => {
    const [data,setData] = useState(ques)
    return <>
        <div className="main_div">
            <div className="center_div">
                <h1>Custom Accordian</h1>
                {data.map((val)=>{
                    return <Acc_Element key={val.id} value={val}/>;
                })}
            </div>
        </div>
    </>;
}

export default Accordian;