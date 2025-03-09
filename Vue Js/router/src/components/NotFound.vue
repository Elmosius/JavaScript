<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <h1>Not found {{ route.path }}</h1>
  <p>The page you looking for does not exist</p>
</template>

<style scoped></style>
