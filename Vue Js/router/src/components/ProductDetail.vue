<script setup>
import { ref, watchEffect } from "vue";

const { id } = defineProps(["id"]);

const error = ref(false);
const isLoading = ref(false);
const product = ref(null);

watchEffect(() => {
  if (id)
    fetch(`/api/products/${id}.json`)
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
  <template v-if="id">
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
  <template v-else>
    <h2>Product not found</h2>
  </template>
</template>

<style scoped></style>
