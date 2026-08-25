export function searchFunction(todos, search) {
  const searchedList = []

  if (!search) {
    return todos
  } else {
    for (const todo of todos) {
      if (todo.task.toLowerCase().includes(search.toLowerCase())) {
        searchedList.push(todo)
      }
    }
    return searchedList
  }
}
