export function dueDateCalculator(todo) {
	const due = new Date(todo.targetTime);
	const dateNow = new Date();
	const timeDifference = (due - dateNow) / 1000 / 60 / 60;

	if (todo.completion === 'Complete') {
		return {
			showPill: true,
			placeholder: 'Completed',
			color: 'bg-green-500',
		};
	} else if (todo.completion === 'Blocked') {
		return {
			showPill: true,
			placeholder: 'Blocked',
			color: 'bg-red-500',
		};
	} else if (timeDifference < 48 && timeDifference > 0) {
		return {
			showPill: true,
			placeholder: 'Almost Due',
			color: 'bg-yellow-500',
		};
	} else if (timeDifference < 48 && timeDifference <= 0) {
		return {
			showPill: true,
			placeholder: 'Late',
			color: 'bg-red-700',
		};
	} else {
		return {
			showPill: true,
			placeholder: 'In Progress',
			color: 'bg-blue-700',
		};
	}
}
