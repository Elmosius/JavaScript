<script setup>
import { reactive, ref } from "vue";
import ListButton from "./components/ListButton.vue";

const msg = "Vue 3 is awesome";
const bodyBlog = '<p style="color: blue;" >Ini adalah body blog</p>';
const idBlog = "blog-1";
const blogClass = "text-2xl text-red-500";

const count = ref("nama");
const state = reactive({
  count: 0,
});

setInterval(() => {
  if (count.value.length >= 10) count.value = "nama";
  if (state.count >= 10) state.count = 0;

  count.value += "a";
  state.count++;
}, 500);
</script>

<template>
  <div>
    <h1>Belajar Vue 3</h1>
    <p>{{ msg }}</p>
    <OptionsComponent />
    <div v-html="bodyBlog" :id="idBlog" :class="blogClass"></div>
    <p>Ini state count: {{ count }}</p>
    <p>Ini state reactive count: {{ state.count }}</p>
    <ListButton :nama="`Register`" />
  </div>
</template>

<style scoped></style>
