<script setup>
import { ref } from 'vue';
import Button from '../common/button.vue';
import { addNewUserData } from '../../logic/addUserData.js';
import { deleteAllTodos } from '../../logic/deleteAllToDos.js';
import calendar from '../common/calendar.vue';
import dropDown from '../common/dropDown.vue';
import textBox from '../common/textBox.vue';
import Textarea from '../common/textarea.vue';

const userData = defineProps({
	todos: Array,
});

const currentTime = new Date().toLocaleString();

const userTask = ref('');

const userNotes = ref('');

const completionStatus = ref('');

const targetDate = ref('');

const dropDownOptionsStatus = [
	{
		value: 'Incomplete',
		label: 'Not Done',
	},
	{
		value: 'Complete',
		label: 'Done',
	},
	{
		value: 'Blocked',
		label: 'Blocked',
	},
];

function addToDo() {
	addNewUserData(
		userData.todos,
		userTask.value,
		completionStatus.value,
		currentTime,
		targetDate.value,
		userNotes.value,
	);
	userTask.value = '';
	completionStatus.value = '';
	targetDate.value = '';
	userNotes.value = '';
}
</script>

<template>
	<div class="bg-white rounded-2xl shadow-lg w-85 p-6">
        <form @submit.prevent="addToDo">
            <div class="">
                <p class="text-lg mb-2">Add Task</p>
                <div class="mb-2">
                    <textBox
                        v-model="userTask"
                        id="task"
                        required
                        label="Task:"
                        placeholder="Enter ToDo"
                        class="text-black"
                    ></textBox>
                </div>
                <div class="flex-1">
                    <dropDown
                    v-model="completionStatus"
                    id="dropDownStatus"
                    required
                    label="Completion:"
                    placeholder="Select One"
                    :options="dropDownOptionsStatus"
                    ></dropDown>
                </div>
                <div class="flex-1">
                    <calendar
                    v-model="targetDate"
                    required
                    id="calendar"
                    label="Target Date:"
                    ></calendar>
                </div>
                
                <div>
                    <Textarea
                        v-model="userNotes"
                        id="notes"
                        label="Notes:"
                        class="text-black w-full"
                        placeholder="Enter Notes"
                        @submit-enter="addToDo"
                    ></Textarea>
                </div>

                <div class="flex gap-4 mt-5">
                    <Button class="text-white" type="submit">Add to List</Button>
                    <Button
                    class="text-white"
                    @click="deleteAllTodos(userData.todos)"
                    color="red"
                    >Delete All ToDos</Button>  
                </div>
                
            </div>

        </form>
    </div>

</template>
