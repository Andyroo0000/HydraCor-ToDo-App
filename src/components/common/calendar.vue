<script setup>
const props = defineProps({
	color: {
		type: String,
		default: 'blue',
	},
	modelValue: {
		type: String,
		default: '',
	},
	label: {
		type: String,
		default: '',
	},
	id: {
		type: String,
		default: '',
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	required: {
		type: Boolean,
		default: false,
	},
});

const dateColors = {
	blue: 'bg-white border border-blue-500 text-blue-700 hover:bg-blue-700 hover:text-white focus:ring-2 focus:ring-blue-300 focus:outline-none hover:placeholder:text-white placeholder:text-blue-500',
	gray: 'bg-gray-500 hover:bg-gray-700',
	green: 'bg-white border border-blue-500 text-blue-700 hover:bg-blue-700 hover:text-white focus:ring-2 focus:ring-blue-300 focus:outline-none',
};

const emit = defineEmits(['update:modelValue']);
</script>

<template>
	<div class="flex flex-col gap-1">
		<label :for="props.id">{{ props.label }}</label>

		<input
			:value="props.modelValue"
			:required="props.required"
			:id="props.id"
			:disabled="props.disabled"
			@input="emit('update:modelValue', $event.target.value)"
			type="date"
			:class="[
				dateColors[props.color],
				'p-1 text-center w-29 rounded transition-all duration-200 hover:scale-105 hover:shadow-md',
			]"
		/>
	</div>
</template>
