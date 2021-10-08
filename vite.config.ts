import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import WindiCSS from "vite-plugin-windicss";
import path from 'path';

export default defineConfig({
  plugins: [
    solidPlugin() as Plugin,
    WindiCSS({
      scan: {
        fileExtensions: ["html", "js", "ts", "jsx", "tsx"],
      }
    }),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    },
  },
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
