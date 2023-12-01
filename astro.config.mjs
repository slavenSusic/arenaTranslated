import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";
import react from "@astrojs/react";
import vercel from '@astrojs/vercel/serverless';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [astroI18next(), react(), tailwind()],
  output: 'server',
  adapter: vercel()
});