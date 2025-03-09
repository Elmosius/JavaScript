<script setup>
import { provide, reactive } from "vue";
import ProfileAddress from "./ProfileAddress.vue";
import Profile from "./Profile.vue";

const profile = reactive({
  name: "John Doe",
  email: "john@gmail.com",
});

// coba provide di kondisi tertentu kalau misalnya benar benar dibutuhkan di child component
provide("profile", profile);
</script>

<template>
  <input type="text" v-model="profile.name" placeholder="Name" />
  <Profile />
  <ProfileAddress />
</template>

<style scoped></style>
