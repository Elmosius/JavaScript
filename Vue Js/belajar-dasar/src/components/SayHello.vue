<script setup>
import { computed, reactive, ref } from "vue";

const person = reactive({
  firstName: "",
  lastName: "",
});

const counter = ref(0);

// agar tidak terjadi perubahan seluruhnya kita gunakan computed(), kita bisa tau juga nilai sebelumnya
const fullName = computed((oldValue) => {
  console.info(oldValue);
  return `${person.firstName} ${person.lastName}`;
});

function sayHello() {
  person.firstName = document.getElementById("firstName").value;
  person.lastName = document.getElementById("lastName").value;
}

function changeFirstName(event) {
  person.firstName = event.target.value;
}

function changeLastName(event) {
  person.lastName = event.target.value;
}
</script>

<template>
  <div>
    <form>
      <button @click.prevent="counter++">increment {{ counter }}</button>
      <br />

      <input
        type="text"
        placeholder="First Name"
        id="firstName"
        @input="changeFirstName"
      />
      <br />
      <input
        type="text"
        placeholder="Last Name"
        id="lastName"
        @input="changeLastName"
      />
      <br />
      <button v-on:click.prevent="sayHello">Submit</button>

      <h3>Hello {{ fullName }}</h3>
    </form>
  </div>
</template>

<style scoped></style>
