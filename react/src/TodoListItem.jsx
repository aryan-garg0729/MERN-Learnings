import React from "react";

const TodoListItem = (props)=>{
    
    return (
    <>
        <div className="todo_style">
            <button className="xbtn" onClick={()=>{props.onSelect(props.id)}}>x</button>
            <li>{props.text}</li>
        </div>
    </>);
}
export default TodoListItem;