export function searchFunction(todos, search) {
    const searchedList = []
    
    if (!search) {
        return todos
    }
    else {

    for (const todo of todos) {
        if (todo.task.includes(search)) {
            searchedList.push(todo)
            }
        }
    
        return searchedList
    }

}