<script setup>
import Post from "./Post.vue";
</script>

<template>
  <div>
    <h5>Coba provider-inject</h5>
    <Post :pengarang="'elmo'" :tanggal="'2025'" />
  </div>
</template>
