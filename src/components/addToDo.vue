<script setup>
import { ref } from 'vue'
import Button from './button.vue'
import { addNewUserData } from '../logic/addUserData.js'
import { deleteAllTodos } from '../logic/deleteAllToDos.js'

const userData = defineProps({
    todos: Array
})

const currentTime = new Date().toLocaleString()

const userTask = ref('')

const userNotes = ref('')

const completionStatus = ref('')

const targetDate = ref('')

</script>


<template>
    <form @submit.prevent="addTodo">
        <div class="justify-between flex gap-x-4 items-center">
            <input v-model="userTask" type="text" class="bg-blue-500 hover:bg-blue-700 text-white rounded w-25 px-1" placeholder="Enter a ToDo">
            <select v-model="completionStatus" placeholder="Status" class="bg-blue-500 hover:bg-blue-700 text-white rounded w-25">
                <option disabled value="">Select Status</option>
                <option value="Incomplete">Not Done</option>
                <option value="Complete">Done</option>
                <option value="Blocked">Blocked</option>
            </select>
            <input v-model="targetDate" type="date" class="bg-blue-500 hover:bg-blue-700 text-white rounded" placeholder="Enter Notes">
            
            <input v-model="userNotes" type="text" class="bg-blue-500 hover:bg-blue-700 text-white rounded w-25" placeholder="Enter Notes">
            <!-- <Button @click="addNewUserData(userData.todos, userTask, completionStatus, currentTime, targetDate, userNotes)">Add to List</Button> -->

<Button @click="() => addNewUserData(userData.todos, userTask, completionStatus, currentTime, targetDate, userNotes)">
    Add to List
</Button>
<Button @click="deleteAllTodos(userData.todos)">Delete All ToDos</Button>

        </div>
    </form>
</template>


