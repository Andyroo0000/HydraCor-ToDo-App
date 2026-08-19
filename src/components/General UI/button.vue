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
    menu: "hover:bg-gray-100"
    
}


</script>



<template>

    <button :class="[buttonColors[props.color], 'rounded-lg min-w-24 h-10 items-center justify-center']" >
        <slot></slot>
    </button>
    
</template>