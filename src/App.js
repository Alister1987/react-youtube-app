import React, {useState} from 'react';
import TodoList from "./Todo/TodoList";
import Context from "./context";

function App() {
    const [todos, setTodos] = useState([
        {id: 1, completed: false, title: 'Buy bred'},
        {id: 2, completed: true, title: 'Buy butter'},
        {id: 3, completed: false, title: 'Buy milk'},
    ]);

    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if (id === todo.id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <div className="wrapper">
                <h1>Tutorials</h1>
                <TodoList todos={todos} onToggle={toggleTodo}/>
            </div>
        </Context.Provider>
    );
}

export default App;
