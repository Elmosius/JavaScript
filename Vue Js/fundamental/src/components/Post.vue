<script setup>
import { inject } from "vue";

const { pengarang, tanggal } = defineProps({
  pengarang: {
    type: String,
    default: "unknown",
  },
  tanggal: {
    type: String,
    default: "unknown",
  },
});

const name = inject("name");
</script>

<template>
  <div>
    <h4>Pengarang: {{ pengarang }}</h4>
    <p>Tanggal: {{ tanggal }}</p>
    <p>ini dari provider: {{ name }}</p>
    <button @click="name += 'b'">Tambah B</button>
  </div>
</template>
