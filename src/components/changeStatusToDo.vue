<script setup>
import { ref } from 'vue'

function deleteUserData() {
    const index = userData.todos.findIndex(todo => todo.task === userTask.value)

    if (index !== -1) {
        userData.todos.splice(index, 1)
    }
    else {
        return
    }
    userTask.value = ""

}

</script>

<template>
    <form @submit.prevent="addTodo">
        <input v-model="userTask" type="text" class="bg-blue-500 hover:bg-blue-700 text-white rounded" placeholder="Enter a ToDo">
        <input v-model="completionStatus" type="text" class="bg-blue-500 hover:bg-blue-700 text-white rounded" placeholder="Enter a ToDo">
        <Button @click="addUserData">Add to List</Button>

    </form>

</template>
