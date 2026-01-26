import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    outDir: "dist",
    sourcemap: true,
    minify: "terser",
    host: true,
    port: process.env.PORT ? parseInt(process.env.PORT) : 8000,
    allowedHosts: ["all", ".ngrok.app"],
  },
});
