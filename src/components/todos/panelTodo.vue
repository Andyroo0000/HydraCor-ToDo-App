<script setup>
import { ref, watch } from 'vue'
import { deleteUserData } from '../../logic/deleteLogic.js'
import { replaceUserData } from '../../logic/replaceUserData.js'
import Button from '../common/button.vue'
import calendar from '../common/calendar.vue'
import dropDown from '../common/dropDown.vue'
import textBox from '../common/textBox.vue'
import Textarea from '../common/textarea.vue'

const userData = defineProps({
  todos: Array,
  task: Object,
  panel: String,
})

const currentTime = new Date().toLocaleString()

const emit = defineEmits(['close'])

const endDate = ref('TBD')

const newTask = ref('')

const newCompletion = ref('')

const newNotes = ref('')

const newTargetTime = ref('')

const dropDownOptionsStatus = [
  {
    value: 'Incomplete',
    label: 'Not Done',
  },
  {
    value: 'Complete',
    label: 'Done',
  },
  {
    value: 'Blocked',
    label: 'Blocked',
  },
]
</script>

<template>
  <div class="bg-white rounded-2xl shadow-xl p-6 w-full max-w-xl mr-4">
    <h1 class="text-2xl font-bold text-blue-600 mb-6 text-center">Edit Page</h1>

    <form
      @submit.prevent="
        replaceUserData(
          newTask,
          userData.task,
          newTargetTime,
          newNotes,
          newCompletion,
          currentTime,
        )
      "
    >
      <div class="space-y-3 text-gray-700">
        <p>
          <span class="font-semibold text-black-500">New Name:</span>
          <textBox
            v-model="newTask"
            required
            placeholder="New Task Name"
            v-if="userData.task.isEditing"
            class="w-32"
          ></textBox>
          <textBox
            v-else
            v-model="newTask"
            placeholder="New Task Name"
            :color="userData.task.progressToDo"
            :disabled="true"
            class="w-32"
          ></textBox>
        </p>

        <p>
          <span class="font-semibold">New Completion:</span>
          <dropDown
            v-if="userData.task.isEditing"
            required
            v-model="newCompletion"
            id="dropDownStatus"
            placeholder="Select One"
            :options="dropDownOptionsStatus"
          ></dropDown>
          <dropDown
            v-else
            v-model="newCompletion"
            id="dropDownStatus"
            placeholder="Select One"
            :options="dropDownOptionsStatus"
          ></dropDown>
        </p>

        <p>
          <span class="font-semibold">New Target Date:</span>
          <calendar
            v-model="newTargetTime"
            v-if="userData.task.isEditing"
            placeholder="New Target Date"
          ></calendar>
          <calendar
            v-model="newTargetTime"
            v-else
            placeholder="New Target Date"
            :color="userData.task.progressToDo"
            :disabled="true"
          ></calendar>
        </p>

        <p>
          <span class="font-semibold">New Notes:</span>
          <Textarea
            v-if="userData.task.isEditing"
            placeholder="New Notes"
            v-model="newNotes"
            class=""
          ></Textarea>
          <Textarea
            v-else
            placeholder="New Notes"
            v-model="newNotes"
            :color="userData.task.progressToDo"
            :disabled="true"
          ></Textarea>
        </p>
      </div>

      <div class="mt-6 flex justify-center gap-4">
        <Button class="text-white" type="submit">Confirm Edits</Button>
        <Button class="text-white" color="red" @click="emit('close')"
          >Cancel</Button
        >
      </div>
    </form>
  </div>
</template>
