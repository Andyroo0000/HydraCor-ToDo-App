<script setup>
import DeleteButton from './deleteButton.vue';
import { ref } from "vue"

const userTask = ref()

const userData = defineProps({
    todos: Array,
    task: Array
})

function deleteUserData() {
    const index = userData.todos.findIndex(todo => todo.task === userData.task.task)

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
    <DeleteButton @click="deleteUserData">Delete</DeleteButton>


</template>
