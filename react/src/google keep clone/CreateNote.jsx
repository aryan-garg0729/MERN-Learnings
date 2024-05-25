import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

const CreateNote = (props) => {
    const [expand,setExpand] = useState(false);
    const {notes, addNotes} = props.noteProps;

    const [Note, setNote] = useState({
        title: "",
        note: ""
    });

    const updateEvent = (event) => {
        // let name = event.target.name;
        // let value = event.target.value;

        const { name, value } = event.target;
        // console.log(name,value);

        setNote((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }


    const AddNote = () => {
        addNotes((preVal) => {
            return [...preVal, Note];
        });

        setNote({
            title: "",
            note:""
        })
    }

    return (<>
        <div className="main_note" onDoubleClick={()=>{setExpand(false)}}>
            <form>
                {expand?
                <input type="text"
                    placeholder='Title'
                    autoComplete='off'
                    name='title'
                    onChange={updateEvent}
                    value={Note.title}
                />:null}
                <textarea
                    placeholder='Write a note...'
                    name='note'
                    value={Note.note}
                    onChange={updateEvent}
                    onClick={()=>{setExpand(true)}}
                    
                ></textarea>
                {expand?
                <Button className='btn plus' onClick={AddNote}>
                    <AddIcon className='plus_sign' />
                </Button>:null}


            </form>
        </div>

    </>)
}

export default CreateNote;