<script setup>
import { ref } from "vue";

let array = ["bold", "red"];

const red = ref(false);
const bold = ref(false);

function changeRed() {
  red.value = !red.value;
}

function changeBold() {
  bold.value = !bold.value;
}

// coba buat v-bind style
const style1 = {
  color: "red",
};

const style2 = {
  fontSize: "2rem",
  fontWeight: "bold",
};
</script>

<template>
  <!--  di vue kita bisa pke object-->
  <p
    :class="{
      red: red,
      bold: bold,
    }"
  >
    Style
  </p>

  <!--  bisa juga pake array seperti ini-->
  <h2 :class="array">Style</h2>

  <hr />
  <!--  buat coba v-bind style-->
  <p :style="style1">Hola</p>
  <p
    :style="{
      color: 'blue',
      fontSize: '2rem',
    }"
  >
    Hola
  </p>
  <p :style="[style1, style2]">Hola</p>
  <button v-on:click="changeRed">Red</button>
  <button v-on:click="changeBold">Bold</button>
</template>

<style scoped>
.red {
  color: red;
}

.bold {
  font-size: 2rem;
  font-weight: bold;
}
</style>
