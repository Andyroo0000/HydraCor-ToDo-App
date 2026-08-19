<script setup>

const props = defineProps({
    color:{
        type: String,
        default: "blue"
    },
    modelValue: {
        type: String,
        default: ""
    },
    label: {
        type: String,
        default: "",
    },
    id: {
        type: String,
        default: "",
    }
})

const dateColors = {
    blue: "bg-blue-500 hover:bg-blue-700",
    gray: "bg-gray-500 hover:bg-gray-700"
}

const emit = defineEmits(["update:modelValue"])

</script>

<template>

    <label :for="props.id">{{ props.label }}</label>

    <input :value="props.modelValue" :id="props.id" @input="emit('update:modelValue', $event.target.value)" type="date" :class="[dateColors[props.color], 'p-1 text-center w-29 text-white rounded']">

</template>