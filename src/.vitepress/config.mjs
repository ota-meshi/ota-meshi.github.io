import { defineConfig } from "vitepress"

export default defineConfig({
  base: "/",
  title: "Profile of Yosuke Ota",
  description: "Profile of Yosuke Ota.",
  //   head: [["meta", { name: "theme-color", content: "#a10000" }]],

  lastUpdated: true,
  themeConfig: {
    search: {
      provider: "local",
      options: {
        detailedView: true,
      },
    },
    editLink: {
      pattern:
        "https://github.com/ota-meshi/ota-meshi.github.io/edit/master/src/:path",
    },
    outline: {
      level: "deep",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ota-meshi/ota-meshi.github.io",
      },
    ],
    nav: [{ text: "Profile", link: "/" }],
    sidebar: {
      "/products/": [
        {
          text: "ESLint, Plugins, and Parsers",
          link: "/products/eslint.html",
        },
        {
          text: "Stylelint, Plugins, and Parsers",
          link: "/products/stylelint.html",
        },
        {
          text: "Other Products",
          link: "/products/others.html",
        },
      ],
      "/": [
        {
          text: "Profile",
          link: "/",
        },
        {
          text: "ESLint, Plugins, and Parsers",
          link: "/products/eslint.html",
        },
        {
          text: "Stylelint, Plugins, and Parsers",
          link: "/products/stylelint.html",
        },
        {
          text: "Other Products",
          link: "/products/others.html",
        },
      ],
    },
  },
})
