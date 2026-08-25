export function deleteUserData(task, todos) {
  const index = todos.findIndex((todo) => todo === task);

  if (index !== -1) {
    todos.splice(index, 1);
    task.selected = false;
    return true;
  } else {
    return false;
  }
}
