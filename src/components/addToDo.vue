<script setup>
import { ref } from 'vue'
import Button from './General UI/button.vue'
import { addNewUserData } from '../logic/addUserData.js'
import { deleteAllTodos } from '../logic/deleteAllToDos.js'
import calendar from './General UI/calendar.vue'
import dropDown from './General UI/dropDown.vue/index.js'
import textBox from './General UI/textBox.vue/index.js'
import Textarea from './General UI/textarea.vue/index.js'

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
        <div class="flex flex-wrap justify-between gap-4 items-center">
            <textBox v-model="userTask" placeholder="Enter ToDo" class="text-white w-23"></textBox>
            <dropDown v-model="completionStatus"></dropDown>
            <calendar v-model="targetDate"></calendar>
            <Textarea v-model="userNotes" class="text-white w-48 h-10" placeholder="Enter Notes"></Textarea>
            <Button class="text-white" @click="addNewUserData(userData.todos, userTask, completionStatus, currentTime, targetDate, userNotes)">Add to List</Button>
            <Button class="text-white" @click="deleteAllTodos(userData.todos)" color="red">Delete All ToDos</Button>
        </div>
    </form>
</template>


