import React from 'react'
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import 'D:/WEB DEV/react-apps/react-1/node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'D:/WEB DEV/react-apps/react-1/node_modules/bootstrap/dist/js/bootstrap.bundle'
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Error404 from '../Error404';
import Navbar from './Navbar';
import './style.css'
const ReactWebsite = ()=>{
    return<>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='*' element={<Error404/>}/>
        </Routes>
    </>
}
export default ReactWebsite;