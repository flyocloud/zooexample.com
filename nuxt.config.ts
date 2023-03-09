// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["bootstrap/dist/css/bootstrap.min.css"], // add
  modules: [["@flyodev/nitrocms-nuxt", {
    apiToken: 'ADD_YOUR_API_TOKEN_HERE'
  }]],
});
