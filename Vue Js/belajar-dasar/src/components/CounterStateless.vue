<script setup>
const { counter, name, increment } = defineProps({
  counter: Number,
  name: String,
  increment: Number,
});

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <div>
    <h1>{{ name }} - {{ counter }}</h1>
    <button @click="$emit('click', increment)">increment {{ name }}</button>
  </div>
</template>

<style scoped></style>
