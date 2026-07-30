export function addNewUserData(todos, userTask, completionStatus, currentTime, targetDate, userNotes) {
    console.log(userTask.value)
    console.log(completionStatus.value)
    console.log(targetDate.value)
    console.log(userNotes.value)
    
    todos.push({
            task: userTask,
            completion: completionStatus,
            selected: false,
            timeCreated: currentTime,
            endTime: currentTime,
            targetTime: targetDate,
            notes: userNotes,
            isEditing: true,

    })

  userTask.value = ""
  completionStatus.value = ""
  userNotes.value = ""
  targetDate.value = ""
}