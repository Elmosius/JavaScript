<script setup>
import { reactive } from "vue";

const books = reactive([
  { id: 1, title: "Book 1", author: "Author 1" },
  { id: 2, title: "Book 2", author: "Author 2" },
  { id: 3, title: "Book 3", author: "Author 3" },
]);
</script>

<template>
  <div>
    <div>Coba v-for</div>
    <div>
      <ul>
        <li v-for="{ id, title, author } in books" :key="id">{{ title }} - {{ author }}</li>
        <li v-for="(book, key) in books" :key="key">{{ book }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
