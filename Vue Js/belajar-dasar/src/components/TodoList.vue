<script setup>
const items = [
  { id: 1, text: "Belajar Vue 3", done: true },
  { id: 2, text: "Belajar Vue Router", done: false },
  { id: 3, text: "Belajar React", done: false },
  { id: 4, text: "Belajar Laravel", done: false },
];
</script>

<template>
  <h2>TodoList</h2>
  <template v-for="item in items">
    <ul v-if="!item.done" :key="item.id">
      <li v-for="(value, key) in item" :key="key">{{ key }}: {{ value }}</li>
    </ul>
  </template>
</template>

<style scoped></style>
