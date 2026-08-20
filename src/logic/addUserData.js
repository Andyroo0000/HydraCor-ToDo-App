export function addNewUserData(
    todos,
    userTask,
    completionStatus,
    currentTime,
    targetDate,
    userNotes
) {
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
        progressToDo: "",
        all: "all"
    })

    userTask = ''
    completionStatus = ''
    targetDate = ''
    userNotes = ''
}
