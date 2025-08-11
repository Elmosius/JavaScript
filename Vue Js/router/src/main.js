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
      component: import("./components/User.vue"),
      children: [
        {
          path: "",
          components: {
            header: import("./components/Header.vue"),
            default: import("./components/UserProfile.vue"),
          },
          name: "user-profile",
        },
        {
          path: "order",
          components: {
            header: import("./components/Header.vue"),
            footer: import("./components/Footer.vue"),
            default: import("./components/UserOrder.vue"),
          },
          name: "user-order",
        },
        {
          path: "wishlist",
          components: {
            header: import("./components/Header.vue"),
            footer: import("./components/Footer.vue"),
            default: import("./components/UserWishList.vue"),
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
      beforeEnter: (to, from, next) => {
        console.info(`not found ${to.fullPath}`);
        next();
      },
    },
  ],
  history: createWebHistory(),
  // createwebhistory itu menggunakan HTML5 Mode dimana urlnya akan normal
  // hashmode itu akan menggunakan # misal http://localhost:3000/#/about
  // memorymode itu tidak akan ada perubahan url pada browser yang dimana perpindahan halmaan harus memakai routerlink
});

router.beforeEach((to, from, next) => {
  console.log(`before navigation to ${to.fullPath} from ${from.fullPath}`);
  next();
});

router.afterEach((to, from) => {
  console.log(`after navigation to ${to.fullPath} from ${from.fullPath}`);
});

createApp(App).use(router).mount("#app");
