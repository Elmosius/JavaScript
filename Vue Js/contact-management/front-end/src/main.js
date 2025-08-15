import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Layout from "./components/Layout.vue";
import Register from "./components/User/Register.vue";
import Login from "./components/User/Login.vue";
import ContactList from "./components/Contact/ContactList.vue";
import DashboardLayout from "./components/DashboardLayout.vue";
import Profile from "./components/User/Profile.vue";
import Logout from "./components/User/Logout.vue";
import ContactCreate from "./components/Contact/ContactCreate.vue";
import ContactEdit from "./components/Contact/ContactEdit.vue";

const router = createRouter({
  routes: [
    {
      path: "/auth",
      component: Layout,
      children: [
        {
          path: "register",
          component: Register,
          name: "register",
        },
        {
          path: "login",
          component: Login,
          name: "login",
        },
        {
          path: "logout",
          name: "logout",
          component: Logout,
        },
      ],
    },
    {
      path: "/",
      redirect: "/dashboard",
    },
    {
      path: "/dashboard",
      component: DashboardLayout,
      children: [
        {
          path: "",
          name: "dashboard",
          component: ContactList,
        },
        {
          path: "contact/create",
          name: "contact-create",
          component: ContactCreate,
        },
        {
          path: "contact/edit/:id",
          name: "contact-edit",
          component: ContactEdit,
          props: true,
        },
        {
          path: "profile",
          name: "profile",
          component: Profile,
        },
      ],
    },
  ],

  history: createWebHistory(),
});

createApp(App).use(router).mount("#app");
