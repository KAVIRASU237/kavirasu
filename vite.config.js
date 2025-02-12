import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  base: "/",
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  // 👇 This fixes the 404 issue on refresh
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
});
