<script setup>

const props = defineProps({
    color:{
        type: String,
        default: "blue"
    }
})

const buttonColors = {
    red: "bg-red-500 hover:bg-red-700",
    blue: "bg-blue-500 hover:bg-blue-700",
    menu: "px-4 py-2 text-left text-red-500 hover:bg-gray-100"
    
}


</script>



<template>

    <button :class="[buttonColors[props.color], 'rounded px-4 py-1']" >
        <slot></slot>
    </button>
    
</template>