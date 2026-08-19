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
    menu: "hover:bg-gray-100 "
    
}


</script>



<template>

    <button :class="[buttonColors[props.color], 'p-1 text-center w-29 rounded']" >
        <slot></slot>
    </button>

    
</template>