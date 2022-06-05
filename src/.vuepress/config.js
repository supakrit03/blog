const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Supakrit",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "favicon.ico",
        sizes: "16x16",
      },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic",
        rel: "stylesheet",
        type: "text/css",
      },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800",
        rel: "stylesheet",
        type: "text/css",
      },
    ],
    ["link", { href: "dist/css/styles.css", rel: "stylesheet" }],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
      },
    ],
    [
      "script",
      {
        href: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.28.0/prism.min.js",
      },
    ],
    ["link", { href: "dist/css/prism.css", rel: "stylesheet" }],
    ["script", { src: "dist/js/prism.js" }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {},

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
