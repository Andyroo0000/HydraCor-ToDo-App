<script setup>
    import { ref } from 'vue'

    const userData = defineProps({
        todos: Array
    })

</script>


<template>
    <form @submit.prevent="addTodo">
        <input v-model="userTask" type="text" class="bg-blue-500 hover:bg-blue-700 text-white rounded" placeholder="Enter a ToDo">
        <input v-model="completionStatus" type="text" class="bg-blue-500 hover:bg-blue-700 text-white rounded" placeholder="Enter a ToDo">
        <Button @click="addUserData">Add to List</Button>

    </form>

</template>
