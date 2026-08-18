<script setup>
import { ref, watch} from 'vue'
import { deleteUserData } from '../../logic/deleteLogic.js'
import { replaceUserData } from '../../logic/replaceUserData.js'
import Button from './General UI/button.vue'
import calendar from './General UI/calendar.vue'
import dropDown from './General UI/dropDown.vue/index.js'
import textBox from './General UI/textBox.vue/index.js'
import Textarea from './General UI/textarea.vue/index.js'

const userData = defineProps({
    todos: Array,
    task: Object,
    panel: String,
})

const currentTime = new Date().toLocaleString()

const emit = defineEmits(['close'])

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
                    {{ "New: " }}
                    <textBox v-model="newTask" placeholder="New Task Name" v-if="userData.task.isEditing" class="w-32"></textBox>
                    <textBox v-else v-model="newTask" placeholder="New Task Name" color="gray" disabled class="w-32"></textBox>
                </p>

                <p>
                    <span class="font-semibold">Completion:</span>
                    <p>Old: {{ userData.task.completion }}</p>
                    {{"New: "}}
                    <dropDown v-model="newCompletion"></dropDown>
                </p>

                <p>
                    <span class="font-semibold">Notes:</span>
                    <p>Old: {{ userData.task.notes }}</p>
                    {{"New: "}}
                    <Textarea v-if="userData.task.isEditing" placeholder="New Notes" class=""></Textarea>
                    <Textarea v-else placeholder="New Notes" v-model="newTask" color="gray" disabled></Textarea>
                </p>

                <p>
                    <span class="font-semibold">Date Created:</span>
                    {{ userData.task.timeCreated }}
                </p>

                <p>
                    <span class="font-semibold">Target Date:</span>
                    <p>Old: {{ userData.task.targetTime }}</p>
                    {{"New: "}}
                    <calendar v-model="newTargetTime" v-if="userData.task.isEditing" placeholder="New Target Date"></calendar>
                    <calendar v-model="newTargetTime" v-else placeholder="New Target Date" color="gray"></calendar>
                </p>

                <p>
                    <span class="font-semibold">End Date:</span>
                    {{ userData.task.endTime }}
                </p>

            </div>

            <div class="mt-6 flex justify-center gap-4">

                <Button class="text-white" @click="replaceUserData(newTask, userData.task, newTargetTime, newNotes, newCompletion, currentTime)">Confirm Edits</Button>
                <Button class="text-white" @click="emit('close')">Close</Button>
            </div>

        </div>

    </div>
</template>
