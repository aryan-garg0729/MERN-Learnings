import React, { useState } from 'react'
import './Weather.css'
const TempApp = ()=>{
    const [city,setCity] = useState("hisar");
    const [search ,setSearch] = useState("Mumbai")
    return<>
        <div className="box">
            <div className="inputData">
                <input 
                    type="search"
                    className='inputFeild'
                    // onChange={}
                />
            </div>
            <div className="info">
                <h2 className='location'>
                <i class="fa-solid fa-street-view"></i>
                </h2>
                <h1 className='temp'>
                    23
                </h1>
                <h3 className='tempmin-max'>5.56</h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
        </div>
    </>
}

export default TempApp;