import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://samhou0.github.io/",
  base: "/steam-review-template-zh",
  integrations: [tailwind(), sitemap()],
  i18n: {
    defaultLocale: "zh",
    locales: ["en", "es", "fr", "it", "de", "pl", "zh"],
  }
});
