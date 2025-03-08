<script setup>
import { reactive } from "vue";
import ContactForm from "./ContactForm.vue";

const contact = reactive({
  name: "",
  email: "",
  age: 0,
  type: "Regular",
  complain: false,
  message: "",
});
</script>

<template>
  <ContactForm v-model="contact" />
  <div>
    <h2>Result</h2>
    <p>Name: {{ contact.name }}</p>
    <p>Email: {{ contact.email }}</p>
    <p>Age: {{ contact.age }}</p>
    <p>Type: {{ contact.type }}</p>
    <p>Complain: {{ contact.complain }}</p>
    <p>Message: {{ contact.message }}</p>
  </div>
</template>

<style scoped></style>
