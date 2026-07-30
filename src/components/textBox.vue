<script setup>

const props = defineProps({
    color:{
        type: String,
        default: "blue"
    },
    modelValue: {
        type: String,
        default: ""
    }
})

const textColors = {
    blue: "bg-blue-500 hover:bg-blue-700",
    gray: "bg-gray-500 hover:bg-gray-700"
}


const emit = defineEmits(["update:modelValue"])

</script>

<template>

    <input :value="modelValue" @input="emit('update:modelValue', $event.target.value)" type="text" :class="[textColors[props.color], 'text-center text-white rounded']">

</template>