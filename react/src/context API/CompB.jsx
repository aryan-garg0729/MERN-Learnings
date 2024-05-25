import React, { useContext } from 'react'
import CompC from './CompC';
import { FirstName, LastName } from './ContextAPI';

const CompB = ()=>{
    // Step-3(for useContext): create useContect Hooks and use them
    const fname = useContext(FirstName); //fname now has value
    const lname = useContext(LastName);
    return( 
    <>
        <h1>using useContext : my name is {fname} {lname}</h1>
        <CompC/>
    </>)
}

export default CompB;