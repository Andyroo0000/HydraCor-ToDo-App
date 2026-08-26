<script setup>
import Button from '../common/button.vue';
const emit = defineEmits(['close']);
</script>

<template>
	<div
		class="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-4"
	>
		<div class="bg-white rounded-2xl shadow-xl p-6 w-full max-w-xl mr-4 h-125">
			<h1 class="text-2xl font-bold text-blue-600 mb-6 text-center">
				Edit Page
			</h1>
			<div class="mt-6 flex justify-center gap-4">
				<Button class="text-white" type="submit">Confirm</Button>
				<Button class="text-white" color="red" @click="emit('close')"
					>Cancel</Button
				>
			</div>
		</div>
	</div>
</template>
