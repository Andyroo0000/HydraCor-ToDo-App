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

const textareaColors = {
    blue: "bg-blue-500 hover:bg-blue-700",
    gray: "bg-gray-500 hover:bg-gray-700"
}


const emit = defineEmits(["update:modelValue"])

</script>

<template>
    <textarea rows="1" :value="modelValue" @input="emit('update:modelValue', $event.target.value)" type="text" :class="[textareaColors[props.color], 'text-center w-29 text-white rounded']"></textarea>
</template>