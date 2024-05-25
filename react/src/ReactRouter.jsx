import React from 'react'
import About from './About';
import Contact from './Contact';
import Error404 from './Error404';
import { Route, Routes  } from 'react-router-dom';
import Menu from './Menu';
import User from './User';
import Search from './Search';

const ReactRouter = ()=>{
    const name = ()=>{
        return<>
            <h1>name</h1>
        </>
    }
    return <>
    
    <Menu/>

    <Routes>
        <Route path='/' Component={About}/>
        <Route path='/contact/name' Component={name}/>

        {/* same as above but now we can pass props(attributes) to contact page if we want which is not posssible in above case */}
        <Route path='/contact' Component={()=>{return <Contact asd='sd'/>}}/>

        {/* latest method, now we can pass props if we want without any callback function */}
        <Route path='*' element={<Error404/>}/>

        {/* anything after ':' can be passed as paramater using useParam Hooks */}
        <Route path='/user/:fname/:lname' element={<User/>}/>

        {/* creating search filter (we can use filter function on array) */}
        <Route path='/search' element={<Search/>}/>

    </Routes>

        {/* <About/>
        <Contact/> */}
    </>;
}

export default ReactRouter;