import { useState } from "react"
import { useDispatch } from "react-redux"
import {editTodo} from "../stores/todo"

export default function EditTodo({close, data}) {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState(data.title)
    const [done, setDone] = useState(data.done)

    const submitHandle = e => {
        e.preventDefault();

        dispatch(editTodo({
            id: data.id,
            title: todo,
            done
        }))
        close()
    }

    return (
        <div>
            <form onSubmit={submitHandle}>
                <input type="text" value={todo} onChange={e => setTodo(e.target.value)}/><br/>
                <label>
                    <input type="checkbox" checked={done} onChange={e => setDone(e.target.checked)}/>
                    Tamamlandı Olarak Işaretle
                </label>
                <button type="submit">Kaydet</button>
            </form>
            <button onClick={close}>Kapat</button>
        </div>
    )
}