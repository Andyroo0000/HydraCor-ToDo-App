<script setup>
import Button from '../common/button.vue'
const userData = defineProps({
  todos: Array,
  task: Object,
})

const emit = defineEmits(['close'])
</script>

<template>
  <div
    class="bg-gray-200 min-h-screen flex justify-center items-start pt-10 px-4"
  >
    <div class="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md mr-4">
      <h1 class="text-2xl font-bold text-blue-600 mb-6 text-center">
        Viewing Page
      </h1>

      <div class="space-y-3 text-gray-700">
        <div>
          <span class="font-semibold">Name:</span>
          <p>{{ userData.task.task }}</p>
        </div>

        <div>
          <span class="font-semibold">Completion:</span>
          <p>{{ userData.task.completion }}</p>
        </div>

        <div>
          <span class="font-semibold">Notes:</span>
          <p>{{ userData.task.notes }}</p>
        </div>

        <div>
          <span class="font-semibold">Date Created:</span>
          <p>{{ userData.task.timeCreated }}</p>
        </div>

        <div>
          <span class="font-semibold">Target Date:</span>
          <p>{{ userData.task.targetTime }}</p>
        </div>

        <div>
          <span class="font-semibold">End Date:</span>
          <p>{{ userData.task.endTime }}</p>
        </div>
      </div>
      <div class="mt-6 flex justify-center gap-4">
        <Button color="blue" class="text-white" @click="emit('close')"
          >Close</Button
        >
      </div>
    </div>
  </div>
</template>
