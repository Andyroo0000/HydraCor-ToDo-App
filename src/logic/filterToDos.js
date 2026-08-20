export function filterToDos(filterName, todoList) {

    return computed(() => todoList.filter(todo => todo[filterName.value.attribute] === filterName.value.value))
     

}