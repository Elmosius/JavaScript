<script setup>
// buat pengecheckan slot ada atau engga
import { ref } from "vue";

const slots = defineSlots();

const counter = ref(0);
</script>

<template>
  <div v-if="slots.header">
    <slot name="header">
      <h2>Default Header</h2>
    </slot>
  </div>

  <div v-if="slots.default">
    <slot name="default" :counter="counter">
      <p>Anda belum mengisi contentnya</p>
    </slot>
  </div>

  <div>
    <slot name="footer">
      <p>Default Footer</p>
    </slot>
  </div>

  <div>
    <button @click="counter++">Increment</button>
  </div>
</template>

<style scoped></style>
