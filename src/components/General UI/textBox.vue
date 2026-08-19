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
    },
    placeholder: {
        type: String,
        default: "",
    }
})

const textColors = {
    blue: "bg-blue-500 hover:bg-blue-700",
    gray: "bg-gray-500 hover:bg-gray-700"
}


const emit = defineEmits(["update:modelValue"])

</script>

<template>

    
    <label :for="props.id">{{ props.label }}</label>

    <input :value="props.modelValue" :placeholder="props.placeholder" :id="props.id" @input="emit('update:modelValue', $event.target.value)" type="text" :class="[textColors[props.color], 'p-1 text-center w-40 text-white rounded']">

</template>