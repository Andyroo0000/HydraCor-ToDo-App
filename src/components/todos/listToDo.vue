<script setup>
import { ref } from 'vue'
import Button from '../General UI/button.vue'
import { deleteUserData } from '../../logic/deleteLogic.js'

const userData = defineProps({
    todos: Array,
    task: Object,
    panel: String,
})
const emit = defineEmits(['select'])

const openMenu = ref(false)


</script>

<template>
    
    <p v-if="userData.todos.length === 0" class="text-center text-gray">No Task Yet! Add One Now!</p>

    <ul v-else>
        <li v-for="userAction in userData.todos" :key="userAction" class="text-black text-center">
            <div class="flex justify-center gap-2 items-center relative">
                <div class="relative bg-gray-100 rounded-lg shadow-md p-4 w-100 mb-10">
                    <Button v-if="userData.todos.length > 0" v-model="openMenu" color="menu" class="hover:bg-gray-500 absolute top-1 right-2 text-white-700" @click="openMenu = openMenu === userAction ? null : userAction">&#8942;</Button>
                    <p class="text-black">Task Name: {{ userAction.task }}</p>
                    <p class="text-black">Status: {{ userAction.completion }}</p>
                    <p class="text-black">Date Started: {{ userAction.timeCreated }}</p>
                    <p class="text-black">Date Due: {{ userAction.targetTime }}</p>
                    <p class="text-black">Date Ended: {{ userAction.endTime }}</p>

                </div>
                    <div v-if="openMenu === userAction" class="absolute top-8 right-0 w-32 bg-white border rounded-lg shadow-lg overflow-hidden -translate-x-8 z-50">
                        <Button color="blue" class="text-white w-25" v-model="userAction.selected" @click="panel = 'edit'; openMenu = ''; userAction.selected = !userAction.selected; emit('select', userAction); emit('panel', 'edit')">Edit</Button>
                        <Button @click="deleteUserData(userAction, userData.todos)" class="text-white w-25" color="red">Delete</Button>
                    </div>
            </div>
        </li>
    </ul>


</template>


