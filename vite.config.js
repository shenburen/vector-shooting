import { defineConfig, splitVendorChunkPlugin } from "vite";

export default defineConfig({
  base: "./",
  build: {
    outDir: "vector-shooting",
    chunkSizeWarningLimit: 1000,
  },
  server: {
    open: "./",
    port: 3000,
    host: "0.0.0.0",
  },
  plugins: [splitVendorChunkPlugin()],
});
