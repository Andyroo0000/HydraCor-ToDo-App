<script setup>
import { ref } from 'vue'

const currentTime = new Date().toLocaleString()
const userData = defineProps({
    todos: Array,
    task: Object
})

function findEndTime() {
    if (userData.task.completionStatus === "Complete"){
        userData.task.endTme = currentTime
    }
    else {
        return
    }

}

</script>

<template>
<p>{{ userData.task.endTme }}</p>

</template>
