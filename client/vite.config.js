// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import { defineConfig } from "../node_modules/vite/dist/node/index.js";
//"file:///C:/Users/HOME/Documents/Universidad/Coding%20Bootcamp/Projects/Project-3/Cre8tive/client/node_modules/vite/dist/node/index.js";
import react from "../node_modules/@vitejs/plugin-react/dist/index.mjs";

//"file:///C:/Users/HOME/Documents/Universidad/Coding%20Bootcamp/Projects/Project-3/Cre8tive/client/node_modules/@vitejs/plugin-react/dist/index.mjs";

import { webfontDownload } from "vite-plugin-webfont-dl";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), webfontDownload()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/graphql": {
        target: "http://localhost:3001",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
