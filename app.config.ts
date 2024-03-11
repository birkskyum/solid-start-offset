import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  ssr: true,
  server: {
    baseURL: '/solid-start-offset/',
    preset: 'github-pages'
  }
});
