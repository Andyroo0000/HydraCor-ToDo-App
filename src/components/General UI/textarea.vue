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
        default: ""
    },
    id: {
        type: String,
        default: ""
    },
    placeholder: {
        type: String,
        default: ""
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

const textareaColors = {
    blue: "bg-blue-500 hover:bg-blue-700",
    gray: "bg-gray-500 hover:bg-gray-700",
    green: "bg-green-500 hover:bg-green-700"
}


const emit = defineEmits(["update:modelValue"])

</script>

<template>

    <div class="flex flex-col gap-1">
    <label :for="props.id">{{ props.label }}</label>

    <textarea rows="1" :id="props.id" :disabled="props.disabled" :placeholder="props.placeholder" :value="modelValue" @input="emit('update:modelValue', $event.target.value)" type="text" :class="[textareaColors[props.color], 'p-1 text-center w-40 text-white rounded']"></textarea>
        
    </div>
   
</template>