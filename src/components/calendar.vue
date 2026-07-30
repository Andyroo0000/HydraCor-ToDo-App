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

const dateColors = {
    blue: "bg-blue-500 hover:bg-blue-700",
    gray: "bg-gray-500 hover:bg-gray-700"
}

const emit = defineEmits(["update:modelValue"])

</script>

<template>

    <input :value="modelValue" @input="emit('update:modelValue', $event.target.value)" type="date" :class="[dateColors[props.color], 'text-center w-29 text-white rounded']">

</template>