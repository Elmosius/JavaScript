<script setup>
import { provide, reactive, ref } from "vue";
import ListRendering from "./components/ListRendering.vue";
import ComputedProperties from "./components/ComputedProperties.vue";
import ConditionalRendering from "./components/ConditionalRendering.vue";
import ClassStyle from "./components/ClassStyle.vue";
import EventHandling from "./components/EventHandling.vue";
import Container from "./components/Container.vue";
import ListButton from "./components/ListButton.vue";
import PostList from "./components/PostList.vue";

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

provide("name", count);
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
    <ComputedProperties />

    <hr />
    <ConditionalRendering :count="count" />

    <hr />
    <ListRendering />

    <hr />
    <ClassStyle />

    <hr />
    <EventHandling />

    <hr />
    <Container>
      <template #header>
        <h5>Ini adalah header slot</h5>
      </template>

      <template #main="{ text }">
        <p>Ini adalah main slot</p>
        <p>{{ text }}</p>
      </template>

      <!-- <template #footer>
        <p>Ini adalah footer slot</p>
      </template> -->
    </Container>

    <hr />
    <PostList />
  </div>
</template>

<style scoped></style>
