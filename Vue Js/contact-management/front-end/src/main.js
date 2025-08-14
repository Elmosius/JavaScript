import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Layout from "./components/Layout.vue";
import Register from "./components/User/Register.vue";
import Login from "./components/User/Login.vue";

const router = createRouter({
  routes: [
    {
      component: Layout,
      children: [
        {
          path: "/register",
          component: Register,
          name: "register",
        },
        {
          path: "/login",
          component: Login,
          name: "login",
        },
      ],
    },
    {
      path: "/",
      redirect: "/dashboard",
    },
    {
      path: "/dashboard",
      name: "dashboard",
    },
  ],

  history: createWebHistory(),
});

createApp(App).use(router).mount("#app");
