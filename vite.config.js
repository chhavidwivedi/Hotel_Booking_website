// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,         // optional: lock dev port
    open: true          // optional: auto-open browser
  },
  resolve: {
    alias: {
      "@": "/src"        // optional: path alias for cleaner imports
    }
  }
});
