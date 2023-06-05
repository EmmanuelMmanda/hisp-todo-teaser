import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 80,
  },
  plugins: [react()],
  // to avoid the CORS header policy error for HSP api
  proxy: {
    "/api": {
      target: "https://dev.hisptz.com/", // api url
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
});
