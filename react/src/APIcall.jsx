import axios from 'axios';
import React, { useEffect, useState } from 'react'
//API link: https://pokeapi.co/
const APIcall = ()=>{
    const [num,setNum] = useState();
    const [name,setName] = useState();
    const [move,setMove] = useState();
    useEffect(()=>{
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setName(res.data.name);
            setMove(res.data.moves.length);
        }
        getData();
    })

    return <>
        <h1>you choose <span style={{color:'red'}}>{num} </span>value</h1>
        <h1>My name is <span style={{color:'red'}}>{name}</span></h1>
        <h1>I have <span style={{color:'red'}}>{move}</span> moves</h1>
        <select onChange={(event)=>{
            setNum(event.target.value);
        }}>
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
    </>
}

export default APIcall;