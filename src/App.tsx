import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import { ITodo } from './components/interfaces';

const App: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todosList") || "[]")

        
        if (!todos.length && storedTodos.length) {
            setTodos(storedTodos);
        } else {
            localStorage.setItem("todosList", JSON.stringify(todos));
        }
    }, [todos])
    

    const onClickAdd = (title: string) => {
        const newTodo = {
            title,
            id: Date.now(),
            completed: false,
        }
        setTodos(prev => [newTodo, ...todos]);
    }

    const onClickDelete = (id: number) => {
        const newTodosList = todos.filter((todo) => {
            return todo.id !== id
        })

        const shoudDelete = window.confirm("Are you sure you want to delete this task?")
        if (shoudDelete) {
            setTodos(newTodosList)
        }
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <TodoForm onClickAdd={onClickAdd} />

                <TodoList todos={todos} onClickDelete={onClickDelete} />
            </div>
        </div>
    );
}

export default App;
