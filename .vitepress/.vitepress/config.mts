import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Linter",
  description: "This repository contains custom linter rules to ensure consistent and clean code. Optimized for developers who prioritize quality and best practices.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "https://www.ogs.de/fileadmin/templates/main/img/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "GitHub", link: "https://github.com/OGS-GmbH" },
      { text: "OGS", link: "https://www.ogs.de/en/" }
    ],

    sidebar: [
      {
        text: "Legal",
        items: [
          { text: "MIT License", link: "license" },
          { text: "Copyright © 2025 — present OGS GmbH", link: "https://www.ogs.de/en/" }
        ]
      }
    ]
  },
  head: [
    [ "link", { rel: "icon", href: "https://www.ogs.de/favicon.ico" } ]
  ],
  base: "/linter/",
  srcDir: "../dist/typedoc",
  outDir: "../dist/vitepress",
  titleTemplate: ":title - OGS Linter",
  cleanUrls: true,
  appearance: "dark"
})
