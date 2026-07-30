<script setup>
import { ref } from 'vue'
import { deleteUserData } from '../logic/deleteLogic.js'
import { replaceUserData } from '../logic/replaceUserData.js'
import buttons from './button.vue'
import deleteButton from './deleteButton.vue'

const userData = defineProps({
    todos: Array,
    task: Object,
})

const currentTime = new Date().toLocaleString()

const emit = defineEmits(['deleted'])

const endDate = ref("TBD")

const newTask = ref('')

const newCompletion = ref('')

const newNotes = ref('')

const newTargetTime = ref('')


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
                    {{"New: "}} <input v-if="userData.task.isEditing" placeholder="New Task Name" v-model="newTask" type="text" class="bg-blue-500 hover:bg-blue-700 text-white rounded w-25 px-1">
                    <input v-else placeholder="New Task Name" v-model="newTask" type="text" class="bg-gray-500 hover:bg-gray-700 text-white rounded w-25 px-1" disabled>
                </p>

                <p>
                    <span class="font-semibold">Completion:</span>
                    <p>Old: {{ userData.task.completion }}</p>
                    {{"New: "}} <select v-model="newCompletion" placeholder="Status" class="bg-blue-500 hover:bg-blue-700 text-white rounded w-25">
                        <option disabled value="">Select Status</option>
                        <option value="Incomplete">Not Done</option>
                        <option value="Complete">Done</option>
                        <option value="Blocked">Blocked</option>
                    </select>
                </p>

                <p>
                    <span class="font-semibold">Notes:</span>
                    <p>Old: {{ userData.task.notes }}</p>
                    {{"New: "}} <input v-if="userData.task.isEditing" placeholder="New Notes" v-model="newNotes" type="text" class="bg-blue-500 hover:bg-blue-700 text-white rounded w-25 px-1">
                    <input v-else placeholder="New Task Name" v-model="newTask" type="text" class="bg-gray-500 hover:bg-gray-700 text-white rounded w-25 px-1" disabled>
                </p>

                <p>
                    <span class="font-semibold">Date Created:</span>
                    {{ userData.task.timeCreated }}
                </p>

                <p>
                    <span class="font-semibold">Target Date:</span>
                    <p>Old: {{ userData.task.targetTime }}</p>
                    {{"New: "}} <input v-if="userData.task.isEditing" placeholder="New Target Date" v-model="newTargetTime" type="date" class="bg-blue-500 hover:bg-blue-700 text-white rounded w-25 px-1">
                    <input v-else placeholder="New Task Name" v-model="newTask" type="text" class="bg-gray-500 hover:bg-gray-700 text-white rounded w-25 px-1" disabled>
                </p>

                <p>
                    <span class="font-semibold">End Date:</span>
                    {{ userData.task.endTime }}
                </p>

            </div>

            <div class="mt-6 flex justify-center gap-4">


                <deleteButton @click="deleteUserData(userData.task, userData.todos)">Delete</deleteButton>

                <buttons @click="replaceUserData(newTask, userData.task, newTargetTime, newNotes, newCompletion, currentTime)">Confirm Edits</buttons>
            </div>

        </div>

    </div>
</template>
