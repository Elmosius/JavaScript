import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        hello: "hello.html",
        counter: "counter.html",
        sayHello: "say-hello.html",
        style: "style.html",
        score: "score.html",
        todoList: "todoList.html",
        contactus: "contactus.html",
        product: "product.html",
      },
    },
  },
});
