// export function findBorderColor(todo) {
//     if (todo.completion === "Complete"){
//         return "border-green-500"
//     }
//     else if (todo.completion === "Incomplete") {
//         return "border-blue-700"
//     }
//     else if (todo.completion === "Blocked") {
//         return "border-red-500"
//     }
// }

export function findBorderColor(todo) {
  const due = new Date(todo.targetTime);
  const dateNow = new Date();
  const timeDifference = (due - dateNow) / 1000 / 60 / 60;

  if (todo.completion === "Complete") {
    return "border-green-500";
  } else if (todo.completion === "Blocked") {
    return "border-red-500";
  } else if (timeDifference < 48 && timeDifference > 0) {
    return "border-yellow-500";
  } else if (timeDifference < 48 && timeDifference <= 0) {
    return "border-red-700";
  } else {
    return "border-blue-500";
  }
}
