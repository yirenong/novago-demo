import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      // Your app will POST to /gs instead of the full Google URL
      "/gs": {
        target: "https://script.google.com",
        changeOrigin: true,
        secure: true,
        rewrite: () =>
          "/macros/s/AKfycbzhy4TNDBr17Ax7k0-1dbjzsGDHH__6c7AGFnsOofzeUXMRnsB6GCcy3TX36SJZLTLo/exec",
      },
    },
  },
});
