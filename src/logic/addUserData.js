export function addNewUserData(todos, userTask, completionStatus, currentTime, targetDate, userNotes) {
    
    todos.push({
            task: userTask,
            completion: completionStatus,
            selected: false,
            timeCreated: currentTime,
            endTime: 'TBD',
            targetTime: targetDate,
            notes: userNotes,
            isEditing: true,
            isViewing: false,

    })
  console.log(userTask)
  console.log(completionStatus)
  console.log(targetDate)
  console.log(userNotes)
  userTask = ""
  completionStatus = ""
  userNotes = ""
  targetDate = ""

  console.log(userTask)
  console.log(completionStatus)
  console.log(targetDate)
  console.log(userNotes)
}