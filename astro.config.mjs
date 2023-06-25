import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        /^node:.*/,
        /^@storyblok:.*/,
        '@storyblok/astro',
        'storyblok/js',
      ]
    }
  },
  site: "https://holacabo.mx",
  // vite: {
  //   plugins: [basicSsl()],
  //   server: {
  //     https: true
  //   }
  // },
  integrations: [mdx(), tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), sitemap(), react()]
});