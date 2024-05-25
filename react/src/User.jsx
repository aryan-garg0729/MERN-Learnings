import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const User = ()=>{
    const {fname,lname} = useParams(); // Note: key name must be same as specified in routes
    const location = useLocation();   // to get url(pathname)
    const hist = useNavigate();
    return<>
        <h1>user {fname} {lname} page</h1>
        <p>my current location is {location.pathname}</p>
        {location.pathname===`/user/Aryan/Garg`?
            <button onClick={()=>{alert("you are our premium customer")}}>Click me</button>:null
        }

        {/* hist('url')-->navigate to url
            hist(-1)-->go back 1 step
            hist(1)-->go forward 1 step
         */}
        {location.pathname===`/user/Aryan/Garg`?
            <button onClick={()=>{hist('/contact')}}>go back</button>:null
        }
    </>
}

export default User;