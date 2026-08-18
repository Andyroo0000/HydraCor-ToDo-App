<script setup>
import { ref } from 'vue'
import Button from './button.vue'
import { deleteUserData } from '../logic/deleteLogic.js'

const userData = defineProps({
    todos: Array,
    task: Object,
    panel: String,
})
const emit = defineEmits(['select'])

const openMenu = ref(false)


</script>

<template>
    
    <ul>
        <li v-for="userAction in userData.todos" :key="userAction" class="text-black text-center">
            <div class="flex justify-center gap-2 items-center relative">
                <p class="text-black">{{ userAction.task}}</p>
                <Button v-if="userData.todos.length > 0" v-model="openMenu" color="menu" class="text-gray-700"     @click="openMenu = openMenu === userAction ? null : userAction">&#8942;</Button>
                    <div v-if="openMenu === userAction" class="absolute top-8 right-0 w-32 bg-white border rounded-lg shadow-lg overflow-hidden -translate-x-8">
                        <Button color="menu" class="text-black" v-model="userAction.selected" @click="panel = 'edit'; userAction.selected = !userAction.selected; emit('select', userAction); emit('panel', 'edit')">Edit</Button>
                        <Button color="menu" class="text-black" v-model="userAction.isViewing" @click="panel = 'view'; userAction.isViewing = !userAction.isViewing; emit('select', userAction); emit('panel', 'view')">View</Button>
                        <Button @click="deleteUserData(userAction, userData.todos)" class="text-red" color="menu">Delete</Button>
                    </div>
            </div>
        </li>
    </ul>


</template>


