<script setup>
import Button from './components/buttons.vue'
import DeleteButton from './components/deleteButton.vue';
import { ref, reactive, watch } from 'vue'
import PrintList from './components/listToDo.vue'
import AddToDo from './components/addToDo.vue'
import DeleteToDo from './components/deleteToDo.vue';
import panel from './components/panelTodo.vue'

  const userData = reactive([])
  const currentToDo = ref(null)
  function addUserData(todo) {
    userData.push(todo)
  }
function save_function() {
  localStorage.setItem("todos", JSON.stringify(userData))
  }
  watch(
    userData,
    save_function,
    {deep: true}
  )

function loadTodos() {
  const savedTodos = localStorage.getItem("todos")

  if (savedTodos) {
    userData.push(...JSON.parse(savedTodos))
  }
}

loadTodos()

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
