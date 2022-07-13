import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            NUXT_PUBLIC_SERVICE_URL: "https://truyenmem.herokuapp.com",
            DOMAIN: 'https://meetruyen.com',
            SIZE_NAME: "MeeTruyen"
        },
    },
    head: [
        {
            name: "theme-color", content: '#fff'
        }
    ],
    meta: {
        title: "Đọc truyện tranh online - Truyện gì cũng có - MeeTruyen",
        link: [{ rel: "icon", type: "image/x-icon", href: "/assets/images/favicon.png" }],
        /* For PWA. */
        // name: "theme-color", content: '#fff'
    },
    image: {
        // The screen sizes predefined by `@nuxt/image`:
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
            "2xl": 1536,
        },
    },
    ssr: true,
    modules: ["@nuxtjs/color-mode", "@nuxt/image-edge"],
    colorMode: {
        preference: "dark", // default value of $colorMode.preference
        fallback: "dark", // fallback value if not system preference found
        hid: "nuxt-color-mode-script",
        globalName: "__NUXT_COLOR_MODE__",
        componentName: "ColorScheme",
        classPrefix: "",
        classSuffix: "-mode",
        storageKey: "nuxt-color-mode",
    },
    build: {
        transpile: ["@heroicons/vue"],
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    css: ["~/assets/css/main.css"],
});
