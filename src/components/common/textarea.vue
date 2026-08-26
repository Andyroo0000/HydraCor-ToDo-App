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
	placeholder: {
		type: String,
		default: '',
	},
	disabled: {
		type: Boolean,
		default: false,
	},
});

const textareaColors = {
	blue: 'bg-white border border-blue-500 text-blue-700 hover:bg-blue-700 hover:text-white focus:ring-2 focus:ring-blue-300 focus:outline-none hover:placeholder:text-white placeholder:text-blue-500',
	gray: 'bg-white border border-gray-500 hover:text-white focus:ring-2 focus:ring-gray-300 focus:outline-none text-gray-700 hover:bg-gray-700',
	green: 'bg-white border border-blue-500 hover:text-white focus:ring-2 focus:ring-blue-300 focus:outline-none text-blue-700 hover:bg-blue-700',
};

const emit = defineEmits(['update:modelValue']);
</script>

<template>
	<div class="flex flex-col gap-1">
		<label :for="props.id">{{ props.label }}</label>

		<textarea
			rows="1"
			:id="props.id"
			:disabled="props.disabled"
			:placeholder="props.placeholder"
			:value="modelValue"
			@input="emit('update:modelValue', $event.target.value)"
			type="text"
			:class="[
				textareaColors[props.color],
				'p-1 text-center rounded min-h-15 transition-all duration-200 hover:scale-102 hover:shadow-md',
			]"
			@keydown.enter.exact.prevent="emit('submit-enter')"
		></textarea>
	</div>
</template>
