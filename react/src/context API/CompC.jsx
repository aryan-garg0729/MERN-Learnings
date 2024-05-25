import React from 'react'
import { FirstName, LastName } from './ContextAPI';

const CompC = ()=>{
    return <>
    {/* Step-3(for contextAPI) : create consumer=> <context.consumer>{callback function}<context.consumer> */}
        <FirstName.Consumer>
            {(fname)=>{
                return(
                    <LastName.Consumer>
                        {(lname)=>{
                            return <h1>using Context API: my name is {fname} {lname}</h1>
                        }}
                    </LastName.Consumer>
                )
            }}
        </FirstName.Consumer>
    </>
}

// it is very lengthy, the triangle keeps on growing as context increases so we will use useContext()

export default CompC;