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
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const router = createRouter({
  routes: [
    {
      path: "/",
      component: Home,
      name: "home",
      props: {
        title: "Home",
      },
    },
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/about",
      component: About,
      sensitive: true,
      name: "about",
    },
    {
      path: "/products/search",
      component: ProductSearch,
      name: "product-search",
      props: (route) => {
        return {
          product: route.query.product,
        };
      },
    },

    {
      path: "/products/search/:product",
      redirect: (router) => {
        return {
          name: "product-search",
          query: {
            product: router.params.product,
          },
        };
      },
    },

    //   regex buat ngecek apakah id itu angka atau bukan
    //   ? => buat optional
    {
      path: "/product/:id(\\d+)?",
      component: ProductDetail,
      name: "product-detail",
      // props: true,
      props: (route) => {
        return {
          id: route.params.id,
        };
      },
    },

    //   belajar nested route
    {
      path: "/user",
      component: User,
      children: [
        {
          path: "",
          components: {
            header: Header,
            default: UserProfile,
          },
          name: "user-profile",
        },
        {
          path: "order",
          components: {
            header: Header,
            footer: Footer,
            default: UserOrder,
          },
          name: "user-order",
        },
        {
          path: "wishlist",
          components: {
            header: Header,
            footer: Footer,
            default: UserWishList,
          },
          name: "user-wishlist",
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
