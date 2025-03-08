<script setup>
import { ref, watch, watchEffect } from "vue";
import ProductDetail from "./ProductDetail.vue";

const productId = ref("product1");
const product = ref(null);

watch(
  productId,
  async (newVal, oldVal) => {
    if (newVal) {
      const response = await fetch(`/${newVal}.json`);
      product.value = await response.json();
    } else {
      product.value = null;
    }
  },
  //   buat opsi immediate: true agar watch dijalankan saat pertama kali
  //   buat opsi once: true agar watch dijalankan sekali saja
  { immediate: true },
);

// untuk immediate ada shortcut menggunakan watchEffect
watchEffect(async () => {
  const response = await fetch(`/${newVal}.json`);
  product.value = await response.json();
});

function handlePriceUp() {
  product.value.price += 1000;
}
</script>

<template>
  <label for="productId"> Product ID: </label>
  <select name="productId" id="productId" v-model="productId">
    <option selected disabled>Pilih</option>
    <option value="product1">Product 1</option>
    <option value="product2">Product 2</option>
    <option value="product3">Product 3</option>
  </select>

  <div v-if="product">
    <ProductDetail
      :id="product.id"
      :price="product.price"
      :name="product.name"
      :handlePriceUp="handlePriceUp"
    />
  </div>
</template>

<style scoped></style>
