<script setup>
import { ref } from 'vue'
import deleteToDo from './deleteToDo.vue'
import Button from './buttons.vue'

const userData = defineProps({
    todos: Array,
    task: Object,
})

const newTask = ref('')

const newCompletion = ref('')

const newNotes = ref('')

const newTargetTime = ref('')

function addUserData() {
    userData.task.task = newTask.value
    userData.task.targetTime = newTargetTime.value
    userData.task.notes = newNotes.value
    userData.task.completion = newCompletion.value
}

const emit = defineEmits(['deleted'])

const endDate = ref("TBD")
</script>

<template>
    <div class="bg-gray-200 min-h-screen flex justify-center items-start pt-10 px-4">

        <div class="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md mr-4">

            <h1 class="text-2xl font-bold text-blue-600 mb-6 text-center">
                Edit Page
            </h1>

            <div class="space-y-3 text-gray-700">

                <p>
                    <span class="font-semibold">Name:</span>
                    <p>Old: {{ userData.task.task }}</p>
                    {{"New: "}} <input placeholder="New Task Name" v-model="newTask" type="text" class="bg-blue-500 hover:bg-blue-700 text-white rounded w-25 px-1">
                </p>

                <p>
                    <span class="font-semibold">Completion:</span>
                    <p>Old: {{ userData.task.completion }}</p>
                    {{"New: "}} <input placeholder="New Task Name" v-model="newCompletion" type="text" class="bg-blue-500 hover:bg-blue-700 text-white rounded w-25 px-1">
                </p>

                <p>
                    <span class="font-semibold">Notes:</span>
                    <p>Old: {{ userData.task.notes }}</p>
                    {{"New: "}} <input placeholder="New Task Name" v-model="newNotes" type="text" class="bg-blue-500 hover:bg-blue-700 text-white rounded w-25 px-1">
                </p>

                <p>
                    <span class="font-semibold">Date Created:</span>
                    {{ userData.task.timeCreated }}
                </p>

                <p>
                    <span class="font-semibold">Target Date:</span>
                    <p>Old: {{ userData.task.targetTime }}</p>
                    {{"New: "}} <input placeholder="New Task Name" v-model="newTargetTime" type="date" class="bg-blue-500 hover:bg-blue-700 text-white rounded w-25 px-1">
                </p>

                <p>
                    <span class="font-semibold">End Date:</span>
                    {{ endDate }}
                </p>

            </div>

            <div class="mt-6 flex justify-center gap-4">
                <deleteToDo
                    :todos="userData.todos"
                    :task="userData.task"
                    @deleted="emit('deleted')"
                />
                <Button @click="addUserData">Confirm Edits</Button>
            </div>

        </div>

    </div>
</template>
