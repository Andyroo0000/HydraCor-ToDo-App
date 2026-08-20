export function addNewUserData(
    todos,
    userTask,
    completionStatus,
    currentTime,
    targetDate,
    userNotes
) {
    let checkEditing = true
    if (completionStatus === "Complete" || completionStatus === "Blocked") {
        checkEditing = false
    }
    todos.push({
        task: userTask,
        completion: completionStatus,
        selected: false,
        timeCreated: currentTime,
        endTime: 'TBD',
        targetTime: targetDate,
        notes: userNotes,
        isEditing: checkEditing,
        isViewing: false,
        progressToDo: "",
        all: "all"
    })

    userTask = ''
    completionStatus = ''
    targetDate = ''
    userNotes = ''
}
