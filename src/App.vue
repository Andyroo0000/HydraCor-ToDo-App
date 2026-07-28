<script setup>
import Button from './components/buttons.vue'
import DeleteButton from './components/deleteButton.vue';
import { ref, reactive, watch } from 'vue'
import PrintList from './components/listToDo.vue'
import AddToDo from './components/addToDo.vue'
import DeleteToDo from './components/deleteToDo.vue';

  const userData = reactive([])
  const currentToDo = ref(null)
  function addUserData(todo) {
    userData.push(todo)
  }
</script>

<template>
  
  <div class="bg-gray-200 min-h-screen">

    <h1 class="text-blue-600 text-4xl font-bold mb-7 justify-center flex pt-5">Andrew's ToDo App</h1>

    <div class="flex">
      <div class="flex-grow bg-white rounded-2xl shadow-lg max-w-3xl mx-auto p-6">
        <AddToDo :todos="userData"></AddToDo>
        <PrintList :todos="userData" class="mt-4" @select="currentToDo = $event"></PrintList>
      </div>
      <panel v-if="currentToDo" class="" :todos="userData" :task="currentToDo"></panel>
    </div>
  </div>
</template>
