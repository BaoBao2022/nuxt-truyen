const client_manifest = {
  "node_modules/nuxt/dist/app/entry.mjs": {
    "file": "entry-84b7f966.mjs",
    "src": "node_modules/nuxt/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "layouts/default.vue",
      "components/TheHome.vue",
      "components/Manga/Review.vue",
      "components/Manga/Chaplist.vue",
      "pages/index.vue",
      "pages/manga/index.vue",
      "pages/manga/read/[slug]/[chapter]/[id].vue"
    ],
    "css": [
      "entry.234c7573.css"
    ]
  },
  "pages/index.vue": {
    "file": "index-0a246f51.mjs",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs"
    ],
    "dynamicImports": [
      "components/TheHome.vue"
    ]
  },
  "pages/manga/index.vue": {
    "file": "index-a27ec4c6.mjs",
    "src": "pages/manga/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs",
      "_fetch-d2b543ce.mjs",
      "_index-229f113e.mjs"
    ],
    "dynamicImports": [
      "components/Manga/Review.vue",
      "components/Manga/Chaplist.vue"
    ]
  },
  "_fetch-d2b543ce.mjs": {
    "file": "fetch-d2b543ce.mjs",
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs"
    ]
  },
  "_index-229f113e.mjs": {
    "file": "index-229f113e.mjs"
  },
  "pages/manga/read/[slug]/[chapter]/[id].vue": {
    "file": "_id_-b08f03c3.mjs",
    "src": "pages/manga/read/[slug]/[chapter]/[id].vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs",
      "_fetch-d2b543ce.mjs"
    ]
  },
  "components/TheHome.vue": {
    "file": "TheHome-af7c6fac.mjs",
    "src": "components/TheHome.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs",
      "_fetch-d2b543ce.mjs"
    ],
    "dynamicImports": [
      "components/HomePage/Spotlight.vue",
      "components/HomePage/MangeNewUpdate.vue",
      "components/HomePage/MangaFeatured.vue"
    ],
    "css": [
      "TheHome.428024a6.css"
    ]
  },
  "components/Manga/Review.vue": {
    "file": "Review-85acabcd.mjs",
    "src": "components/Manga/Review.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs",
      "_use-resolve-button-type-df7a29e6.mjs"
    ]
  },
  "_use-resolve-button-type-df7a29e6.mjs": {
    "file": "use-resolve-button-type-df7a29e6.mjs",
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs"
    ]
  },
  "components/Manga/Chaplist.vue": {
    "file": "Chaplist-8dcd3ad5.mjs",
    "src": "components/Manga/Chaplist.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs"
    ]
  },
  "layouts/default.vue": {
    "file": "default-55c4fd31.mjs",
    "src": "layouts/default.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs",
      "_use-resolve-button-type-df7a29e6.mjs"
    ],
    "css": [
      "default.7f12ad6b.css"
    ]
  },
  "components/HomePage/Spotlight.vue": {
    "file": "Spotlight-d28d576f.mjs",
    "src": "components/HomePage/Spotlight.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs",
      "_fetch-d2b543ce.mjs",
      "_swiper-slide-47f30077.mjs",
      "_index-229f113e.mjs"
    ]
  },
  "_swiper-slide-47f30077.mjs": {
    "file": "swiper-slide-47f30077.mjs",
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs"
    ]
  },
  "components/HomePage/MangeNewUpdate.vue": {
    "file": "MangeNewUpdate-5f36dcb9.mjs",
    "src": "components/HomePage/MangeNewUpdate.vue",
    "isDynamicEntry": true,
    "imports": [
      "_swiper-slide-47f30077.mjs",
      "node_modules/nuxt/dist/app/entry.mjs"
    ],
    "css": [
      "MangeNewUpdate.f32f72f8.css"
    ]
  },
  "components/HomePage/MangaFeatured.vue": {
    "file": "MangaFeatured-10a343ea.mjs",
    "src": "components/HomePage/MangaFeatured.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs"
    ]
  }
};

export { client_manifest as default };
//# sourceMappingURL=client.manifest.mjs.map
