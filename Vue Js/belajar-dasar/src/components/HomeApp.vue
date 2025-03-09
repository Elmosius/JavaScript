<script setup>
import { ref } from "vue";

import Contact from "./ContactUs.vue";
import Blog from "./Blog.vue";
import About from "./About.vue";

const currentPage = ref("About");
const pages = {
  Contact,
  Blog,
  About,
};
</script>

<template>
  <button @click="currentPage = 'Blog'">Blog</button>
  <button @click="currentPage = 'About'">About</button>
  <button @click="currentPage = 'Contact'">Contact</button>
  <component :is="pages[currentPage]" />
</template>

<style scoped></style>
