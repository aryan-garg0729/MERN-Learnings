import React, { useState } from "react";
import './Forms.css'
const ComplexMultipleInputs = ()=>{
    //instead of creating many useStates, create an object with them as keys
    const [fullName ,setFullName] = useState({
        fname:"",
        lname:"",
        email:"",
        mobile:""
    });

    const InputEvent = (event)=>{
        // const value = event.target.value;
        // const name = event.target.name;

        //use object destructuring instead of writing them individually
        const {value,name} = event.target;

        setFullName((preValue)=>{
            /*if(name==='fname'){
                return{
                    fname:value,
                    lname:preValue.lname,
                    email:preValue.email,
                    mobile:preValue.mobile
                }
            }
            else if(name==='lname'){
                return{
                    fname:preValue.fname,
                    lname:value,
                    email:preValue.email,
                    mobile:preValue.mobile
                }
            }
            else if(name==='email'){
                return{
                    fname:preValue.fname,
                    lname:preValue.lname,
                    email:value,
                    mobile:preValue.mobile
                }
            }
            else if(name==='mobile'){
                return{
                    fname:preValue.fname,
                    lname:preValue.lname,
                    email:preValue.email,
                    mobile:value,
                }
            }*/

            //use it instead of the above if else conditions
            return{
                ...preValue, //spread operator
                [name] : value //updating
            }
        })
    }
    const onSubmit = (e)=>{
        e.preventDefault(); //prevents pg refresh
    }

    return(
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <h1>Hello {fullName.fname} {fullName.lname} </h1>
                    <p>{fullName.email}</p>
                    <p>{fullName.mobile}</p>
                    <input 
                        type="text" 
                        onChange={InputEvent} 
                        value={fullName.fname} 
                        placeholder="Enter Your Name"
                        name="fname"
                    />
                    <input 
                        type="text" 
                        onChange={InputEvent} 
                        value={fullName.lname} 
                        placeholder="Enter Your Name"
                        name="lname"
                    />
                    <input 
                        type="Email" 
                        onChange={InputEvent}
                        value={fullName.email} 
                        placeholder="Enter Your Email"
                        name="email"
                    />
                    <input 
                        type="number" 
                        onChange={InputEvent} 
                        value={fullName.mobile}
                        placeholder="Enter Your Mobile"
                        name="mobile"
                    />
                    <button type="submit" >Click Me</button>
                </div>
            </form>
        </>
    )
}
export default ComplexMultipleInputs