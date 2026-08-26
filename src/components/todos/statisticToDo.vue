<script setup>
import { computed } from 'vue';

const props = defineProps({
	todos: {
		type: Array,
		default: () => [],
	},
});

const total = computed(() => props.todos.length);
const countCompleted = computed(
	() => props.todos.filter((t) => t.completion === 'Complete').length,
);
const countBlocked = computed(
	() => props.todos.filter((t) => t.completion === 'Blocked').length,
);
const countIncomplete = computed(
	() =>
		props.todos.filter((t) => t.completion === 'Incomplete' || !t.completion)
			.length,
);

const percentage = computed(() =>
	total.value === 0
		? 0
		: Math.round((countCompleted.value / total.value) * 100),
);

const radius = 40;
const stroke = 8;
const circumference = 2 * Math.PI * radius;
const progress = computed(() => (percentage.value / 100) * circumference);
</script>

<template>
	<div class="bg-white rounded-2xl shadow-lg p-6 w-85">
		<div class="flex items-center justify-between mb-4">
			<p class="font-bold text-lg">Statistics</p>
			<p class="text-sm text-gray-600">{{ total }} tasks</p>
		</div>

		<div class="flex items-center gap-4">
			<div class="w-28 h-28 flex items-center justify-center">
				<svg
					:width="radius * 2 + stroke"
					:height="radius * 2 + stroke"
					viewBox="0 0 100 100"
				>
					<g transform="translate(50,50)">
						<circle
							r="40"
							:stroke-width="stroke"
							stroke="#e5e7eb"
							fill="transparent"
						></circle>
						<circle
							r="40"
							:stroke-width="stroke"
							stroke="#3b82f6"
							fill="transparent"
							stroke-linecap="round"
							:stroke-dasharray="circumference"
							:stroke-dashoffset="circumference - progress"
							transform="rotate(-90)"
						></circle>
						<text
							x="0"
							y="5"
							text-anchor="middle"
							fill="#111827"
							class="font-bold"
						>
							{{ percentage }}%
						</text>
					</g>
				</svg>
			</div>

			<div class="flex-1">
				<div class="flex items-center justify-between">
					<span class="text-sm">Completed</span>
					<span class="font-semibold">{{ countCompleted }}</span>
				</div>
				<div class="flex items-center justify-between">
					<span class="text-sm">Blocked</span>
					<span class="font-semibold">{{ countBlocked }}</span>
				</div>
				<div class="flex items-center justify-between">
					<span class="text-sm">Incomplete</span>
					<span class="font-semibold">{{ countIncomplete }}</span>
				</div>
			</div>
		</div>
	</div>
</template>
