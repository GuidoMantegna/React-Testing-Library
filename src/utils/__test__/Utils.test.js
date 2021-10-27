import { calcNumberOfIncompletedTasks, deletTask, updateTask } from "../todos";


describe('Todos Functions', () => {

    test('Check the number of incompletes todos', () => {
        const todos = [
            {task: "Buy bread", completed: true},
            {task: "Go Grocery Shopping", completed: false}
        ]
        expect(calcNumberOfIncompletedTasks(todos)).toBe(1)
    })

    test('If there is not tasks in the array', () => {
        const todos = []
        expect(calcNumberOfIncompletedTasks(todos)).toBe(0)
    })

    test('If there is not uncompleted tasks', () => {
        const todos = [
            {task: "Buy bread", completed: true},
            {task: "Go Grocery Shopping", completed: true}
        ]
        expect(calcNumberOfIncompletedTasks(todos)).toBe(0)
    })

    test('Delete Tasks', () => {
        const todos = [
            {task: "Buy bread", id: 34},
            {task: "Go Grocery Shopping", id: 73},
            {task: "Pay the taxes", id: 2},
        ];
        const expected = [
            {task: "Go Grocery Shopping", id: 73},
            {task: "Pay the taxes", id: 2},
        ];
        
        expect(deletTask(34, todos)).toEqual(expect.arrayContaining(expected))
    })

    test('Update Tasks', () => {
        const todos = [
            {task: "Buy bread", completed: true, id: 73},
            {task: "Go Grocery Shopping", completed: false, id: 34}
        ];
        const expected = [
            {task: "Buy bread", completed: true, id: 73},
            {task: "Go Grocery Shopping", completed: true, id: 34}
        ];
        
        expect(updateTask(34, todos)).toEqual(expect.arrayContaining(expected))
    })
})