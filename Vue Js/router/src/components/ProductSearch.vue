<script setup>
import { ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

const products = ref([]);
const route = useRoute();
const router = useRouter();

// query.(nama parameter) untuk mengambil nilai parameter dari query string
const search = ref(route.query.product || "");

watchEffect(() => {
  router.replace({
    name: "product-search",
    query: {
      product: search.value,
    },
  });
  fetch(`/api/products.json`)
    .then((response) => response.json())
    .then((products) =>
      products.filter((product) =>
        product.name
          .toLowerCase()
          .includes(search.value.toString().toLowerCase()),
      ),
    )
    .then((data) => {
      products.value = data;
    });
});
</script>

<template>
  <h1>Product Search</h1>
  <input type="text" v-model="search" name="products" />

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
input {
  width: 100%;
  padding: 2px;
  margin-bottom: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
}
</style>
