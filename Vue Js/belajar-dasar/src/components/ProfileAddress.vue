<script setup>
import { inject } from "vue";

const { name } = inject("profile");
</script>

<template>
  <h2>Profile Address: {{ name }}</h2>
  <p>Address ...</p>
</template>

<style scoped></style>
