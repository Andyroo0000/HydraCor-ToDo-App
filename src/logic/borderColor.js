export function findBorderColor(todo) {
    if (todo.completion === "Complete"){
        return "border-green-500"
    }
    else if (todo.completion === "Incomplete") {
        return "border-blue-700"
    }
    else if (todo.completion === "Blocked") {
        return "border-red-500"
    }
}