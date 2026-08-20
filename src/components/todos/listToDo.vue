<script setup>
import { ref, computed} from 'vue'
import Button from '../General UI/button.vue'
import { deleteUserData } from '../../logic/deleteLogic.js'
import DropDown from '../General UI/dropDown.vue'
import { filterToDos } from '../../logic/filterToDos.js'
import { findBorderColor } from '../../logic/borderColor.js'

const userData = defineProps({
    todos: Array,
    task: Object,
    panel: String,
})
const emit = defineEmits(['select'])

const openMenu = ref(false)

const totalCount = computed(() => userData.todos.length)

const amountCompleted = computed(() => userData.todos.filter(todo => todo.completion === "Complete").length)

const percentageCompleted = computed(() => (amountCompleted.value/totalCount.value) * 100)

const filteredToDosName = ref({
    value: "all",
    attribute: "all"
    },)

const filteredToDoList = filterToDos(filteredToDosName, userData.todos)

const filteredDropDownOptions = [
    {
        value: {value: "all", 
                attribute: "all"},
        label: "All"
    },
        {
        value: {value: "Incomplete", 
                attribute: "completion"},
        label: "Not Done"
    },
    {
        value: {value: "Blocked", 
                attribute: "completion"},
        label: "Blocked"
    },
        {
        value: {value: "Complete", 
                attribute: "completion"},
        label: "Done"
    },
]


</script>

<template>
    
    <p v-if="userData.todos.length === 0" class="text-center text-gray mt-10">No Task Yet! Add One Now!</p>

    <ul v-else>
        <div v-if="userData.todos.length > 0" class="mb-4">
            <DropDown class="left-2" v-model="filteredToDosName" id="dropDownFilter" label="Filter" placeholder="Select One" :options="filteredDropDownOptions"></DropDown>

            <div class="text-center">
                <p>Completed</p>
                <p>{{ amountCompleted }} / {{ totalCount }} ({{ Math.round(percentageCompleted) }}%)</p>
                <div class="w-full bg-gray-200 rounded-full h-3">
                    <div class="bg-blue-500 h-3 rounded-full" :style="{ width: percentageCompleted + '%' }"></div>
                </div>    
            </div>
        </div>
        <div class="flex justify-center gap-10 items-start relative flex-wrap">   
            <li v-for="userAction in filteredToDoList" :key="userAction" class="text-black text-center">
                    <div class="relative bg-gray-100 rounded-lg shadow-md p-4 w-100 mb-10 border-2" :class="findBorderColor(userAction)">
                        <Button v-if="userData.todos.length > 0" v-model="openMenu" color="menu" class="hover:bg-gray-500 absolute top-1 right-2 text-white-700 w-10" @click="openMenu = openMenu === userAction ? null : userAction">&#8942;</Button>
                            <div v-if="openMenu === userAction" class="absolute top-8 -right-32 w-32 bg-white border rounded-lg shadow-lg z-50 flex flex-col items-center gap-1 p-2">
                            <Button color="blue" class="text-white w-25" v-model="userAction.selected" @click="panel = 'edit'; openMenu = ''; userAction.selected = !userAction.selected; emit('select', userAction); emit('panel', 'edit')">Edit</Button>
                            <Button @click="deleteUserData(userAction, userData.todos)" class="text-white w-25" color="red">Delete</Button>
                        </div>
                        <p class="text-black">Task Name: {{ userAction.task }}</p>
                        <p class="text-black">Status: {{ userAction.completion }}</p>
                        <p class="text-black">Date Started: {{ userAction.timeCreated }}</p>
                        <p class="text-black">Date Due: {{ userAction.targetTime }}</p>
                        <p class="text-black">Date Ended: {{ userAction.endTime }}</p>
                        <p class="text-black">Notes: {{ userAction.notes }}</p>
                    </div>

            </li>
        </div>
    </ul>


</template>


