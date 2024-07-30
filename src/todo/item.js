import { useDispatch, useSelector } from "react-redux"
import { deleteTodo } from "../stores/todo"
import { openThatModal } from "../utils";

function TodoItem({todo}) {
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth)

    const deleteHandle = () => {
        dispatch(deleteTodo(todo.id))
    }

    const editHandle = () => {
        openThatModal("edit-todo", todo)
    }

    return (
        <li>
            <span style={{textDecoration: todo.done ? 'line-through' : false}}>
                {todo.title} - {todo.user} {"=========>"}
            </span>
            {user.id === todo.user && (
                <>
                    <button onClick={editHandle}>Düzenle</button>
                    <button onClick={deleteHandle}>Sil</button>
                </>
            )}
        </li>
    )
}

export default TodoItem;