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
    disabled: {
        type: Boolean,
        default: false
    }
})

const dateColors = {
    blue: "bg-blue-500 hover:bg-blue-700",
    gray: "bg-gray-500 hover:bg-gray-700",
    green: "bg-blue-300 hover:bg-blue-500"
}

const emit = defineEmits(["update:modelValue"])

</script>

<template>
    <div class="flex flex-col gap-1">
        <label :for="props.id">{{ props.label }}</label>

        <input :value="props.modelValue" :id="props.id" :disabled="props.disabled" @input="emit('update:modelValue', $event.target.value)" type="date" :class="[dateColors[props.color], 'p-1 text-center w-29 text-white rounded']">

        
    </div>
    
</template>