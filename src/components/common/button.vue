<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'blue',
  },
})

const buttonColors = {
  red: 'bg-red-500 hover:bg-red-700',
  blue: 'bg-blue-500 hover:bg-blue-700',
  menu: 'hover:bg-gray-100 ',
}
</script>

<template>
  <div class="flex flex-col gap-1">
    <button :class="[buttonColors[props.color], 'p-1 text-center rounded']">
      <slot></slot>
    </button>
  </div>
</template>
