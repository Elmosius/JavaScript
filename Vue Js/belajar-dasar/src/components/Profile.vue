<script setup>
import { inject } from "vue";

// coba inject
const profile = inject("profile");
</script>

<template>
  <h2>
    {{ profile.name }}
  </h2>

  <p>
    {{ profile.email }}
  </p>
</template>

<style scoped></style>
