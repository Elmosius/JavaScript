<script setup>
import { useAttrs } from "vue";

const attr = useAttrs();
console.info(attr);
</script>

<template>
  <div>
    <button>My Button: {{ attr.name }}</button>
  </div>
</template>

<style scoped></style>
