import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// inisialisasi untuk pake vue routernya
import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import About from "./components/About.vue";
import ProductDetail from "./components/ProductDetail.vue";
import NotFound from "./components/NotFound.vue";
import ProductSearch from "./components/ProductSearch.vue";
import User from "./components/User.vue";
import UserProfile from "./components/UserProfile.vue";
import UserOrder from "./components/UserOrder.vue";
import UserWishList from "./components/UserWishList.vue";

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
    {
      path: "/products/search",
      component: ProductSearch,
    },

    //   regex buat ngecek apakah id itu angka atau bukan
    //   ? => buat optional
    {
      path: "/product/:id(\\d+)?",
      component: ProductDetail,
    },

    //   belajar nested route
    {
      path: "/user",
      component: User,
      children: [
        {
          path: "",
          component: UserProfile,
        },
        {
          path: "order",
          component: UserOrder,
        },
        {
          path: "wishlist",
          component: UserWishList,
        },
      ],
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
