import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Markdown from "vite-plugin-md";

// 文档: https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 4001,
    // 是否开启 https
    https: false,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "../src"),
      packages: resolve(__dirname, "../packages"),
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueJsx(),
    Markdown(),
  ],
});
