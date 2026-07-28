<script setup>
import { ref } from 'vue'
import deleteToDo from './deleteToDo.vue';
import TimeEndToDo from './timeEndToDo.vue';

const userData = defineProps({
    todos: Array,
    task: Array,
})


</script>

<template>
    <div class="bg-gray-100 flex items-top justify-center pt-8">
        <deleteToDo :todos="userData.todos" :task="userData.task"></deleteToDo>
        <p> {{"Time Created: " + userData.task.timeCreated + "Notes: " + userData.task.notes }}</p>
        <TimeEndToDo :todos="userData.todos" :task="userData.task "></TimeEndToDo>
        

    </div>

</template>
