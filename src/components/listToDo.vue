<script setup>
const userData = defineProps({
    todos: Array    
})
</script>

<template>
    
    <ul style="list-style: none">
        <li v-for="user_action in userData.todos" :key="user_action" class="text-black text-center">
            <p class="text-black">{{ user_action.task }} : {{user_action.completion}}</p>
        </li>
    </ul>
</template>