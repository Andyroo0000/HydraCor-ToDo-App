<script setup>
import { ref } from "vue";
import Button from "../common/button.vue";
import { addNewUserData } from "../../logic/addUserData.js";
import { deleteAllTodos } from "../../logic/deleteAllToDos.js";
import calendar from "../common/calendar.vue";
import dropDown from "../common/dropDown.vue";
import textBox from "../common/textBox.vue";
import Textarea from "../common/textarea.vue";

const userData = defineProps({
  todos: Array,
});

const currentTime = new Date().toLocaleString();

const userTask = ref("");

const userNotes = ref("");

const completionStatus = ref("");

const targetDate = ref("");

const dropDownOptionsStatus = [
  {
    value: "Incomplete",
    label: "Not Done",
  },
  {
    value: "Complete",
    label: "Done",
  },
  {
    value: "Blocked",
    label: "Blocked",
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
  userTask.value = "";
  completionStatus.value = "";
  targetDate.value = "";
  userNotes.value = "";
}
</script>

<template>
  <form @submit.prevent="addToDo">
    <div class="flex flex-wrap justify-between items-end">
      <textBox
        v-model="userTask"
        id="task"
        required
        label="Task:"
        placeholder="Enter ToDo"
        class="text-black"
      ></textBox>
      <dropDown
        v-model="completionStatus"
        id="dropDownStatus"
        required
        label="Completion:"
        placeholder="Select One"
        :options="dropDownOptionsStatus"
      ></dropDown>
      <calendar
        v-model="targetDate"
        required
        id="calendar"
        label="Target Date:"
      ></calendar>
      <Button class="text-white" type="submit">Add to List</Button>
      <Button
        class="text-white"
        @click="deleteAllTodos(userData.todos)"
        color="red"
        >Delete All ToDos</Button
      >
    </div>
    <div>
      <Textarea
        v-model="userNotes"
        id="notes"
        label="Notes:"
        class="text-black mt-5 w-full"
        placeholder="Enter Notes"
        @submit-enter="addToDo"
      ></Textarea>
    </div>
  </form>
</template>
