import { defineConfig } from 'vite'
import MillionLint from "@million/lint";

// https://vite.dev/config/
export default defineConfig({
  plugins: [MillionLint.vite()],
  base: process.env.NODE_ENV === 'production' ? '/inomed/' : '/',
  server: {
    port: 5000,
    host: "0.0.0.0"
  }
})
