<script setup>
import { computed } from "vue";

const props = defineProps({
  color: {
    type: String,
    default: "blue",
  },
  modelValue: {
    type: [Object, String],
    default: "",
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
    default: false,
  },
  placeholder: {
    type: String,
    default: "",
  },
  options: {
    type: Array,
    default: () => [],
  },
  required: {
    type: Boolean,
    default: false,
  },
});

const dropDownColors = {
  blue: "bg-blue-500 hover:bg-blue-700",
  gray: "bg-gray-500 hover:bg-gray-700",
  green: "bg-blue-500 hover:bg-blue-700",
};

const emit = defineEmits(["update:modelValue"]);

const selectedValue = computed({
  get() {
    return props.modelValue;
  },

  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div class="flex flex-col gap-1">
    <label :for="props.id">{{ props.label }}</label>

    <select
      :disabled="props.disabled"
      :required="props.required"
      :id="props.id"
      v-model="selectedValue"
      :class="[
        dropDownColors[props.color],
        'p-1 text-center w-29 text-white rounded',
      ]"
    >
      <option disabled value="">{{ props.placeholder }}</option>
      <option
        v-for="options in props.options"
        :key="options.value"
        :value="options.value"
      >
        {{ options.label }}
      </option>

      <!-- <option value="Incomplete">Not Done</option>
                        <option value="Complete">Done</option>
                        <option value="Blocked">Blocked</option> -->
    </select>
  </div>
</template>
