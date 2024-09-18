import React from 'react'
import { ITodo } from '../interfaces'
import './TodoList.css'

interface TodoListProps {
    todos: ITodo[],
    onClickDelete: (id: number) => void

}

const TodoList: React.FC<TodoListProps> = ({ todos, onClickDelete }) => {
    if (!todos.length) {
        return <p className='center'>No todos</p>
    }
    
    return (
        <ul>
            {todos.map((todo) => {
                return (
                    <li key={todo.id} className='todo'>
                        <label className='todo__label' htmlFor="">
                            <span>{todo.title}</span>
                            <i onClick={() => onClickDelete(todo.id)} className='red-text'>Delete</i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}

export default TodoList