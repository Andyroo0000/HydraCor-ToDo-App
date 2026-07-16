<script setup>
import { ref } from 'vue'

const count = ref(1)

function increament() {
  count.value++
}
</script>

<template>
  <h1 style="text-align: center; color:white; size: 1000px;">
    Andrew's Todo App
  </h1>
  <h2 style="text-align: left; padding-left: 50px">
    Add
  </h2>
  <!-- <button @click="increament">INcrement Count</button> -->
</template>
