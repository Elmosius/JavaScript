<script setup>
import { computed, reactive, ref } from "vue";
import ListButton from "./components/ListButton.vue";
import CustomButton from "./components/CustomButton.vue";

const msg = "Vue 3 is awesome";
const bodyBlog = '<p style="color: blue;" >Ini adalah body blog</p>';
const idBlog = "blog-1";
const blogClass = "text-2xl text-red-500";

const count = ref("nama");
const count2 = ref(0);
const isTrue = ref(true);
const state = reactive({
  count: 0,
});

setInterval(() => {
  if (count.value.length >= 10) count.value = "nama";
  if (state.count >= 10) state.count = 0;

  count.value += "a";
  state.count++;
}, 500);

const testComputed = computed(() => {
  console.info("render");
  return count2.value > 5 ? "Lebih dari 5" : "Kurang dari 5";
});

function hide() {
  isTrue.value = !isTrue.value;
}
</script>

<template>
  <div>
    <h1>Belajar Vue 3</h1>
    <p>{{ msg }}</p>
    <OptionsComponent />
    <div v-html="bodyBlog" :id="idBlog" :class="blogClass"></div>
    <p>Ini state count: {{ count }}</p>
    <p>Ini state reactive count: {{ state.count }}</p>

    <hr />
    <ListButton :nama="`Register`" />

    <hr />
    <div>Coba computed properties:</div>
    {{ testComputed }}
    <CustomButton @click="count2++" :nama="`${count2} click me`" />

    <hr />
    <h2 v-if="isTrue">Hei! {{ count }}</h2>
    <h2 v-else>Yow {{ count }}</h2>
    <h2 v-show="isTrue">GG! {{ count }}</h2>
    <CustomButton @click="hide()" :nama="`Hide`" />
  </div>
</template>

<style scoped></style>
