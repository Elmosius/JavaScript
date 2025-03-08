<script setup>
const { counter, name, increment } = defineProps({
  counter: Number,
  name: String,
  increment: Number,
});

const emits = defineEmits(["click"]);
</script>

<template>
  <div>
    <h1>{{ name }} - {{ counter }}</h1>
    <button @click="emits('click', increment)">increment {{ name }}</button>
  </div>
</template>

<style scoped></style>
