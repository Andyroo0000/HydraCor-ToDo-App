<script setup>
import { ref } from 'vue'

const userData = defineProps({
    todos: Array
})
const emit = defineEmits(['select'])

</script>

<template>
    
    <ul>
        <li v-for="userAction in userData.todos" :key="userAction" class="text-black text-center">
            <div class="flex justify-center gap-2">
                <input v-if="userData.todos.length > 0" v-model="userAction.selected" type="checkbox" @click="emit('select', userAction)" class="accent-black">
                <p class="text-black">{{ userAction.task}}</p>
            </div>
        </li>
    </ul>


</template>


