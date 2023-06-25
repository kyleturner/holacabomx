import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import netlify from '@astrojs/netlify/functions';

import basicSsl from '@vitejs/plugin-basic-ssl';
const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
// https://rollupjs.org/introduction/
export default defineConfig({
  experimental: {
    assets: true
  }, 
  output: 'hybrid',
  adapter: netlify(),
  site: "https://holacabo.mx",
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  },
  integrations: [mdx(), storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    bridge: false,
    components: {
      experience: "/components/storyblok/Experience",
      experienceItem: "/components/storyblok/ExperienceItem"
    },
    apiOptions: { region: 'us', https: true }
  }), tailwind(), sitemap(), react()]
});