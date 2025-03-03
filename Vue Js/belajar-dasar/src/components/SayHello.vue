<script setup>
  import {reactive} from "vue";

  const person = reactive({
    firstName: "",
    lastName: ""
  })


  function sayHello() {
    person.firstName = document.getElementById("firstName").value;
    person.lastName = document.getElementById("lastName").value;
  }
</script>

<template>
  <div>
    <input type="text" placeholder="First Name" id="firstName"> <br/>
    <input type="text" placeholder="First Name" id="lastName"> <br/>
    <button v-on:click="sayHello">Submit</button>

    <h3>Hello {{person.firstName}} {{person.lastName}}</h3>
  </div>
</template>

<style scoped>

</style>