export const calcNumberOfIncompletedTasks = (todos) => {
    let count = 0;
    todos.forEach(todo => {
        if(!todo.completed) count++
    })
    return count
}

export const deletTask = (id, arr) => {
    return arr.filter(item => item.id !== id)
}

export const updateTask = (id, arr) => {
    return arr.map(item => {
        if(item.id === id) item.completed = !item.completed
        return item
    })
}