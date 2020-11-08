// Functional Component implementation
import { useState } from 'react';
import TodoItem from './ToDoItem';
import './ToDoList.css'
const ToDoList = () => {
    const [input, setInput] = useState(""); // to get the key input from the user typing
    const [items, setItems] = useState([]); // list of to-dos added in the store

    function addItem(event) {
        setItems(prevData => {
            return [...prevData, input];
        }); // todo list variable updated with setItems
        setInput(""); // clear user input after adding a todo
    }

    function removeItem(id) {
        setItems(prevData => {
            return prevData.filter((item, index) => {
                return index !== id;
            })
        });
    }

    return (
        <div className="todo-list">
            <div className="todo-container">
                <div className="heading">
                    <h1 className="title">To-Do List</h1>
                </div>
                <input
                    type="text"
                    value={input}
                    onChange={(event) => { setInput(event.target.value) }}
                />
                <button onClick={addItem}>Add</button>
                <div className="items">
                    <ul>
                        {items.map((item, index) => (
                            <TodoItem
                                key={index}
                                id={index}
                                item={item}
                                onCheck={removeItem}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default ToDoList;