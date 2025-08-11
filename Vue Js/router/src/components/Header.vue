<script setup></script>

<template>
  <p>this is header</p>

  <ul>
    <li>
      <RouterLink :to="{ name: 'user-profile' }">User Profile</RouterLink>
    </li>
    <li><RouterLink :to="{ name: 'user-order' }">User Order</RouterLink></li>
    <li>
      <RouterLink :to="{ name: 'user-wishlist' }">User WishList</RouterLink>
    </li>
  </ul>
</template>

<style scoped>
.router-link-exact-active {
  color: #535bf2;
  font-weight: bold;
}
</style>
