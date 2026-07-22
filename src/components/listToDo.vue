<script setup>
import changeStatusToDo from './changeStatusToDo.vue';
import deleteToDo from './deleteToDo.vue';
import { ref } from 'vue'
import Checkbox from './checkbox.vue';
import panelToDo from './panelToDo.vue';

const userData = defineProps({
    todos: Array
})



</script>

<template>
    
    <ul>
        <li v-for="userAction in userData.todos" :key="userAction" class="text-black text-center">
            <div class="flex justify-center gap-2">
                <input v-model="userAction.selected" type="checkbox" class="accent-black">
                <p class="text-black">{{ userAction.task }}</p>
            </div>
            <panelToDo :todos="userData.todos" :task="userAction" v-if="userAction.selected"></panelToDo>
        </li>
    </ul>


</template>
