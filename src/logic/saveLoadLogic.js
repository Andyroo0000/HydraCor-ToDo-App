export function saveToDos(userData) {
  localStorage.setItem("todos", JSON.stringify(userData))
  }

export function loadToDos(userData) {
  const savedTodos = localStorage.getItem("todos")

  if (savedTodos) {
    userData.push(...JSON.parse(savedTodos))
  }
}