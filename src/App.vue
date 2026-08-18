<script setup>
import { ref, reactive, watch } from 'vue'
import PrintList from './components/todos/listToDo.vue/index.js'
import AddToDo from './components/todos/addToDo.vue/index.js'
import editPanel from './components/todos/panelTodo.vue/index.js'
import { loadToDos,  saveToDos} from './logic/saveLoadLogic.js';
import viewPanel from './components/viewToDo.vue'

  const userData = reactive([])
  const currentToDo = ref(null)

  const panel = ref("")

  loadToDos(userData)

  
  watch(
    userData,
    saveToDos,
    {deep: true}
  )

  watch(
    userData,
    () => {
      if (currentToDo.value && !userData.includes(currentToDo.value)) {
        currentToDo.value = null
        panel.value = null
      }
    },
    { deep: true }
)

</script>

<template>
  
  <div class="bg-gray-200 min-h-screen">

    <h1 class="text-blue-600 text-4xl font-bold mb-7 justify-center flex pt-5">Andrew's ToDo App</h1>

    <div class="flex gap-6 justify-center items-start px-6">
      <div class="w-fit bg-white rounded-2xl shadow-lg max-w-3xl p-6">
      <!-- <div class="bg-white rounded-2xl shadow-lg w-fit mx-auto p-6"> -->

        <AddToDo :todos="userData" class=""></AddToDo>
        <PrintList :todos="userData" :task="currentToDo" class="mt-4" @select="currentToDo = $event" @panel="panel = $event"></PrintList>
      </div>
      <editPanel v-if="panel === 'edit' && currentToDo" class="" :panel="panel" :todos="userData" :task="currentToDo" @close="currentToDo = null; panel = null" ></editPanel>
      <viewPanel v-if="panel === 'view' && currentToDo" class="" :todos="userData" :task="currentToDo" @close="currentToDo = null; panel = null"></viewPanel>
    </div>
  </div>
</template>
