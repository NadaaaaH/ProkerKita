import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tanstackStart(),
    nitro(),
    react(),
    tailwindcss(),
  ],
  server: {
    port: 8080,
    strictPort: true,
    host: "0.0.0.0",
  },
  resolve: {
    alias: {
      "@": "/src",
    },
    tsconfigPaths: true,
  },
});
