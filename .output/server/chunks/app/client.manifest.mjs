const client_manifest = {
  "node_modules/nuxt/dist/app/entry.mjs": {
    "file": "entry-238a16ed.mjs",
    "src": "node_modules/nuxt/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "layouts/default.vue",
      "pages/index.vue"
    ],
    "css": [
      "entry.d04beff2.css"
    ]
  },
  "pages/index.vue": {
    "file": "index-908d945a.mjs",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs"
    ]
  },
  "layouts/default.vue": {
    "file": "default-03d5935c.mjs",
    "src": "layouts/default.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs"
    ],
    "dynamicImports": [
      "components/HomePage/Spotlight.vue",
      "components/HomePage/MangeNewUpdate.vue",
      "components/HomePage/MangaFeatured.vue"
    ],
    "css": [
      "default.99806ad7.css"
    ]
  },
  "components/HomePage/Spotlight.vue": {
    "file": "Spotlight-7a2effb0.mjs",
    "src": "components/HomePage/Spotlight.vue",
    "isDynamicEntry": true,
    "imports": [
      "_swiper-slide-d0ee0d76.mjs",
      "node_modules/nuxt/dist/app/entry.mjs"
    ]
  },
  "_swiper-slide-d0ee0d76.mjs": {
    "file": "swiper-slide-d0ee0d76.mjs",
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs"
    ]
  },
  "components/HomePage/MangeNewUpdate.vue": {
    "file": "MangeNewUpdate-a4fc183a.mjs",
    "src": "components/HomePage/MangeNewUpdate.vue",
    "isDynamicEntry": true,
    "imports": [
      "_swiper-slide-d0ee0d76.mjs",
      "node_modules/nuxt/dist/app/entry.mjs"
    ],
    "css": [
      "MangeNewUpdate.d863446f.css"
    ]
  },
  "components/HomePage/MangaFeatured.vue": {
    "file": "MangaFeatured-83f04a2b.mjs",
    "src": "components/HomePage/MangaFeatured.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs"
    ]
  }
};

export { client_manifest as default };
//# sourceMappingURL=client.manifest.mjs.map
