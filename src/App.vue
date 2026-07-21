<script setup>
import { ref, reactive, watch } from 'vue'

const save_todo = localStorage.getItem("todos")

const user_task = ref('')

const count = ref(0)

const new_completion_status = ref('')

const completion_status = ref('')

const user_remove = ref('')

const show_list = ref(false)

const new_user_task = ref('')

let starting_data = []

function increament() {
  count.value++
}
function list_pressed() {
  show_list.value = true
}

if (save_todo !== null) {
  starting_data = JSON.parse(save_todo)
}
const user_data = reactive(starting_data)

// if (JSON.parse(save_todo) === null) {
//   user_data .push([])
// }
// else {
//   user_data = JSON.parse(save_todo)
// }

function save_function() {
  localStorage.setItem("todos", JSON.stringify(user_data))
}

watch(
  user_data,
  save_function,
  {deep: true}
)

function add_user_data() {
    user_data.push({
      task: user_task.value,
      completion: completion_status.value,
      order: count.value,
  })
  increament()
}

function remove_user_data() {

  
  const index_of_item = user_data.findIndex(item => item.task === user_remove.value)

  if (index_of_item == -1) {
    return   
  }

  else {
    user_data.splice(index_of_item, 1)

  }
}

function change_status() {
    
  const index_of_item = user_data.findIndex(item => item.task === new_user_task.value)

  if (index_of_item == -1) {
    return
  }
  
  else{
    user_data[index_of_item].completion = new_completion_status.value
  }
}

function addTodo(){
  user_task.value = ''
  completion_status.value = ''
}

function deleteTodo(){
  user_remove.value = ''
}

function replaceTodo(){
  new_user_task.value = ''
  new_completion_status.value = ''
}

</script>

<template>
  <div class="container">

    <h1 style="text-align: center; color:white;">
      Andrew's Todo App
    </h1>

    <form @submit.prevent="addTodo">
      
      <h2 class="buttons">
      <input v-model="user_task" placeholder="Enter todo" />
      <input v-model="completion_status" placeholder="Are you done or not"/>
      <button @click="add_user_data">Add to List</button>
      </h2>

    </form>

    
    <form @submit.prevent="deleteTodo"> 
      <h2 class="buttons">
      <input v-model="user_remove" placeholder="Enter todo" /> 
      <button @click="remove_user_data">Remove from todo list</button>
      </h2>
    </form>

    <form @submit.prevent="replaceTodo"> 
      <h2 class="buttons">
      <input v-model="new_user_task" placeholder="Enter todo" />
      <input v-model="new_completion_status" placeholder="Are you done or not"/>
      <button @click="change_status">Change Completion Status</button>
      </h2>
    </form>

    <h2 class="buttons">
      <button @click="list_pressed" id="button-list">List</button>
    </h2>

    <ul v-if="show_list" style="list-style: none">
      <li v-for="user_action in user_data" :key="user_action" style="color: white; text-align: center; padding-right: 40px">
        <p style="color: white">{{ user_action.task }} : {{user_action.completion}}</p>
      </li>
    </ul>
    
  </div>

</template>


<style>

body {
  background-color: #282c34;
  color: white;

}

.container {
  background-color: #282c34;
  color: white;
}

.buttons {
  display: flex;
  justify-content: center;
}

.list-button {
  font-size: 30px;
}

</style>