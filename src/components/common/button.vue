<script setup>
const props = defineProps({
	color: {
		type: String,
		default: 'blue',
	},
	type: {
		type: String,
		default: 'button',
	},
});

const buttonColors = {
	red: 'text-red-500 border border-red-500 hover:bg-red-700 hover:text-white placeholder:text-red-700',
	blue: 'text-blue-500 border border-blue-500 hover:bg-blue-700 hover:text-white placeholder:text-blue-700',
	menu: 'hover:bg-gray-100',
};
</script>

<template>
	<div class="flex flex-col gap-1">
		<button
			:type="props.type"
			:class="[
				buttonColors[props.color],
				'p-2 text-center rounded-full transition-all duration-200 hover:scale-105 hover:shadow-md',
			]"
		>
			<slot></slot>
		</button>
	</div>
</template>
