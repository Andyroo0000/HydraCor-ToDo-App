<script setup>

const userData = defineProps({
    task: Object,
    todos: Array
})

function findCompletionStatus() {
    if (userData.task.completion === "Blocked" ){
        userData.task.isEditing = false
    }
    else {
        userData.task.isEditing = true
    }
}

findCompletionStatus()
 
</script>
