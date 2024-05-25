import React, { useState } from "react";
import TodoListItem from "./TodoListItem";
import './TodoList.css'

const TodoList = ()=>{
    const [inputList,setInputList] = useState("");
    const [items,setItems] = useState([]);

    const ItemEvent = (event)=>{
        setInputList(event.target.value)
    }
    const addItem=()=>{
        setItems([...items ,inputList])
        setInputList("")

    }
    const deleteItems = (id)=>{
        console.log("deleted");
        setItems((oldItems)=>{
            return oldItems.filter((val,ind)=>{
                return ind!==id;
            })
        })
    }
    return (
    <>
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1>ToDo List</h1>
                <br/>
                <input 
                    type="text"
                    placeholder="Add Items"
                    value={inputList}
                    onChange={ItemEvent}
                />
                <button onClick={addItem} className="btn">+</button>

                <ol>
                    {items.map((val,ind) => {
                        // return <li>{val}</li>
                        return <TodoListItem 
                                    key={ind} 
                                    id={ind} 
                                    text={val}
                                    onSelect={deleteItems}
                                />
                    })}
                </ol>

            </div>
        </div>
    </>)
}

export default TodoList;