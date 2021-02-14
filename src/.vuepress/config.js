module.exports = {
  base: "/",
  title: "Profile of Yosuke Ota",
  description: "Profile of Yosuke Ota.",
  serviceWorker: true,
  evergreen: true,
  configureWebpack(_config, _isServer) {
    return {
      resolve: {
        alias: {}
      }
    };
  },

  head: [
    ["meta", { name: "theme-color", content: "#a10000" }]
    // ["link", { rel: "icon", type: "image/png", href: "/logo.png" }]
  ],
  themeConfig: {
    // logo: "/logo.svg",
    repo: "ota-meshi/ota-meshi.github.io",
    docsRepo: "ota-meshi/ota-meshi.github.io",
    docsDir: "src",
    docsBranch: "master",
    editLinks: true,
    lastUpdated: true,
    serviceWorker: {
      updatePopup: true
    },

    nav: [{ text: "Profile", link: "/" }],

    sidebar: {
      "/products/": [
        "/products/eslint.html",
        "/products/stylelint.html",
        "/products/others.html"
      ],
      "/": ["/"]
    }
  }
};
