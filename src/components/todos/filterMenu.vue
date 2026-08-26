<script setup>
defineProps({
	modelValue: Object,
	options: Array,
});
const emit = defineEmits(['update:modelValue']);
</script>

<template>
	<div class="bg-white rounded-2xl shadow-lg p-4">
		<p class="text-lg mb-2">Filter</p>
		<div class="flex gap-2 flex-wrap">
			<button
				v-for="option in options"
				:key="option.label"
				@click="emit('update:modelValue', option.value)"
				:class="[
					'px-3 py-1 rounded-full text-sm',
					modelValue.value === option.value.value
						? 'bg-blue-500 text-white'
						: 'bg-gray-200 text-gray-700',
				]"
			>
				{{ option.label }}
			</button>
		</div>
	</div>
</template>
