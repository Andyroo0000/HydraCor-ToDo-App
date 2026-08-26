<script setup>
import { ref, reactive, watch } from 'vue';
import PrintList from './components/todos/listToDo.vue';
import AddToDo from './components/todos/addToDo.vue';
import editPanel from './components/todos/panelTodo.vue';
import { loadToDos, saveToDos } from './logic/saveLoadLogic.js';
import Button from './components/common/button.vue';
import FilterMenu from './components/todos/filterMenu.vue';

const userData = reactive([]);
const currentToDo = ref(null);
const panel = ref('');

loadToDos(userData);
watch(userData, saveToDos, { deep: true });

const filteredToDosName = ref({ value: 'all', attribute: 'all' })

const filteredDropDownOptions = [
    { value: { value: 'all', attribute: 'all' }, label: 'All' },
    { value: { value: 'Incomplete', attribute: 'completion' }, label: 'Not Done' },
    { value: { value: 'Blocked', attribute: 'completion' }, label: 'Blocked' },
    { value: { value: 'Complete', attribute: 'completion' }, label: 'Done' },
]

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
  <div class="bg-white w-full h-18 border-black border-b flex items-center justify-between px-6">
    <div class="flex items-center gap-2">
        <div class="bg-blue-500 w-10 h-10 rounded flex items-center justify-center">
            <p class="text-white text-center font-bold">AT</p>
        </div>
        <div>
            <p class="text-lg font-bold color-black">AndrewDoIt</p>
            <p class="text-sm text-gray-750">Stop procrastinating. Andrew do it.</p>
        </div>
    </div>

    <div class="hidden md:flex items-center gap-7">
        <p>Home</p>
        <p>My Tasks</p>
        <p>About</p>
        <Button color="blue" class="text-white">Sign in</Button>
    </div>
  </div>
  <div class="bg-gray-100 min-h-screen">

		<div class="flex gap-6 justify-start items-start px-6 max-w-6xl mx-auto">
    <div class="flex flex-col gap-4 mt-4">
        <AddToDo :todos="userData"></AddToDo>
        <FilterMenu v-model="filteredToDosName" :options="filteredDropDownOptions"></FilterMenu>
    </div>

    <PrintList
        :todos="userData"
        :task="currentToDo"
        :filterName="filteredToDosName"
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
