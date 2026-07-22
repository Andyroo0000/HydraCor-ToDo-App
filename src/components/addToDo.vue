<script setup>
import { ref } from 'vue'
import Button from './buttons.vue'

const userData = defineProps({
    todos: Array    
})

const currentTime = new Date().toLocaleString()

const userTask = ref('')

const userNotes = ref('')

const completionStatus = ref('')

const targetDate = ref('')

function addUserData() {
        userData.todos.push({
          task: userTask.value,
          completion: completionStatus.value,
          selected: false,
          timeCreated: currentTime,
          endTme: currentTime,
          targetTime: targetDate,
          notes: userNotes.value,

  })

  userTask.value = ""
  completionStatus.value = ""
  userNotes.value = ""
}

 </script>


<template>
    <form @submit.prevent="addTodo">
        <input v-model="userTask" type="text" class="bg-blue-500 hover:bg-blue-700 text-white rounded" placeholder="Enter a ToDo">
        <select v-model="completionStatus" placeholder="Status">
            <option disabled value="">Select Status</option>
            <option value="Incomplete">Not Done</option>
            <option value="Complete">Done</option>
            <option value="blocked">Blocked</option>
        </select>
        <input v-model="targetDate" type="date" class="bg-blue-500 hover:bg-blue-700 text-white rounded" placeholder="Enter Notes">
        
        <input v-model="userNotes" type="text" class="bg-blue-500 hover:bg-blue-700 text-white rounded" placeholder="Enter Notes">
        <Button @click="addUserData">Add to List</Button>

    </form>
</template>


