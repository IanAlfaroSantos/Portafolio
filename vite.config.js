import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  // Forzamos el comportamiento esperado en dev:
  // - Puerto 5173 (como default de Vite)
  // - Host localhost para que no publique IPs de red en consola
  server: {
    host: 'localhost',
    port: 5173,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
