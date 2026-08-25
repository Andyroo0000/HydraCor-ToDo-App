export function addNewUserData(
	todos,
	userTask,
	completionStatus,
	currentTime,
	targetDate,
	userNotes,
) {
	let checkEditing = true;
	let progressColor = '';

	if (completionStatus === 'Complete') {
		checkEditing = false;
		progressColor = 'green';
	} else if (completionStatus === 'Blocked') {
		checkEditing = false;
		progressColor = 'gray';
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
		progressToDo: progressColor,
		all: 'all',
	});

	userTask = '';
	completionStatus = '';
	targetDate = '';
	userNotes = '';
}
