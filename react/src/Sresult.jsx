import React from 'react'
const Sresult = (props)=>{
    const img = `https://source.unsplash.com/400x300/?${props.search}`;
    return <>
        {props.search ? <img src={img} alt="sdf" /> : null}
    </>
}
export default Sresult;