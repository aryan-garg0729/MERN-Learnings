import React from 'react'
import Header from './Header';
import './Keep.css'
// import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import { useState } from 'react';
const Keep = () => {
    const [notes, addNotes] = useState([])

    const deleteNote = (id) => {
        addNotes((oldNotes)=>{
                return oldNotes.filter((val ,ind) => {
                    return ind!==id;
                })
            }
        )
    }

    return (<>
        <div className="main-div">
            <Header />
            <CreateNote noteProps={{ notes, addNotes }} />
            <div className="container">
                {notes.map((val, ind) => {
                    return <Note key={ind} id={ind} noteAttributes={val} onSelect={deleteNote} />
                })}
            </div>
            {/* <Footer /> */}
        </div>
    </>)
}

export default Keep;