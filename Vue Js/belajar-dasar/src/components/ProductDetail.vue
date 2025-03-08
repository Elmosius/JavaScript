<script setup>
const product = defineProps({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
    validator(value, props) {
      return value.trim().length !== 0;
    },
  },
  price: {
    type: Number,
    required: true,
    validator(value, props) {
      return value > 0;
    },
  },
});
</script>

<template>
  <h2>Product</h2>
  <p>Product ID: {{ product.id }}</p>
  <p>Product Name: {{ product.name }}</p>
  <p>Product Price: {{ product.price }}</p>
</template>

<style scoped></style>
