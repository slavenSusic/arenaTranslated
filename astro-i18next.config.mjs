/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "fr", "hr"],

  i18nextServer: {
    backend: {
      loadPath: './public/locales/{{lng}}/{{ns}}.json',
    },
  },
};