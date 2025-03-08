<script setup>
const model = defineModel({
  type: Object,
  required: true,
  default: {
    name: "",
    email: "",
    age: 0,
    type: "Regular",
    complain: false,
    message: "",
  },
  get: (value) => {
    value.email = value.email.toUpperCase();
    return value;
  },
});
</script>

<template>
  <h1>Contact Us</h1>
  <form>
    <div>
      <label for="name">Name </label>
      <input type="text" id="name" v-model="model.name" />
    </div>

    <div>
      <label for="email">Email</label>
      <input type="email" id="email" v-model="model.email" />
    </div>

    <div>
      <label for="age">Age</label>
      <input type="number" id="age" v-model.number="model.age" />
    </div>

    <div>
      <label for="type">Type</label>
      <select id="type" v-model="model.type">
        <option value="Regular">Regular</option>
        <option value="VIP">VIP</option>
      </select>
    </div>

    <div>
      <label for="complain">Complain</label>
      <input type="checkbox" id="complain" v-model="model.complain" />
    </div>

    <div>
      <label for="message">Message</label>
      <textarea id="message" v-model="model.message"></textarea>
    </div>
  </form>
</template>

<style scoped></style>
