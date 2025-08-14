import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Layout from "./components/Layout.vue";
import Register from "./components/User/Register.vue";
import Login from "./components/User/Login.vue";
import ContactList from "./components/Contact/ContactList.vue";
import DashboardLayout from "./components/DashboardLayout.vue";

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
      component: DashboardLayout,
      children: [
        {
          path: "contact",
          name: "contact-list",
          component: ContactList,
        },
      ],
    },
  ],

  history: createWebHistory(),
});

createApp(App).use(router).mount("#app");
