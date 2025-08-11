<script setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

const products = ref([]);
const route = useRoute();

// query.(nama parameter) untuk mengambil nilai parameter dari query string
const search = route.query.product || "";

watchEffect(() => {
  fetch(`/api/products.json`)
    .then((response) => response.json())
    .then((products) =>
      products.filter((product) => product.name.includes(search)),
    )
    .then((data) => {
      products.value = data;
    });
});
</script>

<template>
  <h1>Product Search</h1>

  <div v-if="products.length > 0">
    <table>
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>Not Found</div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
</style>
