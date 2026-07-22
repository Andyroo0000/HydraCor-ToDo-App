<script setup>
import { ref } from 'vue'
import Button from './buttons.vue'

const userData = defineProps({
    todos: Array    
})

const userTask = ref('')

const completionStatus = ref('')

function addUserData() {
        userData.todos.push({
          task: userTask.value,
          completion: completionStatus.value,
  })

  userTask.value = ""
  completionStatus.value = ""
}

 </script>


<template>
    <form @submit.prevent="addTodo">
        <input v-model="userTask" type="text" class="bg-blue-500 hover:bg-blue-700 text-white rounded" placeholder="Enter a ToDo">
        <input v-model="completionStatus" type="text" class="bg-blue-500 hover:bg-blue-700 text-white rounded" placeholder="Enter a ToDo">
        <Button @click="addUserData">Add to List</Button>

    </form>
</template>


