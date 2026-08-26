<script setup>
import { ref, computed, watch, toRef } from 'vue';
import Button from '../common/button.vue';
import { deleteUserData } from '../../logic/deleteLogic.js';
import DropDown from '../common/dropDown.vue';
import { filterToDos } from '../../logic/filterToDos.js';
import { findBorderColor } from '../../logic/borderColor.js';
import { dueDateCalculator } from '../../logic/dueDateLogic.js';
import TextBox from '../common/textBox.vue';
import { searchFunction } from '../../logic/searchToDo.js';

const userData = defineProps({
	todos: Array,
	task: Object,
	panel: String,
    filterName: Object,
});
const emit = defineEmits(['select']);

const openMenu = ref(false);

const totalCount = computed(() => userData.todos.length);

const filteredToDoList = filterToDos(toRef(userData, 'filterName'), userData.todos);

const search = ref('');

const searchedList = computed(() => {
	return searchFunction(filteredToDoList.value, search.value);
});

function resetValue() {
	search.value = '';
}

watch(
	() => userData.todos.length,
	(length) => {
		if (length === 0) {
			resetValue();
		}
	},
);
</script>

<template>
    <div class="bg-white rounded-2xl shadow-lg p-6 min-w-72 sm:min-w-[26rem] md:min-w-[32rem] lg:min-w-[45rem]">  
        <div class="flex items-center mb-2">
            <p class="font-bold text-2xl">My Task</p>
            <p class="ml-auto mr-2 relative text-black">You have {{ totalCount }} tasks</p>
        </div>
        
        <div v-if="userData.todos.length === 0" class="text-center text-gray">
            <p>No Task Yet! Add One Now!</p>
        </div>

        <div v-else>
            <div v-if="userData.todos.length > 0" class="mb-8">
                <TextBox
                    color="blue"
                    v-model="search"
                    id="searchBar"
                    label="Search"
                    placeholder="Enter ToDo"
                    class=""
                ></TextBox>
            </div>
            <div class="grid grid-cols-2 gap-4 min-h-80">
                <div
                    v-for="userAction in searchedList"
                    :key="userAction"
                    class="text-black text-center"
                >
                    <div
                        class="relative bg-gray-100 rounded-lg shadow-md p-4 w-full mb-10 border-2 transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:z-40"
                        :class="findBorderColor(userAction)"
                    >
                        <span
                            v-if="dueDateCalculator(userAction).showPill"
                            :class="dueDateCalculator(userAction).color"
                            class="absolute top-1 left-2 text-xs px-2 py-0.5 rounded-full mt-1 text-white"
                        >
                            {{ dueDateCalculator(userAction).placeholder }}
                        </span>
                        <Button
                            v-if="userData.todos.length > 0"
                            v-model="openMenu"
                            color="menu"
                            class="hover:bg-gray-200 absolute top-1 right-2 text-white-700 w-10 z-50"
                            @click="openMenu = openMenu === userAction ? null : userAction"
                            >&#8942;</Button
                        >
                        <div
                            v-if="openMenu === userAction"
                            class="absolute top-8 -right-32 w-32 bg-white border rounded-lg shadow-lg z-50 flex flex-col items-center gap-1 p-2"
                        >
                            <Button
                                color="blue"
                                class="text-white w-25"
                                v-model="userAction.selected"
                                @click="
                                    panel = 'edit';
                                    openMenu = '';
                                    userAction.selected = !userAction.selected;
                                    emit('select', userAction);
                                    emit('panel', 'edit');
                                "
                                >Edit</Button
                            >
                            <Button
                                @click="deleteUserData(userAction, userData.todos)"
                                class="text-white w-25"
                                color="red"
                                >Delete</Button
                            >
                        </div>
                        <p class="text-black">Task Name: {{ userAction.task }}</p>
                        <p class="text-black">Status: {{ userAction.completion }}</p>
                        <p class="text-black">Date Started: {{ userAction.timeCreated }}</p>
                        <p class="text-black">Date Due: {{ userAction.targetTime }}</p>
                        <p class="text-black">Date Ended: {{ userAction.endTime }}</p>
                        <p class="text-black">Notes: {{ userAction.notes }}</p>
                    </div>
                </div>
            </div>
        </div>        
    </div>

</template>
