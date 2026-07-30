<script setup>
import { ref } from 'vue'
import Button from './button.vue'
import { addNewUserData } from '../logic/addUserData.js'
import { deleteAllTodos } from '../logic/deleteAllToDos.js'
import calendar from './calendar.vue'
import dropDown from './dropDown.vue'
import textBox from './textBox.vue'
import Textarea from './textarea.vue'

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
    <form @submit.prevent="">
        <div class="justify-between flex gap-x-4 items-center">
            <textBox v-model="userTask" placeholder="Enter ToDo" class="w-23"></textBox>
            <dropDown v-model="completionStatus"></dropDown>
            <calendar v-model="targetDate"></calendar>
            <Textarea v-model="userNotes" placeholder="Enter Notes"></Textarea>
            <Button class="text-white" @click="addNewUserData(userData.todos, userTask, completionStatus, currentTime, targetDate, userNotes)">Add to List</Button>
            <Button class="text-white" @click="deleteAllTodos(userData.todos)" color="red">Delete All ToDos</Button>
        </div>
    </form>
</template>


