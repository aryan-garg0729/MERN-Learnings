import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
const Note = (props) => {
    return (<>
        <div className="note">
            <h1>{props.noteAttributes.title}</h1>
            <br/>
            <p>{props.noteAttributes.note}</p>
            <Button className='btn' onClick={()=>{props.onSelect(props.id)}}>
                <DeleteIcon className='deleteIcon'/>
            </Button>
        </div>
    </>)
}

export default Note;