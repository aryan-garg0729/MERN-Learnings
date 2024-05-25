import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Menu = ()=>{
    return <>
        {/* page don't refresh and we also come to know which link is active. The active link gets the class 'active' */}
        <NavLink to='/'>About US </NavLink>
        <NavLink to='/contact'>contact US </NavLink>

        {/* useParams will fetch 'Aryan' & 'Garg' */}
        <NavLink to='/user/Aryan/Garg'> USER </NavLink>
        <NavLink to='/search'> Search </NavLink>
        <br/>

        {/* 
        // page don't refresh but we don't know which link is active so we cannot add different styles
        <Link to='/'>About US </Link>
        <Link to='/contact'>Contact US</Link>
        <br/>

        // page refreshes in this method
        <a href='/'>About </a>
        <a href='/contact'>Contact</a> */}
    </>
}

export default Menu;