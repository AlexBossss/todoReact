import TodoList from "./componets/TodoList";
import React from 'react'
import Context from "./context";
import InputField from "./componets/InputField";

function App() {

    const [todos, setTodos] = React.useState([
        {id: 1, checked: false, value: "Buy house"},
        {id: 2, checked: false, value: "Buy car"},
        {id: 3, checked: false, value: "Buy milk"}
    ]);

    function toggleTodo(id) {
        setTodos(todos.map(item => {
            if (item.id === id) {
                item.checked = !item.checked
            }
            return item
        }))
    }

    function removeTodo(id) {
        setTodos(todos.filter(item => item.id !== id))
    }

    function addTodo(title) {
        setTodos(todos.concat([
            {
                id: Date.now(),
                checked: false,
                value: title
            }
        ]))
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <div className="wrapper">
                <h2>ToDoList React App Tutorial</h2>
                <InputField onCreate={addTodo}/>
                <TodoList
                    todos={todos}
                    onToggle={toggleTodo}
                />
            </div>
        </Context.Provider>

    );
}

export default App;
