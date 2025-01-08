<script setup>
import { defineProps } from "vue";

const { nama } = defineProps({
  nama: {
    type: String,
    default: "Click Me",
  },
});
</script>

<template>
  <div>
    <button>{{ nama }}</button>
  </div>
</template>
