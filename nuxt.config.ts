import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
    ssr: true,
    runtimeConfig: {
        public: {
            NUXT_PUBLIC_SERVICE_URL: "https://truyenmem.herokuapp.com",
            DOMAIN: 'https://meetruyen.com',
            SIZE_NAME: "MeeTruyen"
        },
    },
    meta: {
        title: "Đọc truyện tranh online - Truyện gì cũng có - MeeTruyen",
        link: [{ rel: "icon", type: "image/x-icon", href: "https://i.im.ge/2022/07/15/FotbqY.png" }],
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
