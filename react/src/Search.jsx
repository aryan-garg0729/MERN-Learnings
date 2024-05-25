import React, { useState } from 'react'
import Sresult from './Sresult';
const Search = ()=>{
    const [img,setImg] = useState("");

    const updateImg = (event)=>{
        setImg(event.target.value);
    }

    return <>
        <div className="searchBar">
            <input 
                type="text" 
                placeholder='search...'
                onChange={updateImg}
                value={img}
            />
            <Sresult search={img}/>
        </div>
    </>
}
export default Search;