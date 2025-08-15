<script setup>
import Navbar from "./ui/Navbar.vue";
import Footer from "./ui/Footer.vue";
</script>

<template>
  <div
    class="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex flex-col"
  >
    <Navbar />
    <!-- Main content -->
    <main class="container mx-auto px-4 py-8 flex-grow">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<style scoped></style>
