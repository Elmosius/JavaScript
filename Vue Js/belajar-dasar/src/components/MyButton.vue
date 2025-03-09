<script setup>
import { useAttrs } from "vue";

// tapi lebih disarankan menggunakan useProps daripada useAttrs
const attr = useAttrs();
console.info(attr);
</script>

<template>
  <div>
    <button>My Button: {{ attr.name }}</button>
  </div>
</template>

<style scoped></style>
