<script setup>
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

console.info(nama);
</script>

<template>
  <div>
    <button :disabled="buttonAttr.status" v-bind="buttonAttr">{{ isLoading() }}</button>
  </div>
</template>

<style scoped>
.btn-main {
  border: 1px solid #ccc;
}
</style>
