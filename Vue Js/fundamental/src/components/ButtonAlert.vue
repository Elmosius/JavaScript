<script setup>
import { inject } from "vue";

const { nama } = defineProps({
  nama: {
    type: String,
    default: "Click Me",
  },
});

const buttonAttr = {
  status: false,
  type: "button",
  class: "btn-main",
  onclick: `alert('Hello World ini dari button ${nama}')`,
};

function isLoading() {
  if (buttonAttr.status) {
    return "Loading...";
  } else {
    return nama;
  }
}

// coba provider inject
// const name = inject("name");
</script>

<template>
  <div>
    <button :disabled="buttonAttr.status" v-bind="buttonAttr">{{ isLoading() }}</button>
    <!-- <button :disabled="buttonAttr.status" v-bind="buttonAttr">{{ name }}</button> -->
  </div>
</template>

<style scoped>
.btn-main {
  border: 1px solid #ccc;
}
</style>
