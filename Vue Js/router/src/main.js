import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// inisialisasi untuk pake vue routernya
import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";

const router = createRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
  ],
  history: createWebHistory(),
});

createApp(App).use(router).mount("#app");
