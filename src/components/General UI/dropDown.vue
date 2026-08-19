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
    }
})

const dropDownColors = {
    blue: "bg-blue-500 hover:bg-blue-700",
    gray: "bg-gray-500 hover:bg-gray-700"
}


const emit = defineEmits(["update:modelValue"])


</script>

<template>

<label :for="props.id">{{ props.label }}</label>

<select :value="props.modelValue" :id="props.id" @change="emit('update:modelValue', $event.target.value)" :class="[dropDownColors[props.color], 'p-1 text-center w-29 text-white rounded']">
                <option disabled value="">Select Status</option>
                <option value="Incomplete">Not Done</option>
                <option value="Complete">Done</option>
                <option value="Blocked">Blocked</option>
</select>


</template>
