<script setup>
import { computed } from 'vue';

const props = defineProps({
	todos: {
		type: Array,
		default: () => [],
	},
});

const total = computed(() => props.todos.length);
const countCompleted = computed(() =>
	props.todos.filter((t) => t.completion === 'Complete').length,
);
const countBlocked = computed(() =>
	props.todos.filter((t) => t.completion === 'Blocked').length,
);
const countIncomplete = computed(() =>
	props.todos.filter((t) => t.completion === 'Incomplete' || !t.completion)
		.length,
);

const percentage = computed(() =>
	total.value === 0 ? 0 : Math.round((countCompleted.value / total.value) * 100),
);

const radius = 40;
const stroke = 8;
const circumference = 2 * Math.PI * radius;
const progress = computed(() => (percentage.value / 100) * circumference);
</script>

<template>
	<div class="bg-white rounded-2xl shadow-lg p-6 w-72">
		<div class="flex items-center justify-between mb-4">
			<p class="font-bold text-lg">Statistics</p>
			<p class="text-sm text-gray-600">{{ total }} tasks</p>
		</div>

		<div class="flex items-center gap-4">
			<div class="w-28 h-28 flex items-center justify-center">
				<svg :width="radius * 2 + stroke" :height="radius * 2 + stroke" viewBox="0 0 100 100">
					<g transform="translate(50,50)">
						<circle r="40" :stroke-width="stroke" stroke="#e5e7eb" fill="transparent"></circle>
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
						<text x="0" y="5" text-anchor="middle" fill="#111827" class="font-bold">{{ percentage }}%</text>
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

<!-- <script setup>

import { Doughnut } from 'vue-chartjs'
import { computed } from 'vue'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, DoughnutController, CategoryScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, DoughnutController, CategoryScale)


const userData = defineProps({
    todos: Array
});


const amountCompleted = computed(
	() => userData.todos.filter((todo) => todo.completion === 'Complete').length,
);

const amountBlocked = computed(
	() => userData.todos.filter((todo) => todo.completion === 'Blocked').length,
);
const amountIncomplete = computed(
	() => userData.todos.filter((todo) => todo.completion === 'Incomplete' || !todo.completion).length,
);


const chartData = computed(() => ({
    labels: ['Completed', 'Blocked', 'Incomplete'],
    datasets: [
        {
            label: 'To-Do Statistics',
            data: [amountCompleted.value, amountBlocked.value, amountIncomplete.value],
            backgroundColor: ['#4ade80', '#f87171', '#3B82F6'],
            borderColor: '#ffffff',
            borderWidth: 2,
            hoverOffset: 8,
        },
    ],
}))

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '65%',
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                usePointStyle: true,
                boxWidth: 8,
                padding: 16,
                font: { size: 12 },
                generateLabels: (chart) => {
                    const data = chart.data
                    const total = data.datasets[0].data.reduce((a, b) => a + b, 0)
                    return data.labels.map((label, i) => {
                        const value = data.datasets[0].data[i]
                        const pct = total === 0 ? 0 : Math.round((value / total) * 100)
                        const meta = chart.getDatasetMeta(0)
                        const isHidden = meta.data[i]?.hidden ?? false
                        return {
                            text: `${label}: ${value} (${pct}%)`,
                            fillStyle: data.datasets[0].backgroundColor[i],
                            strokeStyle: data.datasets[0].backgroundColor[i],
                            hidden: isHidden,
                            index: i,
                        }
                    })
                },
            },
        },
        title: {
            display: true,
            text: 'To-Do Statistics',
            font: { size: 14, weight: 'bold' },
            padding: { bottom: 12 },
        },
        tooltip: {
            callbacks: {
                label: (ctx) => {
                    const total = ctx.dataset.data.reduce((a, b) => a + b, 0)
                    const value = ctx.parsed
                    const pct = total === 0 ? 0 : Math.round((value / total) * 100)
                    return ` ${ctx.label}: ${value}/${total} (${pct}%)`
                },
            },  
},
    },
}
</script>

<template>
	<div class="bg-white rounded-2xl shadow-lg p-6 w-72">
        <Doughnut :data="chartData" :options="chartOptions" />
    </div>


</template> -->