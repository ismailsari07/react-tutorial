import { useState } from "react";
import Header from "./todo/header";
import TodoList from "./todo/list";
import AddTodo from "./todo/add";
import Modal from "./todo/modal";
import { useDispatch, useSelector } from "react-redux";

function App() {

    const {isOpen} = useSelector(state => state.modal)
    const [language, setLanguage] = useState("tr");
    const [dark, setDark] = useState(true);

    return (
        <main style={{padding: "15px"}}>
            {isOpen && <Modal />}
            <Header/>
            <hr/>
            <AddTodo/>
            <TodoList/>
        </main>
    );
}

export default App;