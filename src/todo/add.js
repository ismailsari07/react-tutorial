import React, { useState } from "react";
import {useSelector} from "react-redux"
import {nanoid} from "nanoid";
import { addTodoHandle } from "../utils";

function AddTodo() {
    const [todo, setTodo] = useState('');
    const {user} = useSelector((state) => state.auth)

    const submitHandle = e => {
        e.preventDefault();

        addTodoHandle({
            title: todo,
            done: false,
            id: nanoid(),
            user: user.id
        })

        setTodo('');    
    }

    return (
        <form onSubmit={submitHandle}>
            <input type="text" value={todo} onChange={e => setTodo(e.target.value)} placeholder="todo yazın"/>
            <button type="submit" disabled={!todo || !user}>Ekle</button>
        </form>
    )
}

export default AddTodo;