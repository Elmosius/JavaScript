<script setup>
import Button from "./Button.vue";

const { nama } = defineProps({
  nama: {
    type: [String, null],
  },
});
</script>

<template>
  <div>
    <Button :nama="nama" />
    <br />
    <Button :nama="`Login`" />
    <br />
    <Button />
  </div>
</template>
