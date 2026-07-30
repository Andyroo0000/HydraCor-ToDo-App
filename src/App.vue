<script setup>
import { ref, reactive, watch } from 'vue'
import PrintList from './components/listToDo.vue'
import AddToDo from './components/addToDo.vue'
import panel from './components/panelTodo.vue'
import { loadToDos,  saveToDos} from './logic/saveLoadLogic.js';

  const userData = reactive([])
  const currentToDo = ref(null)

  loadToDos(userData)

  
  watch(
    userData,
    saveToDos,
    {deep: true}
  )

</script>

<template>
  
  <div class="bg-gray-200 min-h-screen">

    <h1 class="text-blue-600 text-4xl font-bold mb-7 justify-center flex pt-5">Andrew's ToDo App</h1>

    <div class="flex gap-6 justify-center items-start px-6">
      <div class="w-fit bg-white rounded-2xl shadow-lg max-w-3xl p-6">
      <!-- <div class="bg-white rounded-2xl shadow-lg w-fit mx-auto p-6"> -->

        <AddToDo :todos="userData" class=""></AddToDo>
        <PrintList :todos="userData" class="mt-4" @select="currentToDo = $event"></PrintList>
      </div>
      <panel v-if="currentToDo && currentToDo.selected" class="" :todos="userData" :task="currentToDo" @deleted="currentToDo = null" ></panel>
    </div>
  </div>
</template>
