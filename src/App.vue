<script setup>
import Button from './components/buttons.vue'
import DeleteButton from './components/deleteButton.vue';
import { ref, reactive, watch } from 'vue'
import PrintList from './components/listToDo.vue'
import AddToDo from './components/addToDo.vue'
import DeleteToDo from './components/deleteToDo.vue';
import Checkbox from './components/checkbox.vue';

  const userData = reactive([])

  function addUserData(todo) {
    userData.push(todo)
  }
</script>

<template>
  
  <div class="bg-gray-100 min-h-screen">
    <div class="bg-white rounded-2xl shadow-xl">
  `   <div class="bg-gray-100 flex items-top justify-center pt-8">
      <h1 class="text-blue-600 text-4xl font-bold">
          Andrew's ToDo App
      </h1>
      </div>

      <div class="flex justify-center pt-8">
        <Button>Click Here</Button>
        <DeleteButton>Click Here</DeleteButton>
      </div>

      <AddToDo :todos="userData"></AddToDo>
      <DeleteToDo :todos="userData"></DeleteToDo>
      <PrintList :todos="userData"></PrintList>`
    </div>
  </div>
</template>
