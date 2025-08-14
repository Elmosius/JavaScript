import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Layout from "./components/Layout.vue";
import Register from "./components/User/Register.vue";

const router = createRouter({
  routes: [
    {
      component: Layout,
      children: [
        {
          path: "/register",
          component: Register,
        },
      ],
    },
    {
      path: "/dashboard",
    },
  ],

  history: createWebHistory(),
});

createApp(App).use(router).mount("#app");
