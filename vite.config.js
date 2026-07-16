import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["assets/images/LogoPersonal.png"],
      manifest: {
        name: "Ian Alfaro | Portafolio",
        short_name: "Ian Alfaro",
        description: "Portafolio de Ian Alfaro — Desarrollador Jr. FullStack",
        theme_color: "#020306",
        background_color: "#020306",
        display: "standalone",
        orientation: "portrait",
        start_url: "/",
        scope: "/",
        lang: "es",
        icons: [
          {
            src: "/assets/images/LogoPersonal.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/assets/images/LogoPersonal.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        globPatterns: [
          "**/*.{js,css,html,ico,png,svg,webmanifest,jpeg,jpg}"
        ],
        // Siempre intenta cargar desde la red primero (versión más reciente)
        // Si no hay red, usa el caché
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/portafolio-five-alpha-21\.vercel\.app\/.*/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "portfolio-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 7, // 7 días para mayor estabilidad offline
              },
            },
          },
        ],
      },
    }),
  ],
  server: {
    host: "localhost",
    port: 5173,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});

