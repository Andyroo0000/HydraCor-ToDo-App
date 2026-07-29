<script setup>
import DeleteButton from './deleteButton.vue';
import { ref } from "vue"

const userTask = ref()

const userData = defineProps({
    todos: Array,
    task: Object
})

const emit = defineEmits(['deleted'])

function deleteUserData() {
    const index = userData.todos.findIndex(todo => todo.task === userData.task.task)

    if (index !== -1) {
        userData.todos.splice(index, 1)
        userData.task.selected = false
        emit('deleted')
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
