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
	required: {
		type: Boolean,
		default: false,
	},
});

const textColors = {
	blue: 'bg-white border border-blue-500 text-blue-700 hover:bg-blue-700 hover:text-white focus:ring-2 focus:ring-blue-300 focus:outline-none hover:placeholder:text-white placeholder:text-blue-500',
	gray: 'bg-white border border-gray-500 hover:text-white focus:ring-2 focus:ring-gray-300 focus:outline-none text-gray-700 hover:bg-gray-700',
	green: 'bg-white border border-blue-500 hover:text-white focus:ring-2 focus:ring-blue-300 focus:outline-none text-blue-700 hover:bg-blue-700',
};

const emit = defineEmits(['update:modelValue']);
</script>

<template>
	<div class="flex flex-col gap-1">
		<label :for="props.id">{{ props.label }}</label>

		<input
			:value="props.modelValue"
			:required="props.required"
			:disabled="props.disabled"
			:placeholder="props.placeholder"
			:id="props.id"
			@input="emit('update:modelValue', $event.target.value)"
			type="text"
			:class="[
				textColors[props.color],
				'p-1 text-center w-40 rounded transition-all duration-200 hover:scale-105 hover:shadow-md',
			]"
		/>
	</div>
</template>
