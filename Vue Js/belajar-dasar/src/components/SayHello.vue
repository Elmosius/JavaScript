<script setup>
import { computed, reactive } from "vue";

const person = reactive({
  firstName: "",
  lastName: "",
});

// agar tidak terjadi perubahan seluruhnya kita gunakan computed(), kita bisa tau juga nilai sebelumnya
const fullName = computed((oldValue) => {
  console.info(oldValue);
  return `${person.firstName} ${person.lastName}`;
});

function sayHello() {
  person.firstName = document.getElementById("firstName").value;
  person.lastName = document.getElementById("lastName").value;
}
</script>

<template>
  <div>
    <input type="text" placeholder="First Name" id="firstName" /> <br />
    <input type="text" placeholder="Last Name" id="lastName" /> <br />
    <button v-on:click="sayHello">Submit</button>

    <h3>Hello {{ fullName }}</h3>
  </div>
</template>

<style scoped></style>
