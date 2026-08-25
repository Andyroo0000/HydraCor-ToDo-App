export function replaceUserData(
  newTask,
  task,
  newTargetTime,
  newNotes,
  newCompletion,
  currentTime,
) {
  if (newTask) {
    task.task = newTask;
  }

  if (newTargetTime) {
    task.targetTime = newTargetTime;
  }

  if (newNotes) {
    task.notes = newNotes;
  }

  if (newCompletion) {
    task.completion = newCompletion;
  }
  if (task.completion === "Blocked") {
    task.isEditing = false;
    task.endTime = currentTime;
    task.progressToDo = "gray";
  } else if (task.completion === "Complete") {
    task.isEditing = false;
    task.endTime = currentTime;
    task.progressToDo = "green";
  } else {
    task.isEditing = true;
    task.endTime = "TBD";
  }
}
