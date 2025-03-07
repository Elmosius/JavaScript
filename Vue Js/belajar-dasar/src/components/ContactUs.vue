<script setup>
import { reactive } from "vue";

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
  <h1>Contact Us</h1>
  <form>
    <div>
      <label for="name">Name </label>
      <input type="text" id="name" v-model="contact.name" />
    </div>

    <div>
      <label for="email">Email</label>
      <input type="email" id="email" v-model="contact.email" />
    </div>

    <div>
      <label for="age">Age</label>
      <input type="number" id="age" v-model.number="contact.age" />
    </div>

    <div>
      <label for="type">Type</label>
      <select id="type" v-model="contact.type">
        <option value="Regular">Regular</option>
        <option value="VIP">VIP</option>
      </select>
    </div>

    <div>
      <label for="complain">Complain</label>
      <input type="checkbox" id="complain" v-model="contact.complain" />
    </div>

    <div>
      <label for="message">Message</label>
      <textarea id="message" v-model="contact.message"></textarea>
    </div>
  </form>

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
