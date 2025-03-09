import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// inisialisasi untuk pake vue routernya
import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import ProductDetail from "./components/ProductDetail.vue";
import NotFound from "./components/NotFound.vue";

const router = createRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
      sensitive: true,
    },

    //   regex buat ngecek apakah id itu angka atau bukan
    //   ? => buat optional
    {
      path: "/product/:id(\\d+)?",
      component: ProductDetail,
    },

    //   kalau * buat semuanya
    //   kalau + itu minimal ada 1
    {
      path: "/:notFound*",
      component: NotFound,
    },
  ],
  history: createWebHistory(),
});

createApp(App).use(router).mount("#app");
