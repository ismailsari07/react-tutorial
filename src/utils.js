import store from "./stores";
import { logIn, logOut } from "./stores/auth";
import { openModal } from "./stores/modal";
import { addTodo } from "./stores/todo";

export const addTodoHandle = todo => {
    store.dispatch(addTodo(todo));
}

export const logInHandle = user => {
    store.dispatch(logIn(user));
}

export const logOutHandle = () => {
    store.dispatch(logOut());
}

export const openThatModal = (name, data) => {
    store.dispatch(openModal(
        {name, data}
    ))
}