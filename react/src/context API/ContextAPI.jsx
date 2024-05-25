import React, { createContext } from 'react'
import CompA from './CompA';

//Step-1: Create context
const FirstName = createContext();
const LastName = createContext();

const ContextAPI = ()=>{
    return <>
        {/* Step-2: create provider */}
        <FirstName.Provider value={"Aryan"}>
            <LastName.Provider value={"Garg"}>
                <CompA/>
            </LastName.Provider>
        </FirstName.Provider>
    </>
}

export default ContextAPI;
export {FirstName,LastName};