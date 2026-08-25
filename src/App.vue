<script setup>
import { ref, reactive, watch } from 'vue';
import PrintList from './components/todos/listToDo.vue';
import AddToDo from './components/todos/addToDo.vue';
import editPanel from './components/todos/panelTodo.vue';
import { loadToDos, saveToDos } from './logic/saveLoadLogic.js';
import Button from './components/common/button.vue';

const userData = reactive([]);
const currentToDo = ref(null);
const panel = ref('');

loadToDos(userData);
watch(userData, saveToDos, { deep: true });

watch(
  userData,
  () => {
    if (currentToDo.value && !userData.includes(currentToDo.value)) {
      currentToDo.value = null;
      panel.value = null;
    }
  },
  { deep: true },
);
</script>

<template>
	<div class="bg-white w-full h-18 border-black border-b flex items-center">
    <div class="bg-blue-500 w-10 h-10 rounded flex items-center justify-center ml-60">
      <p class="text-white text-center font-bold">AT</p>
    </div>
    <div class="ml-2">
      <p class="text-lg font-bold color-black">AndrewDoIt</p>
      <p class="text-sm text-gray-750">Stop procrastinating. Andrew do it.</p>
    </div>
    <div class="flex items-center justify-center ml-160">
        <p class="mr-7">Home</p>
        <p class="mr-7">My Tasks</p>
        <p class="mr-7">About</p>
        <Button color="blue" class="text-white p-1    ">Sign in</Button>
    </div>
  </div>
  <div class="bg-gray-100 min-h-screen">

		<div class="flex gap-6 justify-center items-start px-6">
				<!-- <div class="bg-white rounded-2xl shadow-lg w-fit mx-auto p-6"> -->
			<!-- <div class="w-full bg-white rounded-2xl shadow-lg max-w-6xl p-6 mt-12"> -->

				<AddToDo :todos="userData" class=""></AddToDo>
				<PrintList
					:todos="userData"
					:task="currentToDo"
					class="mt-4"
					@select="currentToDo = $event"
					@panel="panel = $event"
				></PrintList>
			<!-- </div> -->
			<editPanel
				v-if="panel === 'edit' && currentToDo"
				class=""
				:panel="panel"
				:todos="userData"
				:task="currentToDo"
				@close="
					currentToDo = null;
					panel = null;
				"
			></editPanel>
		</div>
	</div>
</template>
