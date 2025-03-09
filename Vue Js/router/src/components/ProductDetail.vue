<script setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

const error = ref(false);
const isLoading = ref(false);
const product = ref(null);
const route = useRoute();

watchEffect(() => {
  fetch(`/api/products/${route.params.id}.json`)
    .then((res) => res.json())
    .then((data) => {
      product.value = data;
      isLoading.value = true;
    })
    .catch((err) => {
      console.log(err);
      error.value = true;
    });
});
</script>

<template>
  <div v-if="isLoading">
    <h1>{{ product.id }} - {{ product.name }}</h1>
    <p>Price: {{ product.price }}</p>
  </div>
  <div v-else-if="error">
    <p>Failed to fetch data {{ route.params.id }}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<style scoped></style>
