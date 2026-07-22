<script setup>
import Button from './components/buttons.vue'
import DeleteButton from './components/deleteButton.vue';
import { ref, reactive, watch } from 'vue'
import PrintList from './components/listToDo.vue'
import AddToDo from './components/addToDo.vue'

  const userData = reactive([])

  function addUserData(todo) {
    userData.push(todo)
  }
</script>

<template>

  <AddToDo :todos="userData"></AddToDo>

  <div class="bg-white flex items-top justify-center pt-8">
    <h1 class="text-5xl font-bold text-blue-500">
      Andrew's ToDo App
    </h1>
  </div>

  <div class="flex justify-center pt-8">
    <Button>Click Here</Button>
    <DeleteButton>Click Here</DeleteButton>
  </div>

  <PrintList :todos="userData"></PrintList>


</template>