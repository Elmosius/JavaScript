import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          users: [
            "./src/components/users/UserOrder.vue",
            "./src/components/users/UserWishList.vue",
            "./src/components/users/Header.vue",
            "./src/components/users/Footer.vue",
            "./src/components/users/User.vue",
            "./src/components/users/UserProfile.vue",
          ],
        },
      },
    },
  },
});
