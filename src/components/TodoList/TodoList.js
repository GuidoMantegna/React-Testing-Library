import React from 'react'
import TodoFooter from '../TodoFooter/TodoFooter'
import "./TodoList.css"
import { calcNumberOfIncompletedTasks, deletTask, updateTask } from '../../utils/todos'

function TodoList({
    todos, setTodos
}) {

    return (
        <div className="todolist-container">
            <div className="todos-container">
                <div>
                    {
                        todos.map((todo, index) => (
                            <div 
                                className={`todo-item ${todo.completed && "todo-item-active"}`} 
                                key={todo.id}
                                >
                                <p> {todo.task} </p>
                                <div className="todo-actions">
                                    <img 
                                    src="https://icongr.am/entypo/check.svg?size=20&color=505035"
                                    className="check-btn" 
                                    // onClick={() => updateTask(todo.id)}
                                    onClick={() => setTodos(updateTask(todo.id, todos))} 
                                    />
                                    <img 
                                    src="https://icongr.am/entypo/edit.svg?size=20&color=505035"
                                    className="edit-btn" 
                                    />
                                    <img 
                                    src="https://icongr.am/entypo/trash.svg?size=20&color=505035"
                                    className="delete-btn"
                                    onClick={() => setTodos(deletTask(todo.id, todos))} 
                                    />
                                </div>    
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <TodoFooter 
                    numberOfIncompleteTasks={calcNumberOfIncompletedTasks(todos)}
                />
            </div>
        </div>
    )
}

export default TodoList
